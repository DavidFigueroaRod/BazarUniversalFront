import { Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Busqueda from './pages/Busqueda'
import NotFound from './pages/NotFound'
import Items from './pages/Items'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import DetalleItem from './pages/DetalleItem'
import Compras from './pages/Compras'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Busqueda />} />
        <Route path="/items/:search" element={<Items />} />
        <Route path="/item/:id" element={<DetalleItem />} />
        <Route path='/sales' element={<Compras />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
