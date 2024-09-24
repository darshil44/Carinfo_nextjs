"use client";

import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
      >
        <span className="text-gray-800 font-semibold">{question}</span>
        {/* Animated arrow icon */}
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {/* SVG arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <p className="text-gray-600 mt-2 mb-4 pl-2 transition-opacity duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: 'Can I sell my car on CarInfo?',
      answer:
        'Yes, you can sell your car on CarInfo. Click on the resale value option, enter all the basic information related to your vehicle, and schedule an appointment for you. A required person will arrive at your place.',
    },
    {
      question: 'How can I buy Fastag?',
      answer:
        'You can buy Fastag through CarInfo’s app by following these steps...',
    },
    {
      question: 'How to get insurance renewed for my vehicle?',
      answer:
        'Please visit our Car Insurance section, fill out the necessary information, and our partners will provide you with competitive insurance quotes. You need to click on insurance and enter all the necessary details of your vehicle. Different offers based upon your vehicle type will be shown',
    },
    {
      question: 'How do I contact customer support for assistance?',
      answer:
        'If you need assistance or have any questions, you can reach out to our customer support team via call at 9310516278 or mail us at support@carinfo.app and we will be happy to help with any inquiries or concerns you may have',
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">FAQ</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
