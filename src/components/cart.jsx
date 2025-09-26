const Cart = ({ cartItems, onCheckout, onRemove }) => {
  if (!cartItems.length) return <p className="cart-container">Your cart is empty.</p>;

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <span>
              {item.title} - ₱{item.price} × {item.quantity || 1}
            </span>
            <button onClick={() => onRemove(item)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        <strong>Total:</strong> ₱{total.toFixed(2)}
      </p>
      <button onClick={onCheckout} className="checkout-btn">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
