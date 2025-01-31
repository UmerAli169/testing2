'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProfileEdit = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm new password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'email@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log('Profile updates:', values);
      setSubmitting(false);
    },
  });

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      {/* Breadcrumb */}
      <div className='mb-4 flex justify-between text-sm text-gray-600 font-ABeeZee'>
        <span>Home / My Account</span>
        <span>Welcome!</span>
      </div>

      <div className='grid grid-cols-[250px,1fr] gap-8'>
        {/* Sidebar */}
        <div className='space-y-4 font-ABeeZee text-gray-600 text-[16px] mt-12'>
          <h2 className='text-[24px] sm:text-[22px] lg:text-[20px] text-gray-800'>Manage My Account</h2>
          <div className='space-y-2'>
            <div className='text-black'>My Profile</div>
            <div className='pl-4 space-y-2'>
              <div>Address Book</div>
              <div>My Payment Options</div>
            </div>
          </div>
          <div className='space-y-2'>
            <div className='text-black'>My Orders</div>
            <div className='pl-4 space-y-2'>
              <div>My Returns</div>
              <div>My Canceled Orders</div>
            </div>
          </div>
          <div className='text-black'>My Wishlist</div>
        </div>

        {/* Edit Profile Form */}
        <div className='m-8'>
          <h2 className='text-[24px] sm:text-[28px] text-black font-ABeeZee my-6'>Edit Your Profile</h2>

          <form onSubmit={formik.handleSubmit} className='max-w-2xl mt-10'>
            <div className='grid grid-cols-2 gap-6 mb-6'>
              {['firstName', 'lastName'].map((field) => (
                <div key={field}>
                  <label className='block text-sm text-gray-600 mb-2 font-ABeeZee'>
                    {field === 'firstName' ? 'First Name' : 'Last Name'}
                  </label>
                  <input
                    type='text'
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee ${
                      formik.touched[field] && formik.errors[field] ? 'border-red-500' : ''
                    }`}
                    placeholder={`Enter ${field}`}
                  />
                  {formik.touched[field] && formik.errors[field] && (
                    <div className='text-sm text-red-500 mt-1'>{formik.errors[field]}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Email */}
            <div className='mb-6'>
              <label className='block text-sm text-gray-600 mb-2 font-ABeeZee'>Email</label>
              <input
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-sm text-red-500 mt-1'>{formik.errors.email}</div>
              )}
            </div>

            {/* Address (Editable Now) */}
            <div className='mb-6'>
              <label className='block text-sm text-gray-600 mb-2 font-ABeeZee'>Address</label>
              <input
                type='text'
                name='address'
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee ${
                  formik.touched.address && formik.errors.address ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.address && formik.errors.address && (
                <div className='text-sm text-red-500 mt-1'>{formik.errors.address}</div>
              )}
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 font-ABeeZee'
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
            {/* Password Fields */}
            <div className='mb-6'>
              <label className='block text-sm text-gray-600 mb-2 font-ABeeZee'>Password Changes</label>
              <div className='space-y-4'>
                {['currentPassword', 'newPassword', 'confirmNewPassword'].map((field, index) => (
                  <div key={field}>
                    <input
                      type='password'
                      name={field}
                      placeholder={
                        index === 0 ? 'Current Password' : index === 1 ? 'New Password' : 'Confirm New Password'
                      }
                      value={formik.values[field]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee ${
                        formik.touched[field] && formik.errors[field] ? 'border-red-500' : ''
                      }`}
                    />
                    {formik.touched[field] && formik.errors[field] && (
                      <div className='text-sm text-red-500 mt-1'>{formik.errors[field]}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end'>
              <button type='button' className='px-6 py-2 font-ABeeZee'>
                Cancel
              </button>
              <button
                type='submit'
                className='px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 font-ABeeZee'
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Saving...' : ' Changes Password'}``
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
