"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, type SignInInput } from "aws-amplify/auth";

interface FormValues {
  emailOrPhone: string;
  password: string;
}

const handleSignIn = async ({ username, password }: SignInInput) => {
  try {
    const { isSignedIn } = await signIn({ username, password });
    return { success: true, isSignedIn };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export default function LoginForm() {
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
      const response = await handleSignIn({
        username: values.emailOrPhone,
        password: values.password,
      });

      if (response.success && response.isSignedIn) {
        router.push("/"); // Redirect to Dashboard after successful login
      } else {
        setMessage(response.message || "Login failed.");
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (error: any) {
      console.error("Error during login:", error.message || error);
      setMessage("An error occurred, please try again.");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const navigateToSignUp = () => {
    router.push("/auth/signup");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>
        {message && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 rounded-lg p-3">
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
              <div className="mb-4">
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
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={navigateToSignUp}
                  >
                    Signup
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
