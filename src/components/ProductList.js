import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Producto A', price: 100 },
  { id: 2, name: 'Producto B', price: 200 },
  { id: 3, name: 'Producto C', price: 300 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Productos</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li
            key={product.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              {product.name} - ${product.price}
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(product)}
            >
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
