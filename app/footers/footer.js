const Footers = () => {
    return (
      <footer className="bg-teal-100 text-gray-800">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Contact Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">CarInfo</h2>
              <p className="text-sm">
                CarInfo is your all-in-one app for all your vehicle info needs and RTO vehicle information. 
                Manage all your vehicles in one place. Trace your car number with owner name.
              </p>
              <p className="mt-2 text-sm">ISO 27001:2022 Certified</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:9310516278" className="text-teal-600">9310516278</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:support@carinfo.app" className="text-teal-600">support@carinfo.app</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Dwarka, New Delhi</span>
                </li>
              </ul>
              <div className="flex mt-4">
                <img src="/downloads/3.svg" alt="Google Play" className="w-24 mr-2" />
                <img src="/downloads/2.svg" alt="App Store" className="w-24" />
              </div>
            </div>
  
            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CarInfo</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Check RC Detail</a></li>
                <li><a href="#" className="hover:underline">Challan Search</a></li>
                <li><a href="#" className="hover:underline">New Cars</a></li>
                <li><a href="#" className="hover:underline">Used Cars</a></li>
                <li><a href="#" className="hover:underline">Car Insurance</a></li>
                <li><a href="#" className="hover:underline">Bike Insurance</a></li>
                <li><a href="#" className="hover:underline">Sell Your Car</a></li>
                <li><a href="#" className="hover:underline">Service History</a></li>
                <li><a href="#" className="hover:underline">Check RTO Details</a></li>
              </ul>
            </div>
  
            {/* Popular SUVs Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular SUVs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Hyundai Creta</a></li>
                <li><a href="#" className="hover:underline">Maruti Grand-vitana</a></li>
                <li><a href="#" className="hover:underline">Nissan Magnite</a></li>
                <li><a href="#" className="hover:underline">Skoda Kushaq</a></li>
                <li><a href="#" className="hover:underline">Tata Nexon</a></li>
              </ul>
            </div>
  
            {/* Popular Sedans Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Sedans</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Honda City</a></li>
                <li><a href="#" className="hover:underline">Volkswagen Virtus</a></li>
                <li><a href="#" className="hover:underline">Hyundai Aura</a></li>
                <li><a href="#" className="hover:underline">Tata Tigor</a></li>
                <li><a href="#" className="hover:underline">Skoda Slavia</a></li>
                <li><a href="#" className="hover:underline">Hyundai Verna</a></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm">
            <p>Keep in Touch</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#"><span>🌐 Facebook</span></a>
              <a href="#"><span>🌐 Instagram</span></a>
            </div>
            <p className="mt-4">All rights reserved ©2024 CarInfo.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footers;
  