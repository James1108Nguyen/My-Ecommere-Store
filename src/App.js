import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import './styles/main.css';  // Đảm bảo bạn đã nhập khẩu tệp CSS chính


function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* <AppRoutes /> */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
