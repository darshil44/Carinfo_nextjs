import Image from 'next/image';

const reviews = [
    {
      name: 'Simran Raheja',
      comment: 'CarInfo is an all-in-one app for all things related to cars. It’s incredibly convenient for car owners like me.',
    },
    {
      name: 'Sahil Bisht',
      comment: 'I love the CarInfo app! It’s so easy to use, and their customer service is fantastic. A perfect combo for car enthusiasts.',
    },
    {
      name: 'Abhay Sharma',
      comment: 'CarInfo app provides all details related to my vehicle such as challan, FASTag, and RC. They are outstanding.',
    },
  ];
  

export default function Home() {
  return (
    <div className="bg-[#E9FAF4] min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800">Download Our App</h1>
        <p className="text-gray-600 mt-4">
          Download the app and get every vehicle on your tips. Check all details related to insurance expiry,
          challan, ownership, FASTag balance, and more.
        </p>
      </div>

      {/* Rating and Download Buttons + Reviews in a Row */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Rating and Download Buttons */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-semibold text-black">4.6</span>
            <span className="text-yellow-500 text-2xl">⭐</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://apps.apple.com/in/app/carinfo-vehicle-information/id1146173741" className="inline-block">
              <img src="/downloads/2.svg" alt="App Store" className="h-16" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.cuvora.carinfo&referrer=utm_source%3Dcarinfo-web" className="inline-block">
              <img src="/downloads/3.svg" alt="Google Play" className="h-16" />
            </a>
          </div>
        </div>

        {/* Reviews Section - Set reviews in a row */}
        <div className="flex flex-wrap gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-full md:w-60">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-sky-200 rounded-full"></div>
                <h3 className="text-gray-800 font-semibold">{review.name}</h3>
              </div>
              <div className="flex space-x-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information and App Preview Image Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">Reach out to us at</h3>
          <div className="flex flex-col items-center mt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span className="text-gray-700">9310516278</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span className="text-gray-700">support@carinfo.app</span>
            </div>
          </div>
        </div>

        {/* App Preview Image */}
        <div className="flex justify-center">
          <img src="/downloads/1.png" alt="Car Info App Preview" className="h-[200px] w-[220px]" />
        </div>
      </div>
    </div>
  );
}
