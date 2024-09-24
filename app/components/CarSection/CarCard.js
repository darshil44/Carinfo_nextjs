import React from 'react';

export default function CarCard({ car }) {
  return (
    <div className="border p-2 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl xl:w-full lg:w-1/2 md:w-1/3 sm:w-1/4 mx-auto">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{car.name}</h3>
      <p className="text-base sm:text-lg text-gray-600">
        Price: <span className="text-blue-500 font-semibold">₹{car.price}</span>
      </p>
    </div>
  );
}
