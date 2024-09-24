import { dbConnect } from "../../../../lib/mongodb";
import { hash } from "bcryptjs";
import mongoose from "mongoose";

// Named export for POST method
export async function POST(req) {
  // Parse the request body
  const { name, email, password } = await req.json();

  // Validate input
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ message: "All fields are necessary." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Connect to the database
    await dbConnect();
    const db = mongoose.connection.db;

    // Check if the user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists." }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert the new user into the database
    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });

    // Return a success response
    return new Response(JSON.stringify({ message: "User registered successfully." }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error during registration:", error);

    // Return a server error response
    return new Response(JSON.stringify({ message: "An error occurred. Please try again.", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
