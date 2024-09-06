import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";
import { CartProvider, useCart } from "./contexts/CartContext";

function AppContent() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">E-commerce Store</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </header>
      <ProductList products={products} />
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
