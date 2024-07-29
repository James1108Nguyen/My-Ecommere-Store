import { useSelector } from 'react-redux';

function useCart() {
  return useSelector(state => state.cart);
}

export default useCart;
