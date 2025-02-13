import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./CartItem.css";

const CartItem = ({item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext); 

    return (
        <div className="cart-item">
            <div className="cart-item__content">
                <div className="cart-item__info">
                    <h4 className="cart-item__title">{item.nombre}</h4>
                    <p className="cart-item__id">ID: {item.id}</p>
                </div>
                
                <div className="cart-item__details">
                    <p className="cart-item__quantity">
                        <span>Cantidad:</span> {cantidad}
                    </p>
                    <p className="cart-item__price">
                        <span>Precio x unidad:</span> ${item.precio}
                    </p>
                    <p className="cart-item__subtotal">
                        <span>Subtotal:</span> ${item.precio * cantidad}
                    </p>
                </div>
            </div>

            <button 
                className="cart-item__remove"
                onClick={() => eliminarProducto(item.id)}
            >
                Eliminar
            </button>
        </div>
    )
}

export default CartItem;