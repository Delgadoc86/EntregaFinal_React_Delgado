import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, descripcion, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  }


  return (
    <div className="itemDetailContainer">
      <div className="itemImageWrapper">
        <img className="itemImage" src={img} alt={nombre} />
      </div>
      <div className="itemInfo">
        <h2 className="itemTitle">{nombre}</h2>
        <h3 className="itemPrice">
          Precio: <span className="priceValue">${precio}</span>
        </h3>
        <h3 className="itemId">
          ID: <span>{id}</span>
        </h3>
        <p className="itemDescription">{descripcion}</p>
        {agregarCantidad > 0 ? (
          <>
            <Link to="/cart" className="ctaButton">
              Terminar compra
            </Link>
            <Link to="/" className="ctaButton-catalogo">
              Volver al catálogo
            </Link>
          </>

        ) : (
          <div className="itemCountWrapper">
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail