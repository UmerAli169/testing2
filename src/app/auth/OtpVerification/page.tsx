"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { handleSignUpConfirmation } from "../Authication/authConfirmation";
import { useRouter, useSearchParams } from "next/navigation";

export default function OtpVerification() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Fetch query params
  const emailFromQuery = searchParams.get("email"); // Get email from query
console.log(emailFromQuery)
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);

  // Redirect if email is missing in query params
  useEffect(() => {
    if (!emailFromQuery) {
      // router.push("/");
    }
  }, [emailFromQuery, router]);

  const initialValues = {
    otp: Array(6).fill(""), // OTP initialized as an array of 6 empty strings
  };

  const validationSchema = Yup.object({
    otp: Yup.array()
      .of(Yup.string().length(1, "Each digit must be one character").required("Required"))
      .length(6, "OTP must be exactly 6 digits"), // Enforcing 6 digits
  });

  const handleSubmit = async (values: { otp: string[] }) => {
    const otpCode = values.otp.join(""); // Convert the array of OTP digits into a string

    try {
      await handleSignUpConfirmation({
        username: emailFromQuery!,
        confirmationCode: otpCode,
      });

      setVerificationStatus("OTP verified successfully!");
      setTimeout(() => {
        router.push("/components/Dashboard");
      }, 1500);
    } catch (error: any) {
      setVerificationStatus(error.message || "Failed to verify OTP. Please try again.");
    }
  };

  const crossFunction = () => {
    setShowForm(false);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className={`${styles.formContainer} ${showForm ? styles.visible : ""}`}>
      <div className={styles.form}>
        <FontAwesomeIcon
          icon={faTimes}
          className={`${styles.closeButton} ${styles.fixedSizeIcon}`}
          onClick={crossFunction}
        />
        <h2>Verify OTP</h2>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form>
              <div className={styles.otpContainer}>
                {values.otp.map((otpDigit, index) => (
                  <Field
                    key={index} 
                    type="text"
                    name={`otp[${index}]`}
                    maxLength={1}
                    value={otpDigit}
                    onChange={handleChange}
                    w-12  
                    className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                ))}
              </div>
              <button
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                Verify OTP
              </button>
              {verificationStatus && (
                <div className={styles.verificationStatus}>
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
