import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Total: ${total.toFixed(2)}
            </h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
