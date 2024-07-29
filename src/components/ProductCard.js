import React from 'react';
import { formatPrice } from '../utils/formatPrice';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{formatPrice(product.price)}</p>
    </div>
  );
}

export default ProductCard;
