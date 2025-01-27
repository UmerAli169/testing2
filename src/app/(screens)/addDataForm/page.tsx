'use client';
import { generateClient } from 'aws-amplify/api';
import { createAddProduct } from '../../../graphql/mutations';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { uploadData } from 'aws-amplify/storage';
import { listAddProducts } from '@/graphql/queries';
import { getCurrentUser } from 'aws-amplify/auth'; // Use getCurrentUser() as you requested

const ProductFormModal = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null); // To store user ID
  const client = generateClient();

  const initialValues = {
    category: 'newArrivals',
    productName: '',
    price: '',
    description: '',
    size: 'Small',
    color: 'Red',
    imageKey: null,
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Product name is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    description: Yup.string().required('Description is required'),
    size: Yup.string().required('Please select a size'),
    color: Yup.string().required('Please select a color'),
    imageKey: Yup.mixed().required('Please upload an image'),
  });

  // Fetch userId when the component mounts using getCurrentUser
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await getCurrentUser(); // Fetch user data using getCurrentUser()
        if (user) {
          setUserId(user.id); // Assuming 'id' is the user ID
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUserId();

    const fetchingAllProduct = async () => {
      const result = await client.graphql({ query: listAddProducts });
      console.log(result, 'listed products');
    };
    fetchingAllProduct();
  }, []);

  const handleImageUpload = async () => {
    if (file) {
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
        return uniqueFileName;
      } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Image upload failed.');
      }
    }
    throw new Error('No file selected.');
  };

  const handleSubmit = async (values: any) => {
    try {
      const imageKey = await handleImageUpload();
      const newProduct = {
        ...values,
        imageKey,
        userId, // Include userId in the product data
      };

      const result = await client.graphql({
        query: createAddProduct,
        variables: { input: newProduct },
      });

      console.log('Product created:', result);
      alert('Product added successfully!');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to add product.');
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Product
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)} // Close modal on background click
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Form Content */}
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Add New Product</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ setFieldValue }) => (
                <Form className="space-y-6">
                  {/* Category */}
                  <div className="flex flex-col">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <Field as="select" id="category" name="category" className="p-3 border rounded-md">
                      <option value="newArrivals">New Arrivals</option>
                      <option value="topSelling">Top Selling</option>
                    </Field>
                  </div>

                  {/* Product Name */}
                  <div className="flex flex-col">
                    <label htmlFor="productName" className="text-sm font-medium text-gray-700 mb-2">
                      Product Name
                    </label>
                    <Field
                      type="text"
                      id="productName"
                      name="productName"
                      className="p-3 border rounded-md"
                      placeholder="Enter product name"
                    />
                    <ErrorMessage name="productName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Price */}
                  <div className="flex flex-col">
                    <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-2">
                      Price ($)
                    </label>
                    <Field
                      type="number"
                      id="price"
                      name="price"
                      className="p-3 border rounded-md"
                      placeholder="Enter product price"
                    />
                    <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      rows={4}
                      className="p-3 border rounded-md"
                      placeholder="Write a detailed description of the product"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Sizes Dropdown */}
                  <div className="flex flex-col">
                    <label htmlFor="size" className="text-sm font-medium text-gray-700 mb-2">
                      Size
                    </label>
                    <Field as="select" id="size" name="size" className="p-3 border rounded-md">
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                      <option value="Extra Large">Extra Large</option>
                    </Field>
                    <ErrorMessage name="size" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Colors Dropdown */}
                  <div className="flex flex-col">
                    <label htmlFor="color" className="text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <Field as="select" id="color" name="color" className="p-3 border rounded-md">
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                    </Field>
                    <ErrorMessage name="color" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Image Upload */}
                  <div className="flex flex-col">
                    <label htmlFor="imageKey" className="text-sm font-medium text-gray-700 mb-2">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="imageKey"
                      name="imageKey"
                      accept="image/*"
                      onChange={(e) => {
                        const selectedFile = e.target.files?.[0];
                        setFieldValue('imageKey', selectedFile);
                        setFile(selectedFile);
                      }}
                      className="p-3 border rounded-md"
                    />
                    <ErrorMessage name="imageKey" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl"
                    >
                      Save Product
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFormModal;
