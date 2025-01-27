
import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
// import ItemCount from '../ItemCount/ItemCount' 

import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const { category } = useParams();


  useEffect(() => {
    const funcionCategory = category ? getProductosPorCategoria : getProductos ;
    funcionCategory (category)
     .then(respuesta => {
        setProductos(respuesta)
      })
  }, [category]);
  return (
    <>
      
      {/* <ItemCount inicial={1} stock={5} /> */}
      <h2>Mis productos </h2>
      <ItemList productos={productos} />
    </>
  )

}

export default ItemListContainer;