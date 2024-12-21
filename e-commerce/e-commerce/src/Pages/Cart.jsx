import React, { useState, useEffect } from "react";
import { getcart, deletecart } from "../../Api/Api";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await getcart();
        setCartItems(data);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCartItems();
  }, []); 

  const validateItem = (item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity, 10);
    return {
      ...item,
      price: isNaN(price) ? 0 : price,
      quantity: isNaN(quantity) || quantity < 1 ? 1 : quantity,
    };
  };

  const removeItem = async (_id) => {
    try {
      await deletecart(_id);
      setCartItems(cartItems.filter(item => item._id !== _id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const validatedItem = validateItem(item);
      return total + validatedItem.price * validatedItem.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const validatedItem = validateItem(item);
                const total = validatedItem.price * validatedItem.quantity;
                return (
                  <tr key={item._id} className="border-b">
                    <td className="p-4 flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-4 text-center">
                      ${validatedItem.price.toFixed(2)}
                    </td>
                    <td className="p-4 text-center">
                      <span>{validatedItem.quantity}</span> 
                    </td>
                    <td className="p-4 text-center">
                      ${total.toFixed(2)}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeItem(item._id)}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="flex justify-end mt-6">
            <div className="text-right">
              <h2 className="text-xl font-bold">
                Total: ${calculateTotal().toFixed(2)}
              </h2>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
