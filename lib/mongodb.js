import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
export default dbConnect;





// import mongoose from "mongoose";

// let isConnected = false; // To track connection status

// export const dbConnect = async () => {
//   if (isConnected) {
//     // If already connected, don't reconnect
//     console.log("Already connected to MongoDB");
//     return;
//   }

//   try {
//     // Connect to MongoDB
//     const connection = await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
    
//     isConnected = connection.connections[0].readyState; // Check connection state
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB: ", error);
//     throw new Error("Unable to connect to MongoDB");
//   }
// };









// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//     throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const opts = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         };
//         cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//             return mongoose;
//         });
//     }
//     cached.conn = await cached.promise;
//     return cached.conn;
// }