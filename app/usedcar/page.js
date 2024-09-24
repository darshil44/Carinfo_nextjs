'use client'; // Client component

import React from 'react';
import Image from 'next/image'; // Import from 'next/image'
import { motion } from 'framer-motion'; // For animations
import Link from 'next/link';

const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    model: 'Model S',
    year: '2023',
    features: ['Electric', 'Autopilot', 'Luxury'],
    imageUrl:'/carcards/5.jpg'
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    model: '320i',
    year: '2022',
    features: ['Sporty', 'Comfort', 'High Performance'],
    imageUrl:'/carcards/4.jpg'
  },
  {
    id: 3,
    name: 'Audi A4',
    model: 'A4',
    year: '2022',
    features: ['Elegant', 'Powerful Engine', 'Advanced Tech'],
    imageUrl: '/carcards/9.jpg'
  },
  {
    id: 4,
    name: 'Mercedes-Benz C-Class',
    model: 'C300',
    year: '2023',
    features: ['Luxury', 'Comfortable', 'High Tech'],
    imageUrl: '/carcards/8.jpg'
  },
  {
    id: 5,
    name: 'Toyota Corolla',
    model: 'Corolla',
    year: '2023',
    features: ['Reliable', 'Fuel Efficient', 'Affordable'],
    imageUrl: '/carcards/1.jpg'
  },
  {
    id: 6,
    name: 'Honda Civic',
    model: 'Civic',
    year: '2023',
    features: ['Sporty', 'Efficient', 'Stylish'],
    imageUrl: '/carcards/7.jpg'
  },
  {
    id: 7,
    name: 'Ford Mustang',
    model: 'GT',
    year: '2022',
    features: ['Powerful', 'Iconic', 'Performance'],
    imageUrl: '/carcards/2.jpg'
  },
  {
    id: 8,
    name: 'Chevrolet Camaro',
    model: 'SS',
    year: '2022',
    features: ['Aggressive', 'Performance', 'Stylish'],
    imageUrl: '/carcards/10.jpg'
  },
  {
    id: 9,
    name: 'Hyundai Elantra',
    model: 'N',
    year: '2023',
    features: ['Modern', 'Comfortable', 'High Tech'],
    imageUrl: '/carcards/11.jpg'
  },
  {
    id: 10,
    name: 'Kia Stinger',
    model: 'GT',
    year: '2023',
    features: ['Sporty', 'Luxurious', 'Powerful'],
    imageUrl: '/carcards/3.jpg'
  },
];

export default function NewCarPage() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-950">Used Car</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
                <p className="text-gray-600 mb-1">Model: {car.model}</p>
                <p className="text-gray-600 mb-2">Year: {car.year}</p>
                <ul className="list-disc list-inside mb-4">
                  {car.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Link className="inline-block px-6 py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-colors duration-300" href={`/buy/${car.id}`}>Buy Now</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }