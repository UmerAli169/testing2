'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProfileEdit = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('New password is required'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm new password is required'),
  });

  // Formik hook for managing form state and handling validation
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'email@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Prevent form submission from refreshing the page
      console.log('Profile updates:', values);
      setSubmitting(false); // Allow submit button to be re-enabled
    },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-4 text-sm text-gray-600">
        <span>Home / My Profile</span>
      </div>

      <div className="grid grid-cols-[250px,1fr] gap-8">
        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <h2 className="font-medium mb-6">Manage My Account</h2>
          
          <div className="space-y-2">
            <div className="text-gray-800 font-medium">My Profile</div>
            <div className="pl-4 space-y-2 text-gray-600">
              <div>Address Book</div>
              <div>My Payment Options</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-gray-600">My Orders</div>
            <div className="text-gray-600">My Returns</div>
            <div className="text-gray-600">My Canceled Orders</div>
          </div>

          <div>
            <div className="text-gray-600 leading-[21px] text-[12px] sm:text-[20px]">My Wishlist</div>
          </div>
        </div>

        {/* Edit Profile Form */}
        <div>
          <h2 className="text-2xl font-medium mb-8">Edit Your Profile</h2>
          
          <form onSubmit={formik.handleSubmit} className="max-w-2xl">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border border-gray-200 rounded-md ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="Enter first name"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-sm text-red-500 mt-1">{formik.errors.firstName}</div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border border-gray-200 rounded-md ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="Enter last name"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-sm text-red-500 mt-1">{formik.errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                placeholder="Email"
                disabled
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-sm text-red-500 mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50 ${formik.touched.address && formik.errors.address ? 'border-red-500' : ''}`}
                placeholder="Address"
                disabled
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-sm text-red-500 mt-1">{formik.errors.address}</div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">Password Changes</label>
              <div className="space-y-4">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border border-gray-200 rounded-md ${formik.touched.currentPassword && formik.errors.currentPassword ? 'border-red-500' : ''}`}
                />
                {formik.touched.currentPassword && formik.errors.currentPassword && (
                  <div className="text-sm text-red-500 mt-1">{formik.errors.currentPassword}</div>
                )}
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border border-gray-200 rounded-md ${formik.touched.newPassword && formik.errors.newPassword ? 'border-red-500' : ''}`}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div className="text-sm text-red-500 mt-1">{formik.errors.newPassword}</div>
                )}
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  value={formik.values.confirmNewPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 border border-gray-200 rounded-md ${formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? 'border-red-500' : ''}`}
                />
                {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
                  <div className="text-sm text-red-500 mt-1">{formik.errors.confirmNewPassword}</div>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                className="px-6 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                disabled={formik.isSubmitting} // Disable submit button when form is submitting
              >
                {formik.isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
