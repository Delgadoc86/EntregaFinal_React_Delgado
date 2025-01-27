import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
       <Link to="/">
       <h2>ModoUrban online</h2>
       </Link>
        <nav>
           
            <ul>

                <li><NavLink to='/category/Remera' >Remeras</NavLink></li>
                <li><NavLink to='/category/Jean' >Jean</NavLink></li>
                <li><NavLink to='/category/Bermuda' >Bermudas</NavLink></li>
                <li><NavLink to='/category/Zapatillas' >Zapatillas</NavLink></li>

            </ul>
        </nav>
        <div className="cart-widget">
            <CartWidget />
        </div>
    </header>
  )
}

export default Navbar;