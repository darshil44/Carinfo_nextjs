"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // For success message

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
  
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!res.ok) {
        const errorData = await res.json().catch(() => null); // Handle case where response isn't JSON
        setError(errorData?.message || "Registration failed.");
        return;
      }
  
      const data = await res.json().catch(() => null); // Safely parse JSON
      if (data) {
        setSuccess("Registration successful! Redirecting to login...");
        e.target.reset();
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error during registration:", error);
    }
  };
  
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-yellow-200 to-blue-300 px-4 sm:px-6 lg:px-8">
      <div className="relative shadow-2xl p-8 rounded-lg border-t-4 border-pink-400 bg-white max-w-md w-full">
        <div className="absolute -top-6 -right-6 bg-yellow-500 w-16 h-16 rounded-full mix-blend-multiply filter blur-lg opacity-20"></div>
        <div className="absolute -bottom-6 -left-6 bg-blue-500 w-16 h-16 rounded-full mix-blend-multiply filter blur-lg opacity-20"></div>

        <h1 className="text-2xl font-bold my-4 text-center text-pink-600">Create Your Account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
          />

          <button className="bg-pink-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {success}
            </div>
          )}

          <Link className="text-sm mt-3 text-right hover:underline text-pink-600" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}






// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function RegisterForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError("All fields are necessary.");
//       return;
//     }

//     try {
//       const resUserExists = await fetch("/api/userExists", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const { user } = await resUserExists.json();

//       if (user) {
//         setError("User already exists.");
//         return;
//       }

//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       });

//       if (res.ok) {
//         const form = e.target;
//         form.reset();
//         router.push("/");
//       } else {
//         console.log("User registration failed.");
//       }
//     } catch (error) {
//       console.log("Error during registration: ", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-yellow-200 to-blue-300 px-4 sm:px-6 lg:px-8">
//       <div className="relative shadow-2xl p-8 rounded-lg border-t-4 border-pink-400 bg-white max-w-md w-full">
//         <div className="absolute -top-6 -right-6 bg-yellow-500 w-16 h-16 rounded-full mix-blend-multiply filter blur-lg opacity-20"></div>
//         <div className="absolute -bottom-6 -left-6 bg-blue-500 w-16 h-16 rounded-full mix-blend-multiply filter blur-lg opacity-20"></div>

//         <h1 className="text-2xl font-bold my-4 text-center text-pink-600">Create Your Account</h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Full Name"
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
//           />
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
//           />

//           <button className="bg-pink-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
//             Register
//           </button>

//           {error && (
//             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
//               {error}
//             </div>
//           )}

//           <Link className="text-sm mt-3 text-right hover:underline text-pink-600" href={"/login"}>
//             Already have an account? <span className="underline">Login</span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }
