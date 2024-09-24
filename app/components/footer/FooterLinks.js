import React from 'react';

export default function FooterLinks() {
  return (
    <div className="flex space-x-4 mb-4 md:mb-0">
      <a href="/about" className="text-sm hover:text-gray-900 transition">About</a>
      <a href="/contact" className="text-sm hover:text-gray-900 transition">Contact</a>
      <a href="/privacy" className="text-sm hover:text-gray-900 transition">Privacy Policy</a>
    </div>
  );
}
