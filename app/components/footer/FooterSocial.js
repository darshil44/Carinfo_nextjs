import React from 'react';

export default function FooterSocial() {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-gray-900 transition">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-gray-900 transition">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-gray-900 transition">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
}
