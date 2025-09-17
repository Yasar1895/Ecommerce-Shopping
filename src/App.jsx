import React, { useState } from "react";
import productsData from "./data/products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import "./App.css";

const App = () => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Shoes", "Clothing", "Electronics", "Accessories"];

  const filtered = products.filter(p =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (p) => {
    const exists = cart.find(i => i.id === p.id);
    if (exists) {
      setCart(cart.map(i => i.id === p.id ? {...i, qty: i.qty + 1} : i));
    } else {
      setCart([...cart, {...p, qty: 1}]);
    }
  }

  const removeFromCart = id => setCart(cart.filter(i => i.id !== id));
  const updateQty = (id, qty) => { if(qty < 1) return; setCart(cart.map(i => i.id === id ? {...i, qty} : i)) }

  return (
    <div className="App">
      <Header cartCount={cart.length} onSearch={setSearch} />
      <Carousel items={products.slice(0, 3)} />

      <div className="tabs">
        {categories.map(c => (
          <button key={c} className={c===category?"active":""} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>

      <div className="grid">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={addToCart}
            onView={() => setSelectedProduct(p)}
          />
        ))}
      </div>

      <Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />

      {selectedProduct &&
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />
      }

      <Footer />
    </div>
  );
}

export default App;
