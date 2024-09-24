// src/app/contact/page.js
"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Log the form data to the terminal
      console.log("Form Data:", formData);
      
      // Handle form submission (e.g., send to an API)
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 bg-teal-50 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        {/* Company logo */}
        <img src="/logo/logo.svg" alt="Company Logo" className="w-48 h-48 mx-auto mb-4" />
        <h2 className="text-4xl md:text-6xl font-bold text-teal-800">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-2">We'd love to hear from you! Let us know how we can help.</p>
      </div>

      {submitted ? (
        <p className="text-teal-600 text-center text-xl font-semibold">
          Thank you for your message! We will get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto p-8 bg-white shadow-2xl rounded-lg space-y-6 transition-transform duration-500 transform hover:scale-105"
        >
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-semibold text-teal-800">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className={`border rounded-lg w-full p-4 text-gray-800 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-semibold text-teal-800">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email"
              className={`border rounded-lg w-full p-4 text-gray-800 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-lg font-semibold text-teal-800">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message"
              className={`border rounded-lg w-full p-4 text-gray-800 ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300`}
              rows="5"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:bg-teal-700 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
