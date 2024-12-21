import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg font-poppins">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold hover:text-blue-300 transition duration-300">
          E-Shop
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-blue-300 text-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-300 text-lg transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-300 text-lg transition duration-300"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
