import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';  // Đảm bảo bạn đã nhập khẩu tệp CSS chính

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);