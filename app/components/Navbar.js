"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const { data: session } = useSession(); // Get session data
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  // Toggle dropdown visibility
  const handleToggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Toggle mobile menu visibility
  const handleToggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setOpenDropdown(null); // Close all dropdowns when closing mobile menu
    }
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  // Close dropdown and mobile menu when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container') && !event.target.closest('.mobile-menu')) {
      setOpenDropdown(null);
      setIsMobileMenuOpen(false); // Close mobile menu when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white p-2 h-20 relative z-50 flex justify-between items-center shadow-md md:space-x-10">
      {/* Logo and Navigation Items */}
      <div className="flex items-center pl-4 space-x-10">
        {/* Logo on the left */}
        <Link href="/">
          <Image src="/logo/logo.svg" alt="Logo" width={120} height={50} />
        </Link>

        {/* Navigation Items (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 items-center text-lg">
          <li>
            <Link href="/" className="text-[#082f49] hover:text-[#38bdf8] transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#082f49] hover:text-[#38bdf8] transition duration-300">Contact</Link>
          </li>

          {/* Buy Dropdown */}
          <li className="relative dropdown-container">
            <span
              className="text-[#082f49] cursor-pointer hover:text-[#38bdf8] transition duration-300"
              onClick={() => handleToggleDropdown('buy')}
            >
              Buy
            </span>
            {openDropdown === 'buy' && (
              <ul className="absolute left-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-50 animate-fade-in">
                <li className="p-2 hover:bg-gray-200 cursor-pointer transition duration-300">
                  <Link href="/newcar" onClick={() => setOpenDropdown(null)}>New Car</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer transition duration-300">
                  <Link href="/usedcar" onClick={() => setOpenDropdown(null)}>Used Car</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/blog" className="text-[#082f49] hover:text-[#38bdf8] transition duration-300">Blog</Link>
          </li>
        </ul>
      </div>

      {/* Authentication Section */}
      <div className="hidden md:block">
        {session ? (
          <div className="flex items-center space-x-4">
            <span className="text-[#082f49]">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="bg-[#38bdf8] text-white px-4 py-2 rounded hover:bg-[#082f49] transition duration-300">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={handleToggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8 text-[#082f49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-[#082f49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black z-50 mobile-menu">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link href="/" className="text-[#082f49] hover:text-[#38bdf8]" onClick={handleToggleMobileMenu}>Home</Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#082f49] hover:text-[#38bdf8]" onClick={handleToggleMobileMenu}>Contact</Link>
            </li>
            <li>
              <Link href="/newcar" className="text-[#082f49] hover:text-[#38bdf8]" onClick={handleToggleMobileMenu}>New Car</Link>
            </li>
            <li>
              <Link href="/usedcar" className="text-[#082f49] hover:text-[#38bdf8]" onClick={handleToggleMobileMenu}>Used Car</Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#082f49] hover:text-[#38bdf8]" onClick={handleToggleMobileMenu}>Blog</Link>
            </li>
            {session ? (
              <li>
                <button
                  onClick={() => { signOut(); handleToggleMobileMenu(); }}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link href="/login" className="bg-[#38bdf8] text-white px-4 py-2 rounded hover:bg-[#082f49]" onClick={handleToggleMobileMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}



// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

//   // Toggle dropdown visibility
//   const handleToggleDropdown = (dropdown) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   // Toggle mobile menu visibility
//   const handleToggleMobileMenu = () => {
//     if (isMobileMenuOpen) {
//       setOpenDropdown(null); // Close all dropdowns when closing mobile menu
//     }
//     setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
//   };

//   // Close dropdown and mobile menu when clicking outside
//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.dropdown-container') && !event.target.closest('.mobile-menu')) {
//       setOpenDropdown(null);
//       setIsMobileMenuOpen(false); // Close mobile menu when clicking outside
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white p-2 h-20 relative z-50 flex justify-between items-center shadow-md md:space-x-10">
//       {/* Logo and Navigation Items */}
//       <div className="flex items-center pl-4 space-x-10">
//         {/* Logo on the left */}
//         <Link href="/">
//           <Image src="/logo/logo.svg" alt="Logo" width={120} height={50} />
//         </Link>

//         {/* Navigation Items (Hidden on mobile) */}
//         <ul className="hidden md:flex space-x-8 items-center text-lg">
//           <li>
//             <Link href="/" className="text-[#082f49] hover:text-[#38bdf8] transition duration-300">Home</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-[#082f49] hover:text-[#38bdf8] transition duration-300">Contact</Link>
//           </li>

//           {/* Buy Dropdown */}
//           <li className="relative dropdown-container">
//             <span
//               className="text-[#082f49] cursor-pointer hover:text-[#38bdf8] transition duration-300"
//               onClick={() => handleToggleDropdown('buy')}
//             >
//               Buy
//             </span>
//             {openDropdown === 'buy' && (
//               <ul className="absolute left-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-50 animate-fade-in">
//                 <li className="p-2 hover:bg-gray-200 cursor-pointer transition duration-300">
//                   <Link href="/newcar" onClick={() => setOpenDropdown(null)}>New Car</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-200 cursor-pointer transition duration-300">
//                   <Link href="/usedcar" onClick={() => setOpenDropdown(null)}>Used Car</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Rent Dropdown */}
//           {/* <li className="relative dropdown-container">
//             <span
//               className="text-[#082f49] cursor-pointer hover:text-[#38bdf8] transition duration-300"
//               onClick={() => handleToggleDropdown('rent')}
//             >
//               Rent
//             </span>
//             {openDropdown === 'rent' && (
//               <ul className="absolute left-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-50 animate-fade-in">
//                 <li className="p-2 hover:bg-gray-200 cursor-pointer transition duration-300">
//                   <Link href="/rent/new-car" onClick={() => setOpenDropdown(null)}>New Car</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-200 cursor-pointer transition duration-300">
//                   <Link href="/rent/used-car" onClick={() => setOpenDropdown(null)}>Used Car</Link>
//                 </li>
//               </ul>
//             )}
//           </li> */}

//           <li>
//             <Link href="/blog" className="text-[#082f49] hover:text-[#38bdf8] transition duration-300">Blog</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Login Button (Remains visible on all screens) */}
//       <div className="hidden md:block">
//         <Link href="/login" className="bg-[#38bdf8] text-white px-4 py-2 rounded hover:bg-[#082f49] transition duration-300">
//           Login
//         </Link>
//       </div>

//       {/* Mobile Hamburger Icon */}
//       <div className="md:hidden">
//         <button onClick={handleToggleMobileMenu} className="focus:outline-none">
//           {isMobileMenuOpen ? (
//             <svg className="w-8 h-8 text-[#082f49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-8 h-8 text-[#082f49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white text-black z-50 mobile-menu">
//           <ul className="space-y-4 p-4">
//             <li>
//               <Link href="/" onClick={() => {setIsMobileMenuOpen(false); setOpenDropdown(null);}} className="text-[#082f49] block">Home</Link>
//             </li>
//             <li>
//               <Link href="/contact" onClick={() => {setIsMobileMenuOpen(false); setOpenDropdown(null);}} className="text-[#082f49] block">Contact</Link>
//             </li>
//             <li className="relative dropdown-container">
//               <span
//                 className="text-[#082f49] cursor-pointer block"
//                 onClick={() => handleToggleDropdown('buy')}
//               >
//                 Buy
//               </span>
//               {openDropdown === 'buy' && (
//                 <ul className="ml-4 space-y-2">
//                   <li>
//                     <Link href="/newcar" onClick={() => setIsMobileMenuOpen(false)}>New Car</Link>
//                   </li>
//                   <li>
//                     <Link href="/buy/used-car" onClick={() => setIsMobileMenuOpen(false)}>Used Car</Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="relative dropdown-container">
//               <span
//                 className="text-[#082f49] cursor-pointer block"
//                 onClick={() => handleToggleDropdown('rent')}
//               >
//                 Rent
//               </span>
//               {openDropdown === 'rent' && (
//                 <ul className="ml-4 space-y-2">
//                   <li>
//                     <Link href="/rent/new-car" onClick={() => setIsMobileMenuOpen(false)}>New Car</Link>
//                   </li>
//                   <li>
//                     <Link href="/rent/used-car" onClick={() => setIsMobileMenuOpen(false)}>Used Car</Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-[#082f49] block">Blog</Link>
//             </li>

//             {/* Login Button for Mobile */}
//             <li>
//               <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#38bdf8] text-white block text-center py-2 rounded">Login</Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }