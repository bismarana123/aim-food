import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const productsData = [
  { id: 1, name: "Chicken Wings", price: 5.99, image: "/images/chicken.png" },
  { id: 2, name: "Fajita Pizza", price: 6.99, image: "/images/fajita.png" },
  { id: 3, name: "Fish", price: 7.99, image: "/images/fish.png" },
  { id: 4, name: "Fries", price: 8.99, image: "/images/fries.png" },
  { id: 5, name: "Kebab", price: 9.99, image: "/images/kbab.png" },
  { id: 6, name: "Chicken Nuggets", price: 10.99, image: "/images/nuggets.png" },
  { id: 7, name: "Pepsi Burger", price: 11.99, image: "/images/pepsi.png" },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Shop Our Burgers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productsData.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="size-60 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-red-500 font-bold">${product.price.toFixed(2)}</p>

              {/* If product is in cart, show "Remove from Cart" button */}
              {isInCart ? (
                <button
                  className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;


