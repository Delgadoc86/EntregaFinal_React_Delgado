import React from 'react'
import img from '../../assets/Carrito.jpg'
import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = img; // de esta manera se le asigna la imagen a la constante imgCarrito
    return (
        <div>
            {/* esta es la etiqueta img que se le asigna la constante imgCarrito */}
            <img className= "img" src={imgCarrito} alt="Carrito" /> 
            <span>3</span>
        </div>
    )
}

export default CartWidget