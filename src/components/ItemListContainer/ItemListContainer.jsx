import React from 'react'



const ItemListContainer = ({greeting}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', color: '#030303' }} >{greeting}</div>
  )
}

export default ItemListContainer