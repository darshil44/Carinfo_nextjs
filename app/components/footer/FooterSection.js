import React from 'react';

export default function FooterSection({ title, children }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      {children}
    </div>
  );
}
