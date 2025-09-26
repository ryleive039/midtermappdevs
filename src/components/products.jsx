
import ProductCard from "./productcard";

const Products = ({ products, onBuyNow }) => {
  if (!products.length) return <p>No products found.</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.thumbnail}
          name={product.title}
          price={product.price}
          onClick={() => onBuyNow(product)} 
        />
      ))}
    </div>
  );
};

export default Products;