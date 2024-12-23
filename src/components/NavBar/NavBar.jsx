import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
       <h2>ModoUrban online</h2>
        <nav>
           
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="cart-widget">
            <CartWidget />
        </div>
    </header>
  )
}

export default Navbar;