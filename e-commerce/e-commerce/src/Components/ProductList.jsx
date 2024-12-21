import React, { useEffect, useState } from "react";
import { addcart, getProjects } from "../../Api/Api";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await getProjects();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addproducts = async (product) => {
    try {
      await addcart(product);
      console.log(`${product.name} added to cart`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-sm hover:shadow-lg p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
          <button
            onClick={() => addproducts(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
