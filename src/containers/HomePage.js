import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = []; // Hoặc giá trị từ API mà có thể là undefined hoặc null

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      Hello

      {/* {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default HomePage;
