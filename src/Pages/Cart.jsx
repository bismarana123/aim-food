// import React, { useState, useEffect } from "react";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   // Load cart data from localStorage when component mounts
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
//   };

//   const handleQuantityChange = (id, quantity) => {
//     if (quantity < 1) return;
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
//   };

//   const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
//   const shipping = subtotal > 0 ? "Free Shipping" : "No Shipping";
//   const total = subtotal;

//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="text-center">
//           Your cart is currently empty.{" "}
//           <a href="/shop" className="text-blue-500">Return to shop</a>
//         </p>
//       ) : (
//         <>
//           <table className="w-full border-collapse border border-gray-200 mb-6">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2 border">Remove</th>
//                 <th className="p-2 border">Thumbnail</th>
//                 <th className="p-2 border">Product</th>
//                 <th className="p-2 border">Price</th>
//                 <th className="p-2 border">Quantity</th>
//                 <th className="p-2 border">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id} className="text-center border">
//                   <td className="p-2 border">
//                     <button onClick={() => removeFromCart(item.id)} className="text-red-500">×</button>
//                   </td>
//                   <td className="p-2 border">
//                     <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
//                   </td>
//                   <td className="p-2 border">{item.name}</td>
//                   <td className="p-2 border">₨ {item.price}</td>
//                   <td className="p-2 border">
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.quantity || 1}
//                       onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                       className="w-16 p-1 border rounded"
//                     />
//                   </td>
//                   <td className="p-2 border">₨ {item.price * (item.quantity || 1)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Coupon Section */}
//           <div className="flex justify-between items-center mb-6">
//             <input type="text" placeholder="Coupon code" className="p-2 border rounded w-1/3" />
//             <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Apply Coupon</button>
//           </div>

//           {/* Cart Totals */}
//           <div className="bg-gray-100 p-6 rounded-lg w-1/2 mx-auto">
//             <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
//             <p className="flex justify-between border-b pb-2">Subtotal: <span>₨ {subtotal}</span></p>
//             <p className="flex justify-between border-b pb-2">Shipping: <span>{shipping}</span></p>
//             <p className="flex justify-between text-lg font-bold">Total: <span>₨ {total}</span></p>
//             <button className="mt-4 w-full bg-green-500 text-white p-3 rounded hover:bg-green-700">Proceed to Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const subtotal = cart
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);
  const shipping = subtotal > 0 ? "Free Shipping" : "No Shipping";
  const total = parseFloat(subtotal).toFixed(2);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is currently empty.{" "}
          <a href="/shop" className="text-blue-500">Return to shop</a>
        </p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-200 mb-6">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Remove</th>
                <th className="p-2 border">Thumbnail</th>
                <th className="p-2 border">Product</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="text-center border">
                  <td className="p-2 border">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500">×</button>
                  </td>
                  <td className="p-2 border">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">₨ {item.price.toFixed(2)}</td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded"
                    />
                  </td>
                  <td className="p-2 border">₨ {(item.price * (item.quantity || 1)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Coupon Section */}
          <div className="flex justify-between items-center mb-6">
            <input type="text" placeholder="Coupon code" className="p-2 border rounded w-1/3" />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Apply Coupon</button>
          </div>

          {/* Cart Totals */}
          <div className="bg-gray-100 p-6 rounded-lg w-1/2 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
            <p className="flex justify-between border-b pb-2">Subtotal: <span>₨ {subtotal}</span></p>
            <p className="flex justify-between border-b pb-2">Shipping: <span>{shipping}</span></p>
            <p className="flex justify-between text-lg font-bold">Total: <span>₨ {total}</span></p>
            <button className="mt-4 w-full bg-green-500 text-white p-3 rounded hover:bg-green-700">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;



