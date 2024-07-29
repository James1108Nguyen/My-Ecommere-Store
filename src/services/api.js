import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = () => axios.get(API_URL);
