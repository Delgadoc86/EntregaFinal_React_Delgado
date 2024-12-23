import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a la mejor tienda de toda latinoamerica unida xd"/>
    </div>
  )
}

export default App;