import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <article className="producto-card">
      <div className="producto-img-container">
        <img className="producto-img" src={img} alt={`Imagen de ${nombre}`} />
      </div>
      <div className="producto-info">
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-precio">Precio: <span>${precio}</span></p>
        <p className="producto-id">ID: <span>{id}</span></p>
        <Link to={`/item/${id}`} className="producto-btn">
          Ver Detalles
        </Link>

      </div>
    </article>
  );
};

export default Item;
