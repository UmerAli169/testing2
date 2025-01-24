"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';



export const handleSignUpConfirmation=async({
  username,
  confirmationCode
}: ConfirmSignUpInput) =>{
  try {
    const { isSignUpComplete } = await confirmSignUp({
      username,
      confirmationCode
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
} 
export default function OtpVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get("email");
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

 
  useEffect(() => {
    if (!emailFromQuery) {
      router.push("/");
    }
  }, [emailFromQuery, router]);

  const initialValues = { otp: Array(6).fill("") };

  const validationSchema = Yup.object({
    otp: Yup.array()
      .of(Yup.string().length(1, "Each digit must be one character").required("Required"))
      .length(6, "OTP must be exactly 6 digits"),
  });

  const handleSubmit = async (values: { otp: string[] }) => {
    const otpCode = values.otp.join("");

    try {
      // Replace with your actual OTP confirmation logic
      await handleSignUpConfirmation({
        username: emailFromQuery!,
        confirmationCode: otpCode,
      });

      setVerificationStatus("OTP verified successfully!");
      setTimeout(() => router.push("/auth/login"), 1500);
    } catch (error: any) {
      setVerificationStatus(error.message || "Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Cross Button */}
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={() => router.push("/")}
        />
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Verify OTP</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form>
              <div className="flex justify-center gap-2 mb-6">
                {values.otp.map((_, index) => (
                  <Field
                    key={index}
                    type="text"
                    name={`otp[${index}]`}
                    maxLength={1}
                    onChange={handleChange}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
                disabled={isSubmitting}
              >
                Verify OTP
              </button>
              {verificationStatus && (
                <div className="mt-4 text-center text-sm text-gray-700">
                  {verificationStatus}
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

  