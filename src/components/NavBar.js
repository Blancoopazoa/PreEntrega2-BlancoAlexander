import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'
import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://media.tenor.com/REo804et_s0AAAAM/totoro.gif"
            alt="Totoro"
            width="30" // Puedes ajustar el ancho de la imagen según lo necesites
            height="30" // Puedes ajustar la altura de la imagen según lo necesites
          />
          Tienda Totoro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/electronica">Electrónicos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/juguetes">Juguetes</a>
            </li>
          </ul>
        </div>
        <div className="cart-icon">
          <FaShoppingCart />
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
