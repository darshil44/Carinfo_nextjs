import React from 'react';

export default function FooterCopy() {
  return (
    <div className="container mx-auto px-4 mt-6 text-center text-xs text-gray-500">
      <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </div>
  );
}
