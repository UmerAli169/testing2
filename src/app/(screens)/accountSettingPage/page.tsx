'use client';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  updatePassword,
  updateUserAttributes,
  sendUserAttributeVerificationCode,
  confirmUserAttribute,
} from 'aws-amplify/auth';
import { ToastContainer, toast } from 'react-toastify';

const ProfileEdit = () => {
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm new password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      newEmail: '',
      address: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values: any, { setSubmitting }) => {
      setSubmitting(true);
      console.log('Submitting form...', values);

      try {
        if (values.newEmail && values.newEmail !== values.email) {
          await handleUpdateEmail(values.newEmail);
        }

        if (otpVerified && values.newPassword) {
          console.log('Updating password...');
          await handleUpdatePassword(values.currentPassword, values.newPassword);
        } else if (!otpVerified) {
          toast.error('Please verify OTP before updating password.');
        }

        toast.success('Profile updated successfully!');
      } catch (error) {
        console.error('Profile update failed:', error);
        toast.error('Failed to update profile.');
      }

      setSubmitting(false);
    },
  });


  const handleUpdatePassword = async (oldPassword: any, newPassword: any) => {
    try {
      console.log('Calling updatePassword with:', oldPassword, newPassword);
      await updatePassword({ oldPassword, newPassword });
      toast.success('Password updated successfully!');
    } catch (err: any) {
      console.error('Error updating password:', err);
      toast.error(err.message || 'Failed to update password.');
    }
  };

  const handleUpdateEmail = async (newEmail: any) => {
    try {
    let a=  await updateUserAttributes({
        userAttributes: {
          email: newEmail,
        },
      });
console.log(a,'a')
      let b=await sendUserAttributeVerificationCode({
        userAttributeKey: 'email',
        options: {},
      });
console.log(b,'b')
      console.log('Email update initiated. Please verify the new email.');
      toast.success('OTP verified successfully. You can now update your password.');
    } catch (err) {
      console.log('Error updating email:', err);
      toast.error('Invalid OTP. Please try again.');
    }
  };

  const handleSendOtp = async () => {
    try {
      await sendUserAttributeVerificationCode({
        userAttributeKey: 'email',
        options: {},
      });
      setOtpSent(true);
      setOtpVerified(false);
      toast.info('A new OTP has been sent to your email.');
    } catch (err) {
      console.error('Error sending OTP:', err);
      toast.error('Failed to send OTP. Try again later.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmUserAttribute({
        userAttributeKey: 'email',
        confirmationCode: otp,
      });
      setOtpVerified(true);
      toast.success('OTP verified successfully. You can now update your email.');
    } catch (err: any) {
      console.error('Error verifying OTP:', err);

      if (err.name === 'ExpiredCodeException') {
        toast.error('OTP expired. Please request a new one.');
        setOtpSent(false); // Allow resending OTP
      } else {
        toast.error('Invalid OTP. Please try again.');
      }
    }
  };

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <ToastContainer position='top-right' autoClose={3000} />

      <div className='mb-4 flex justify-between text-sm text-gray-600'>
        <span>Home / My Account</span>
        <span>Welcome!</span>
      </div>

      <div className='grid grid-cols-[250px,1fr] gap-8'>
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

        <div className='m-8'>
          <h2 className='text-[24px] sm:text-[28px] text-black font-ABeeZee my-6'>Edit Your Profile</h2>

          <form onSubmit={formik.handleSubmit} className='max-w-2xl mt-10'>
            <div className='grid grid-cols-2 gap-6 mb-6'>
              {['firstName', 'lastName'].map((field) => (
                <div key={field}>
                  <label className='block text-sm text-gray-600 mb-2 ABeeZee'>
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
                    <div className='text-sm text-red-500 mt-1'>
                      {typeof formik.errors[field] === 'string' ? formik.errors[field] : 'Invalid input'}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className='mb-6'>
              <label className='block text-sm text-gray-600 mb-2 ABeeZee'>Email</label>
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
                <div className='text-sm text-red-500 mt-1'>
                  {typeof formik.errors.email === 'string' ? formik.errors.email : 'Invalid email format'}
                </div>
              )}
            </div>

            <div className='mb-6'>
              <label className='block text-sm text-gray-600 mb-2 ABeeZee'>New Email</label>
              <input
                type='email'
                name='newEmail'
                value={formik.values.newEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee ${
                  formik.touched.newEmail && formik.errors.newEmail ? 'border-red-500' : ''
                }`}
                placeholder='Enter new email'
              />
              {formik.touched.newEmail && formik.errors.newEmail && (
                <div className='text-sm text-red-500 mt-1'>{formik.errors.newEmail as any}</div>
              )}
            </div>

            <div className='mb-6'>
              <label className='block text-sm text-gray-600 mb-2 ABeeZee'>Address</label>
              <input
                type='text'
                name='address'
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border bg-[#F5F5F5] rounded-md font-ABeeZee ${
                  formik.touched.address && formik.errors.address ? 'border-red-500' : ''
                }`}
                placeholder='Enter your address'
              />
              {formik.touched.address && formik.errors.address && (
                <div className='text-sm text-red-500 mt-1'>{formik.errors.address as any}</div>
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

            {otpSent && (
              <div className='mt-4'>
                <input
                  type='text'
                  name='otp'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='w-full px-4 py-2 border bg-[#F5F5F5] rounded-md ABeeZee'
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

            {otpVerified && (
              <div className='mb-6'>
                <label className='block text-sm text-gray-600 mb-2 ABeeZee'>Password Changes</label>
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
                        <div className='text-sm text-red-500 mt-1'>
                          {typeof formik.errors[field] === 'string' ? formik.errors[field] : 'Invalid input'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
