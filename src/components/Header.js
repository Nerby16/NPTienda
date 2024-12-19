// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './context/CartContext'; // Importa el contexto del carrito

function Header() {
  // Simulación de estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userName, setUserName] = useState('José'); // Nombre del usuario

  // Obtén los datos del carrito desde el contexto
  const { cartItems } = useCart();

  // Función de logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  // Función de login de prueba
  const handleLogin = () => {
    setIsAuthenticated(true);
    setUserName('José'); // Simular nombre de usuario
  };

  // Calcula el número de productos en el carrito
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">Universae</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/courses">Cursos</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {!isAuthenticated ? (
              <>
                <Nav.Link href="/login" onClick={handleLogin}>Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/carrito">
                  <FaShoppingCart /> Carrito {cartItemCount > 0 && (
                    <span className="badge bg-danger">{cartItemCount}</span>
                  )}
                </Nav.Link>
                <NavDropdown title={`Hola, ${userName}`} id="user-dropdown">
                  <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
