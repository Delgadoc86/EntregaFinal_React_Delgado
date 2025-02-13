import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem"; 
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <p>No hay productos en el carrito</p>
        <Link to="/" className="cart-empty-link">Ver el catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h3 className="cart-title">Carrito de Compras</h3>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} item={producto.item} cantidad={producto.cantidad} />
      ))}
      <hr className="cart-divider" />
      <p className="cart-total">Total: ${total}</p>
      <p className="cart-quantity">Cantidad total de productos: {cantidadTotal}</p>
      <div className="cart-actions">
        <button onClick={vaciarCarrito} className="cart-clear">Vaciar Carrito</button>
        <Link to="/checkout" className="cart-checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
