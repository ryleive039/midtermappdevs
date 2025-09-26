import React, { useState } from "react";

export default function ProductDetail({ product, onAddToCart, onBack }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-detail-container">
      <button onClick={onBack} className="back-button">
        ← Back to products
      </button>

      <div className="product-detail">
        <div className="product-image">
          <img src={product.images?.[0]} alt={product.title} />
        </div>

        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>

          <div className="meta">
            <p><span>Category:</span> {product.category}</p>
            <p><span>Brand:</span> {product.brand}</p>
            <p><span>Rating:</span> ⭐ {product.rating}</p>
            <p className="price">₱{product.price}</p>
          </div>

          <div className="quantity-section">
            <label>Quantity:</label>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
