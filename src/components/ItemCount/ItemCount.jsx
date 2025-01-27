import { useState } from "react";
import './ItemCount.css'; // Asegúrate de tener esta hoja de estilo

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    // Funciones auxiliares: 
    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1); 
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="itemCountContainer">
            <div className="contadorControls">
                <button className="btnControl" onClick={restarContador}>-</button>
                <span className="contadorValue">{contador}</span>
                <button className="btnControl" onClick={sumarContador}>+</button>
            </div>
            <p className="stockInfo">Stock disponible: {stock}</p>
            <button className="addToCartBtn" onClick={() => funcionAgregar(contador)}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;
