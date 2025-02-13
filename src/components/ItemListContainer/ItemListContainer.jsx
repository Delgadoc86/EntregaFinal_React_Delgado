import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/Config';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const misProductos = category
      ? query(collection(db, "productos"), where("categoria", "==", category))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((respuestaFirebase) => {
        const productosArray = respuestaFirebase.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosArray); 
      })
      .catch((error) => {
        console.log("Error obteniendo documentos: ", error);
      });

  }, [category]);

  return (
    <div className="container">
      <h2 className="title">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Todos los Productos'}
      </h2>
      <p className="subtitle">Encuentra tu estilo urbano perfecto</p>
      <div className="products-section">
        <ItemList productos={productos} />
      </div>
    </div>
  );
}

export default ItemListContainer;