"use client";
import { generateClient } from "aws-amplify/api";
import { createAddProduct } from "../../../graphql/mutations";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { uploadData } from "aws-amplify/storage";
import { getCurrentUser } from "aws-amplify/auth"; // Use getCurrentUser() as you requested

const ProductFormPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [userId, setUserId] = useState<string | null>(null); // To store user ID
  const [message, setMessage] = useState<string | null>(null); // For displaying messages
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  ); // Success or Error
  const [isVisible, setIsVisible] = useState(false); // Control visibility of the message

  const client = generateClient();

  const initialValues = {
    category: "newArrivals",
    productName: "",
    price: "",
    discountedPrice: "",
    discountType: "percentage", // 'percentage' or 'fixed'
    discountValue: "",
    description: "",
    size: [] as string[], // Allow multiple sizes
    color: [] as string[], // Allow multiple colors
    imageKeys: [] as string[],
  };

  // Fetch userId when the component mounts using getCurrentUser
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await getCurrentUser(); // Fetch user data using getCurrentUser()
        setUserId(user.userId); // Assuming 'id' is the user ID
      } catch (error) {
        console.error("Error fetching user:", error);
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
            accessLevel: "guest",
            onProgress: (progress: any) => {
              const progressPercent = Math.round(
                (progress?.loaded / progress.total) * 100
              );
              setUploadProgress(progressPercent);
            },
          },
        });
        uploadedImageKeys.push(uniqueFileName);
      } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Image upload failed.");
      }
    }
    return uploadedImageKeys;
  };

  const handleSubmit = async (values: any) => {
    try {
      const imageKeys = await handleImageUpload();

      // Ensure discountValue is a valid number (default to 0 if not applicable)
      const discountValue =
        values.discountType === "fixed" ? 0 : Number(values.discountValue) || 0;

      // Calculate discounted price only if discount is applied
      const discountedPrice =
        values.discountType === "fixed" || !values.discountValue
          ? undefined // Use `undefined` instead of `null` to prevent GraphQL validation errors
          : calculateDiscountedPrice(
              Number(values.price),
              discountValue,
              values.discountType
            );

      const newProduct = {
        ...values,
        imageKeys,
        userId,
        discountValue, // Always a valid number
        discountedPrice, // Only set if there's a discount
      };

      const result = await client.graphql({
        query: createAddProduct,
        variables: { input: newProduct },
      });

      console.log("Product created:", result);
      setMessage("Product added successfully!");
      setMessageType("success");
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 1500);
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("Failed to add product. Please try again.");
      setMessageType("error");
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 1500);
    }
  };

  const calculateDiscountedPrice = (
    price: number,
    discountValue: number,
    discountType: string
  ) => {
    if (discountType === "percentage") {
      return price - (price * discountValue) / 100;
    } else if (discountType === "fixed") {
      return price - discountValue;
    }
    return price;
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Add New Product
      </h2>

      {/* Success/Error Message */}
      {isVisible && message && (
        <div
          className={`transition-all duration-1000 ease-in-out ${
            messageType === "success"
              ? "text-green-600 bg-green-100"
              : "text-red-600 bg-red-100"
          } rounded-lg p-3 mb-4 opacity-100`}
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-out 1.5s"
              : "none",
          }}
        >
          {message}
        </div>
      )}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <Form className="space-y-6">
            {/* Category */}
            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <Field
                as="select"
                id="category"
                name="category"
                className="p-3 border rounded-md"
              >
                <option value="newArrivals">New Arrivals</option>
                <option value="topSelling">Top Selling</option>
              </Field>
            </div>

            {/* Product Name */}
            <div className="flex flex-col">
              <label
                htmlFor="productName"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Product Name
              </label>
              <Field
                type="text"
                id="productName"
                name="productName"
                className="p-3 border rounded-md"
                placeholder="Enter product name"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Price ($)
              </label>
              <Field
                type="number"
                id="price"
                name="price"
                className="p-3 border rounded-md"
                placeholder="Enter product price"
              />
            </div>

            {/* Discount Type */}
            <div className="flex flex-col">
              <label
                htmlFor="discountType"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Discount Type
              </label>
              <Field
                as="select"
                id="discountType"
                name="discountType"
                className="p-3 border rounded-md"
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
              </Field>
            </div>

            {/* Discount Value */}
            <div className="flex flex-col">
              <label
                htmlFor="discountValue"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Discount Value
              </label>
              <Field
                type="number"
                id="discountValue"
                name="discountValue"
                className="p-3 border rounded-md"
                placeholder="Enter discount value"
                disabled={values.discountType === "fixed"} // Disable input if fixed is selected
              />
            </div>

            {/* Display discounted price */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Discounted Price ($)
              </label>
              <p className="text-lg font-medium">
                {values.discountType === "fixed" || !values.discountValue
                  ? "" // Show nothing if discountType is fixed or no discount is applied
                  : calculateDiscountedPrice(
                      Number(values.price),
                      Number(values.discountValue),
                      values.discountType
                    ).toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 mb-2"
              >
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
            </div>

            {/* Sizes */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Sizes
              </label>
              <div className="flex gap-4">
                {["Small", "Medium", "Large", "Extra Large"].map((size) => (
                  <label key={size} className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      name="size"
                      value={size}
                      className="w-4 h-4"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Colors
              </label>
              <div className="flex gap-4">
                {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                  <label key={color} className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      name="color"
                      value={color}
                      className="w-4 h-4"
                    />
                    <span>{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Images Upload */}
            <div className="flex flex-col">
              <label
                htmlFor="imageKeys"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Product Images
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
                className="p-3 border rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white p-4 rounded-md mt-6"
                disabled={uploadProgress > 0 && uploadProgress < 100} // Disable button during upload
              >
                {uploadProgress > 0 && uploadProgress < 100
                  ? `Uploading (${uploadProgress}%)`
                  : "Submit Product"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductFormPage;
