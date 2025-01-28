'use client';
import { generateClient } from 'aws-amplify/api';
import { createAddProduct } from '../../../graphql/mutations';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { uploadData } from 'aws-amplify/storage';
import { listAddProducts } from '@/graphql/queries';
import { getCurrentUser } from 'aws-amplify/auth'; // Use getCurrentUser() as you requested

const ProductFormPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [userId, setUserId] = useState<string | null>(null); // To store user ID
  const [message, setMessage] = useState<string | null>(null); // For displaying messages
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null); // Success or Error
  const [isVisible, setIsVisible] = useState(false); // Control visibility of the message

  const client = generateClient();

  const initialValues = {
    category: 'newArrivals',
    productName: '',
    price: '',
    description: '',
    size: [] as string[], // Allow multiple sizes
    color: [] as string[], // Allow multiple colors
    imageKeys: [] as string[],
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Product name is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    description: Yup.string().required('Description is required'),
    size: Yup.array().min(1, 'Please select at least one size'),
    color: Yup.array().min(1, 'Please select at least one color'),
    imageKeys: Yup.array().min(1, 'At least one image is required'),
  });

  // Fetch userId when the component mounts using getCurrentUser
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await getCurrentUser(); // Fetch user data using getCurrentUser()

        setUserId(user.userId); // Assuming 'id' is the user ID
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUserId();
  }, []);

  const handleImageUpload = async () => {
    const uploadedImageKeys: string[] = [];
    for (const file of files) {
      const uniqueFileName = `${Date.now()}_${file.name}`;
      try {
        await uploadData({
          key: uniqueFileName,
          data: file,
          options: {
            accessLevel: 'guest',
            onProgress: (progress: any) => {
              const progressPercent = Math.round((progress?.loaded / progress.total) * 100);
              setUploadProgress(progressPercent);
            },
          },
        });
        uploadedImageKeys.push(uniqueFileName);
      } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Image upload failed.');
      }
    }
    return uploadedImageKeys;
  };

  const handleSubmit = async (values: any) => {
    try {
      const imageKeys = await handleImageUpload();
      const newProduct = {
        ...values,
        imageKeys, // Store the multiple image keys
        userId, // Include userId in the product data
      };
      console.log(newProduct,'newProduct')
      const result = await client.graphql({
        query: createAddProduct,
        variables: { input: newProduct },
      });

      console.log('Product created:', result);
      setMessage('Product added successfully!');
      setMessageType('success');
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false); // Hide message after 1.5 seconds
      }, 1500);
    } catch (error) {
      console.error('Error creating product:', error);
      setMessage('Failed to add product. Please try again.');
      setMessageType('error');
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false); // Hide message after 1.5 seconds
      }, 1500);
    }
  };

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-4xl font-bold mb-6 text-center text-gray-800'>Add New Product</h2>

      {/* Success/Error Message */}
      {isVisible && message && (
        <div
          className={`transition-all duration-1000 ease-in-out ${
            messageType === 'success' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
          } rounded-lg p-3 mb-4 opacity-100`}
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-out 1.5s' : 'none',
          }}
        >
          {message}
        </div>
      )}

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className='space-y-6'>
            {/* Category */}
            <div className='flex flex-col'>
              <label htmlFor='category' className='text-sm font-medium text-gray-700 mb-2'>
                Category
              </label>
              <Field as='select' id='category' name='category' className='p-3 border rounded-md'>
                <option value='newArrivals'>New Arrivals</option>
                <option value='topSelling'>Top Selling</option>
              </Field>
            </div>

            {/* Product Name */}
            <div className='flex flex-col'>
              <label htmlFor='productName' className='text-sm font-medium text-gray-700 mb-2'>
                Product Name
              </label>
              <Field
                type='text'
                id='productName'
                name='productName'
                className='p-3 border rounded-md'
                placeholder='Enter product name'
              />
              <ErrorMessage name='productName' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            {/* Price */}
            <div className='flex flex-col'>
              <label htmlFor='price' className='text-sm font-medium text-gray-700 mb-2'>
                Price ($)
              </label>
              <Field
                type='number'
                id='price'
                name='price'
                className='p-3 border rounded-md'
                placeholder='Enter product price'
              />
              <ErrorMessage name='price' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            {/* Description */}
            <div className='flex flex-col'>
              <label htmlFor='description' className='text-sm font-medium text-gray-700 mb-2'>
                Description
              </label>
              <Field
                as='textarea'
                id='description'
                name='description'
                rows={4}
                className='p-3 border rounded-md'
                placeholder='Write a detailed description of the product'
              />
              <ErrorMessage name='description' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            {/* Sizes Dropdown */}
            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 mb-2'>Sizes</label>
              <div className='flex gap-4'>
                {['Small', 'Medium', 'Large', 'Extra Large'].map((size) => (
                  <label key={size} className='flex items-center space-x-2'>
                    <Field type='checkbox' name='size' value={size} className='w-4 h-4' />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name='sizes' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            {/* Colors Dropdown */}
            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 mb-2'>Colors</label>
              <div className='flex gap-4'>
                {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
                  <label key={color} className='flex items-center space-x-2'>
                    <Field type='checkbox' name='color' value={color} className='w-4 h-4' />
                    <span>{color}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name='colors' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            {/* Image Upload */}
            <div className='flex flex-col'>
              <label htmlFor='imageKeys' className='text-sm font-medium text-gray-700 mb-2'>
                Upload Images (Select multiple)
              </label>
              <input
                type='file'
                id='imageKeys'
                name='imageKeys'
                accept='image/*'
                multiple
                onChange={(e) => {
                  const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
                  setFiles(selectedFiles);
                  setFieldValue('imageKeys', selectedFiles);
                }}
                className='p-3 border rounded-md'
              />
              <ErrorMessage name='imageKeys' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl'
              >
                Save Product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductFormPage;
