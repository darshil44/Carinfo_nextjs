// src/app/components/CarCard.js
export default function CarCard({ car }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{car.name}</h3>
      <p className="text-gray-600">{car.price}</p>
    </div>
  );
}
