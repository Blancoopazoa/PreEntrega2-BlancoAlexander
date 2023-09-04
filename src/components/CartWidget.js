import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  const cartItemCount = 3;

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="cart-badge">{cartItemCount}</span>
    </div>
  );
}

export default CartWidget;