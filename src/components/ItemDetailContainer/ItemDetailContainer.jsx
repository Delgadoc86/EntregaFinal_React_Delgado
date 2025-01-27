import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


// se usa useParams en este caso para 
// obtener el id del producto a mostrar. 

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null); 

    //Me guardo el idItem: 
    const { idItem } = useParams();

    useEffect( () => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
            
    }, [idItem])

  return (
    <div >
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer