import React from 'react';
import compra from './assets/compra.png';
const CartWidget = () => {
const cartItemCount = 3;
  return (
    <div>
      <img src={compra} alt="foto" width="35px"/>
      <span className="cart-badge">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
