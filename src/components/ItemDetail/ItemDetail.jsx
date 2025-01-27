import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

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
          <Link to="/cart" className="ctaButton">
            Terminar compra
          </Link>
        ) : (
          <div className="itemCountWrapper">
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
