import { useState } from 'react'
//import './App.css'
import Button from './components/Buttons/Button'
import ItemCount from './components/ItemCount/ItemCount'
import Navbar from './components/Navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <>
      <div>
      <Navbar/>
      <ItemCount/>
      </div>
    </>
  )
}

export default App
