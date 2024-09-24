"use client";
import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterCopy from './FooterCopy';
import FooterSection from './FooterSection';

const Footer = () => {
  return (
    <footer className="bg-[#E9FAF4] text-gray-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <FooterSection title="YourCompany">
          <p className="leading-relaxed text-sm">
            Crafting innovative solutions and delivering top-notch services since 2023. Our commitment to excellence drives us forward.
          </p>
        </FooterSection>

        {/* Footer Links */}
        <FooterLinks />

        {/* Social Media Icons */}
        <FooterSocial />
      </div>

      {/* Copyright Information */}
      <FooterCopy />
    </footer>
  );
};

export default Footer;