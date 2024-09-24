"use client";

import React, { useState } from 'react';
import CarFilter from './CarFilter';
import CarCard from './CarCard';

const carData = [
  {
    name: 'Maruti Suzuki Alto',
    price: 250000,
    imageUrl: 'carcards/1.jpg',
  },
  {
    name: 'Hyundai i20',
    price: 450000,
    imageUrl: 'carcards/2.jpg',
  },
  {
    name: 'Hyundai i10',
    price: 250000,
    imageUrl: 'carcards/3.jpg',
  },
  {
    name: 'TATA Altroz',
    price: 150000,
    imageUrl: 'carcards/4.jpg',
  },
  {
    name: 'Toyota Fortuner',
    price: 1500000,
    imageUrl: 'carcards/5.jpg',
  },
  {
    name: 'Fronx Suzuki',
    price: 400000,
    imageUrl: 'carcards/6.jpg',
  },
  {
    name: 'Vento',
    price: 440000,
    imageUrl: 'carcards/7.jpg',
  },
  {
    name: 'Harrier',
    price: 640000,
    imageUrl: 'carcards/8.jpg',
  },
  {
    name: 'Tata Nexon',
    price: 700000,
    imageUrl: 'carcards/9.jpg',
  },
  {
    name: 'Range Rover',
    price: 22000000,
    imageUrl: 'carcards/10.jpg',
  },
  {
    name: 'Bently',
    price: 12000000,
    imageUrl: 'carcards/11.jpg',
  },

];

export default function CarSection() {
  const [selectedRange, setSelectedRange] = useState('under3lac');

  const filterCars = (range) => {
    switch (range) {
      case 'under3lac':
        return carData.filter((car) => car.price < 300000);
      case '3to5lac':
        return carData.filter((car) => car.price >= 300000 && car.price <= 500000);
      case '5to10lac':
        return carData.filter((car) => car.price > 500000 && car.price <= 1000000);
      case 'above10lac':
        return carData.filter((car) => car.price > 1000000);
      default:
        return carData;
    }
  };

  const filteredCars = filterCars(selectedRange);

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center">Feature Cars</h2>
      <CarFilter selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}
