"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signUp } from "aws-amplify/auth";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};

const handleSignUp = async ({
  username,
  password,
  email,
}: SignUpParameters): Promise<{ success: boolean; message: string }> => {
  try {
    const { userId } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
        },
        autoSignIn: true,
      },
    });

    console.log(userId);
    return { success: true, message: "Sign-up successful!" };
  } catch (error: any) {
    console.error("Error signing up:", error);
    return {
      success: false,
      message: error?.message || "An error occurred during sign-up.",
    };
  }
};

interface FormValues {
  emailOrPhone: string;
  password: string;
}

export default function SignupForm() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  const initialValues: FormValues = {
    emailOrPhone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    emailOrPhone: Yup.string()
      .required("Required")
      .test(
        "is-email-or-phone",
        "Must be a valid email or phone number",
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^[\d\s-+()]{7,}$/;
          return emailRegex.test(value!) || phoneRegex.test(value!);
        }
      ),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await handleSignUp({
        username: values.emailOrPhone,
        password: values.password,
        email: values.emailOrPhone,
      });

      if (response.success) {
        router.push(
          `/auth/OtpVerification?email=${encodeURIComponent(
            values.emailOrPhone
          )}`
        );
      } else {
        setMessage(response.message || "Signup failed.");
        setTimeout(() => setMessage(null), 2000);
      }
    } catch (error: any) {
      console.error("Error during signup:", error.message || error);
      setMessage("An error occurred, please try again.");
      setTimeout(() => setMessage(null), 2000);
    }
  };

  const navigateToLogin = () => {
    router.push("/auth/login");
  };

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-lg p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h2>
        {message && (
          <div className="mb-6 text-center text-sm text-red-600 bg-red-100 rounded-lg py-2 px-4">
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
              <div className="mb-6">
                <label
                  htmlFor="emailOrPhone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email or Phone
                </label>
                <Field
                  type="text"
                  name="emailOrPhone"
                  id="emailOrPhone"
                  placeholder="Enter your email or phone number"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ErrorMessage
                  name="emailOrPhone"
                  component="div"
                  className="text-sm text-red-600 mt-1"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-600 mt-1"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                Signup Now
              </button>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
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
  );
}
