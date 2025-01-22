'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

interface FormValues {
  emailOrPhone: string;
  password: string;
}

export default function SignupForm() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  const initialValues: FormValues = {
    emailOrPhone: '',
    password: '',
  };

  const validationSchema = Yup.object({
    emailOrPhone: Yup.string()
      .required('Required')
      .test(
        'is-email-or-phone',
        'Must be a valid email or phone number',
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^[\d\s-+()]{7,}$/;
          return emailRegex.test(value!) || phoneRegex.test(value!);
        }
      ),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);

    // Set message after form submission
    setMessage('Form submitted successfully!');
    setTimeout(() => setMessage(null), 2000);
  };

  const navigateToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Signup
          </h2>
          {message && (
            <div className="mb-4 text-sm text-red-600 bg-red-100 rounded-lg p-2">
              {message}
            </div>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="emailOrPhone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email or Phone
                  </label>
                  <Field
                    type="text"
                    name="emailOrPhone"
                    id="emailOrPhone"
                    placeholder="Enter your email or phone number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="emailOrPhone"
                    component="div"
                    className="text-sm text-red-600 mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-600 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  Signup Now
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      className="text-indigo-600 hover:underline"
                      onClick={navigateToLogin}
                    >
                      Login
                    </button>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
