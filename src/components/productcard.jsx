function ProductCard({ image, name, price, onClick, onBuyNow }) {
  const handleBuyNow = (e) => {
    e.stopPropagation();
    if (onBuyNow) {
      onBuyNow();
    }
  };

  return (
    <div className="product-card" onClick={onClick}>
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">₱{price}</p>
      <button className="buy-btn" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
