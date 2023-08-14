import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>

    </>

  );
}
