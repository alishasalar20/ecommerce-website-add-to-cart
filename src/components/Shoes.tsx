"use client";
import React from "react";
import Image from "next/image";
import { useCart, Product } from "../app/context/CartContext";

const Mens: React.FC = () => {
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      src: "/h1.png",
      title: "Joggers",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/h2.png",
      title: "Office shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/h3.png",
      title: "University Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/h4.png",
      title: "Event Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/h5.png",
      title: "Office Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/h6.png",
      title: " Casual Shoes ",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <Image
            src={product.src}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-70 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-teal-600 font-semibold">$49.99</span>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mens;
