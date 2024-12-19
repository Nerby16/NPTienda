// src/components/Carrito.js
import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useCart } from './context/CartContext';

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="py-5">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay cursos en tu carrito.</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <Button
                  variant="danger"
                  size="sm"
                  className="float-end"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-4">Total: ${totalPrice.toFixed(2)}</h3>
          <Button variant="success" onClick={() => alert('Compra realizada con éxito!')}>
            Finalizar Compra
          </Button>
          <Button variant="secondary" className="ms-2" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </>
      )}
    </Container>
  );
};

export default Carrito;

