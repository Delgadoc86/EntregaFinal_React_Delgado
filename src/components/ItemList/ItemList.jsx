import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ productos }) => {


    return (
        <div className='lista-productos'>{
            productos.map(producto => <Item key={producto.id} {...producto} />)
            }
        </div>
    )
}

export default ItemList;