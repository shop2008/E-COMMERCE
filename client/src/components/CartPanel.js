import React from "react";
import { useCart } from "../contexts/CartContext";

const CartPanel = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="p-4 border-t">
          <h3 className="text-xl font-semibold mb-2">
            Total: ${total.toFixed(2)}
          </h3>
          <button
            onClick={clearCart}
            className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors mb-2"
          >
            Clear Cart
          </button>
          <button
            onClick={onClose}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
