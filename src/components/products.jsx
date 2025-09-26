import ProductCard from "./productcard";

const Products = ({ products, onBuyNow, onSelectProduct }) => {
  if (!products.length) return <p>No products found.</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.thumbnail}
          name={product.title}
          price={product.price}
          onClick={() => onSelectProduct(product)} 
          onBuyNow={() => onBuyNow(product, true)}      
        />
      ))}
    </div>
  );
};

export default Products;
