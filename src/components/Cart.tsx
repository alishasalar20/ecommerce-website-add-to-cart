"use client";

import React, { useState } from "react";
import { useCart } from "../app/context/CartContext";

const FloatingCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
      >
        🛒 {cart.length}
      </button>

      {/* Pop-Up Cart */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item :any, index :any) => (
                <li key={index} className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingCart;