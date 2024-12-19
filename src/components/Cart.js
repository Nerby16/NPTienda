import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                {item.name} - ${item.price} x {item.quantity}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h5 className="mt-3">Total: ${totalPrice.toFixed(2)}</h5>
      <button
        className="btn btn-success mt-3"
        disabled={cartItems.length === 0}
        onClick={() => alert('Compra realizada con éxito!')}
      >
        Comprar
      </button>
      <button
        className="btn btn-secondary mt-2"
        disabled={cartItems.length === 0}
        onClick={clearCart}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
