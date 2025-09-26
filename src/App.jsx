import React, { useState, useEffect } from "react";
import axios from "axios";

import Filters from "./components/filters";
import Search from "./components/search";
import Products from "./components/products";
import Cart from "./components/cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sortOption, setSortOption] = useState("default");

  
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => console.error("Error loading products", err));
  }, []);

  const handleFilter = (min, max, category) => {
    const filtered = products.filter(
      (p) =>
        p.price >= min &&
        p.price <= max &&
        (category === "" || p.category === category)
    );
    setFilteredProducts(applySort(filtered, sortOption));
    setShowCart(false);
  };

  
  const handleSearch = (query) => {
    query = query.toLowerCase();
    const searched = products.filter((p) =>
      p.title.toLowerCase().includes(query)
    );
    setFilteredProducts(applySort(searched, sortOption));
    setShowCart(false);
  };

  const handleSort = (option) => {
    setSortOption(option);
    setFilteredProducts(applySort(filteredProducts, option));
  };

  const applySort = (list, option) => {
    const sorted = [...list];
    switch (option) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return sorted;
  };

  
  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  
  const handleCheckout = () => {
    alert(
      "Delivery has been confirmed. Method of payment: Cash on Delivery (COD). Thank you for your purchase!"
    );
    setCartItems([]);
    setShowCart(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: 20 }}>
        <h1>E-Commerce Shop</h1>
        <nav>
          <button onClick={() => setShowCart(false)}>Home</button>
          <button
            onClick={() => setShowCart(true)}
            style={{ marginLeft: 10 }}
          >
            Cart ({cartItems.length})
          </button>
        </nav>
      </header>

      {!showCart ? (
        <div className="shop-layout">
          <Filters onFilter={handleFilter} />
          <div>
            <div className="top-bar">
              <Search onSearch={handleSearch} />
              <select
                className="sort-dropdown"
                value={sortOption}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name (A–Z)</option>
              </select>
            </div>
            <Products products={filteredProducts} onBuyNow={handleAddToCart} />
          </div>
        </div>
      ) : (
        <Cart
          cartItems={cartItems}
          onCheckout={handleCheckout}
          onRemove={handleRemoveFromCart}
        />
      )}

      <footer
        style={{ marginTop: 50, borderTop: "1px solid #ccc", paddingTop: 10 }}
      >
        <p>© 2025 E-Commerce Shop</p>
      </footer>
    </div>
  );
};

export default App;
