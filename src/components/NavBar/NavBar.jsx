import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h2>ModoUrban</h2>
        </Link>

        {/* Botón de hamburguesa, solo se muestra si el menú está cerrado */}
        {!menuOpen && (
          <button className="hamburger" onClick={toggleMenu}>
            <span>☰</span>
          </button>
        )}

        {/* Navegación */}
        <nav className={menuOpen ? 'active' : ''}>
          {/* Botón de cierre, solo se muestra si el menú está abierto */}
          {menuOpen && (
            <button className="close-btn" onClick={closeMenu}>
              <span>✖</span>
            </button>
          )}

          <ul className="nav-links">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>Nosotros</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contacto</NavLink></li>

            {/* Categorías con lista desplegable */}
            <li className="dropdown">
              <span onClick={toggleDropdown}>
                Categorías {dropdownOpen ? '▼' : '▶'}
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li><NavLink to="/category/Remera" onClick={closeMenu}>Remeras</NavLink></li>
                <li><NavLink to="/category/Jean" onClick={closeMenu}>Jean</NavLink></li>
                <li><NavLink to="/category/Bermuda" onClick={closeMenu}>Bermudas</NavLink></li>
                <li><NavLink to="/category/Zapatillas" onClick={closeMenu}>Zapatillas</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="nav-right">
          <div className="cart-widget">
            <CartWidget />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
