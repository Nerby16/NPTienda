// src/components/Curso.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from './context/CartContext'; // Importa el contexto del carrito
import '../styles/Curso.css'; // Importa el archivo CSS

function Curso({ image_url, title, description, duration, price = 0, id }) {
  const { addToCart } = useCart(); // Usa la función para agregar al carrito

  const handleAddToCart = () => {
    addToCart({ id, name: title, price }); // Agrega el curso al carrito
    alert(`${title} añadido al carrito.`);
  };

  return (
    <Card className="card-fixed">
      <Card.Img variant="top" src={image_url} />
      <Card.Body className="card-body-fixed">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-description">{description}</Card.Text>
        <Card.Text><strong>Duración:</strong> {duration}</Card.Text>
        <Card.Text><strong>Precio:</strong> ${price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Añadir al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Curso;
