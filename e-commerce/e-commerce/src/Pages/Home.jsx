import React from "react";

function Home() {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Elevate Your Shopping Experience
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover exclusive deals, top brands, and handpicked collections
            designed just for you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Electronics"
              className="rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-2xl font-semibold">Electronics</h3>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Fashion"
              className="rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-2xl font-semibold">Fashion</h3>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Home Appliances"
              className="rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-2xl font-semibold">
                Home Appliances
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Big Holiday Sale!
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Enjoy up to <span className="text-yellow-400 font-bold">70% off</span> on selected products.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition duration-300">
            Grab the Deal
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
