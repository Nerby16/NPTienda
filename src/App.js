// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cursos from './components/Cursos';
import Curso from './components/Curso';
import Foro from './components/Foro';
import Carrito from './components/Carrito';
import { CartProvider } from './components/context/CartContext';
function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Cursos />} />
          <Route path="/courses/:id" element={<Curso />} />
          <Route path="/community" element={<Foro />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

