import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import FAQ from './pages/FAQ/FAQ';
import { CarritoProvider } from './context/CarritoContext'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <CarritoProvider>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/faq" element={<FAQ />} />

      </Routes>
      <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
};

export default App;
