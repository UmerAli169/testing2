'use client'
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactPage = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(
        /^[0-9]{11}$/,
        'Phone number must be 11 digits'
      )
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  // Formik hook for form handling
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formik.values.email);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      {/* Breadcrumb */}
      <div className="py-4 text-[14px] font-ABeeZee ">
        <span className="text-black">Home / Contact</span>
      </div>

      <div className="grid md:grid-cols-[300px,1fr] gap-8 mb-12 ">
        {/* Contact Info Box */}
        <div className=" p-6 h-fit font-ABeeZee">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
            <img src='/svgs/contactForm/phone.svg' alt='Close' className='w-[40px]' />
              <h3 className="text-[16px] text-black text-lg">Call To Us</h3>
            </div>
            <p className="text-[14px] text-black mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px] text-black">Phone: +8801611112222</p>
          </div>
          <div className='w-full border-t border-gray-300 my-12'></div>

          <div>
            <div className="flex items-center gap-3 mb-3">
            <img src='/svgs/contactForm/mail.svg' alt='Close' className='w-[40px]' />
              <h3 className="text-[16px] text-black text-lg">Write To Us</h3>
            </div>
            <p className="text-[14px] text-black mb-2">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-[14px] text-black">Email: customer@exclusive.com</p>
            <p className="text-[14px] text-black">Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-[#FFFFFF] m-10'>
          <form onSubmit={formik.handleSubmit} className="grid gap-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 rounded-md bg-[#F5F5F5]  font-ABeeZee"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="absolute text-red-500 text-xs mt-1">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 rounded-md bg-[#F5F5F5] font-ABeeZee"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="absolute text-red-500 text-xs mt-1">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 rounded-md bg-[#F5F5F5] font-ABeeZee"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="absolute text-red-500 text-xs mt-1">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={8}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-md bg-[#F5F5F5] resize-none font-ABeeZee"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="absolute text-red-500 text-xs mt-1">{formik.errors.message}</div>
              ) : null}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 font-ABeeZee"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
