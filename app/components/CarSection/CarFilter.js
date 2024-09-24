import React from 'react';

export default function CarFilter({ selectedRange, setSelectedRange }) {
  const priceRanges = [
    { label: 'Under 3 lac', value: 'under3lac' },
    { label: '3 to 5 lac', value: '3to5lac' },
    { label: '5 to 10 lac', value: '5to10lac' },
    { label: 'Above 10 lac', value: 'above10lac' },
  ];

  return (
    <div className="flex flex-col mb-4">
      <h2 className="text-xl font-semibold mb-4">Buy Car</h2>
      <div className="flex space-x-4">
        {priceRanges.map((range) => (
          <button
            key={range.value}
            onClick={() => setSelectedRange(range.value)}
            className={`px-4 py-2 border rounded ${selectedRange === range.value ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
}
