<<<<<<< HEAD
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
=======

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
>>>>>>> a7dd2bf9eb6a1b118e406b57b756769ae4fa39c3
