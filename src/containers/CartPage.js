import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart />
      {/* Thêm các component khác nếu cần */}
    </div>
  );
};

export default CartPage;