import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../services/Config";


// se usa useParams en este caso para 
// obtener el id del producto a mostrar. 
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    //Me guardo el idItem: 
    const { idItem } = useParams();
    // modificamos para trabajar con firebase
    useEffect(() => {
        const nuevoDoc = doc(db, "productos", idItem);
        getDoc(nuevoDoc)
            .then(respuestaDoc => {
                const data = respuestaDoc.data();
                const nuevoProducto = {id: respuestaDoc.id, ...data}
                setProducto(nuevoProducto);
            })
            .catch(error => {
                console.log("Error al obtener el documento:", error);
            });
    }, [idItem])


    return (
        <div >
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer