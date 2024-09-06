import React from "react";
import { useCart } from "../contexts/CartContext";

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150?text=No+Image";
            }}
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
