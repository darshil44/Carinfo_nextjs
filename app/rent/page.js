import Navbar from '../components/Navbar';
import CarCard from '../components/CarCard';

const carsForRent = [
  { name: 'Audi R8', price: '$142,000', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/audi-r8-1838830_1280.jpg' },
  { name: 'Mercedes-Benz GLC', price: '$180/day', imageUrl: 'https://example.com/mercedes.jpg' },
  // Add more car objects if needed
];

export default function RentPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Cars for Rent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsForRent.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}
