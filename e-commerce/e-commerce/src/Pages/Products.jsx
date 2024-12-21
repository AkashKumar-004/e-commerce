import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import Electronic from "../Components/Electronic";
import Fashion from "../Components/Fashion";
import Homeproducts from "../Components/Homeproducts";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const renderContent = () => {
    switch (selectedCategory) {
      case "electronics":
        return <Electronic />;
      case "fashion":
        return <Fashion/>;
      case "home-appliances":
        return <Homeproducts/>;
      case "all":
        return <ProductList/>;
      default:
        return <ProductList />;
    }
  };
  useEffect(()=>{
    setSelectedCategory("all");
  },[])

  return (
    <div className="container mx-auto py-8 flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gradient-to-b from-blue-100 to-blue-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setSelectedCategory("electronics")}
              className="w-full text-lg font-medium text-gray-800 hover:text-blue-700 focus:text-blue-700 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 focus:outline-none"
            >
              Electronics
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("fashion")}
              className="w-full text-lg font-medium text-gray-800 hover:text-blue-700 focus:text-blue-700 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 focus:outline-none"
            >
              Fashion
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("home-appliances")}
              className="w-full text-lg font-medium text-gray-800 hover:text-blue-700 focus:text-blue-700 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 focus:outline-none"
            >
              Home Appliances
            </button>
          </li>
        </ul>
      </aside>
      <main className="w-3/4 pl-8 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>
        {renderContent()}
      </main>
    </div>
  );
}

export default Products;
