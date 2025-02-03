'use client';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updatePassword, updateUserAttributes, sendUserAttributeVerificationCode, confirmUserAttribute } from 'aws-amplify/auth';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    newEmail: '',
  });

  const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent


  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm new password is required'),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Profile updates:', values);
      setSubmitting(true);

      try {
        if (values.newEmail !== formData.email && otpVerified) {
          await handleUpdateEmail(values.newEmail);
        }

        if (values.newPassword && otpVerified) {
          await handleUpdatePassword(values.currentPassword, values.newPassword);
        }

        // Save the form data to localStorage
        localStorage.setItem('profileData', JSON.stringify(values));
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      }

      setSubmitting(false);
    },
  });

  const handleUpdatePassword = async (oldPassword, newPassword) => {
    try {
      await updatePassword({ oldPassword, newPassword });
      console.log('Password updated successfully');
      alert('Password updated successfully!');
    } catch (err) {
      console.log('Error updating password:', err);
      alert('Failed to update password');
    }
  };

  const handleUpdateEmail = async (newEmail) => {
    try {
      await updateUserAttributes({
        userAttributes: {
          email: newEmail,
        },
      });

      await sendUserAttributeVerificationCode({
        userAttributeKey: 'email',
        options: {},
      });

      console.log('Email update initiated. Please verify the new email.');
      alert('Please check your email for a verification code.');

      // Redirect to verification page
      window.location.href = `/auth/emailotp?email=${encodeURIComponent(newEmail)}`;
    } catch (err) {
      console.log('Error updating email:', err);
      alert('Failed to update email');
    }
  };

  const handleSendOtp = async () => {
    try {
      await sendUserAttributeVerificationCode({
        userAttributeKey: 'email',
        options: {},
      });
      setOtpSent(true);
      alert('OTP sent to your email. Please check your inbox.');
    } catch (err) {
      console.error('Error sending OTP:', err);
      alert('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmUserAttribute({
        userAttributeKey: 'email',
        confirmationCode: otp,
      });
      setOtpVerified(true);
      alert('OTP verified successfully. You can now update your password.');
    } catch (err) {
      console.error('Error verifying OTP:', err);
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      {/* Breadcrumb */}
      <div className='mb-4 flex justify-between text-sm text-gray-600'>
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

            <button
              type='button'
              onClick={handleSendOtp}
              className='px-4 py-2 bg-blue-600 text-white rounded-md mt-4'
              disabled={otpSent}
            >
              Send OTP to Email
            </button>

            {/* OTP Input */}
            {otpSent && (
              <div className='mt-4'>
                <input
                  type='text'
                  name='otp'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee'
                  placeholder='Enter OTP'
                />
                <button
                  type='button'
                  onClick={handleVerifyOtp}
                  className='px-4 py-2 bg-green-600 text-white rounded-md mt-2'
                >
                  Verify OTP
                </button>
              </div>
            )}

            {/* Password Fields */}
            {otpVerified && (
              <div className='mb-6'>
                <label className='block text-sm text-gray-600 mb-2 font-ABeeZee'>Password Changes</label>
                <div className='space-y-4'>
                  {['currentPassword', 'newPassword', 'confirmPassword'].map((field) => (
                    <div key={field}>
                      <input
                        type='password'
                        name={field}
                        placeholder={
                          field === 'currentPassword'
                            ? 'Current Password'
                            : field === 'newPassword'
                            ? 'New Password'
                            : 'Confirm New Password'
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
            )}

            {/* Buttons */}
            <div className='flex justify-end'>
              <button
                type='submit'
                disabled={formik.isSubmitting}
                className='px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400'
              >
                {formik.isSubmitting ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
