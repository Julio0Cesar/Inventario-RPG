import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CssBaseline } from "@mui/material"
import { useAuth } from "./hooks/useAuth"
import React from "react"
import Home from "./pages/home/Home"
import Footer from "./layouts/Footer"
import Login from "./pages/login/Login"
import Itens from "./pages/itens/Itens"
import Error404 from "./pages/error-404/Error404"
import ListarEquipamento from "./pages/itens/equipamento/ListarEquipamento"
import DescreverEquipamento from "./pages/itens/equipamento/DescreverEquipamento"
import NavMenu from "./layouts/NavMenu"
import ListarConsumiveis from "./pages/itens/consumiveis/ListarConsumiveis"
import DescreverConsumiveis from "./pages/itens/consumiveis/DescreverConsumiveis"
import ListarDiversos from "./pages/itens/diversos/ListarDiversos"
import DescreverDiversos from "./pages/itens/diversos/DescreverDiversos"

function App() {
  const { user } = useAuth()
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <NavMenu/>
        <Routes>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>} />
          <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
          <Route path='/itens' element={user ? <Itens/> : <Navigate to='/login'/>}/>
          <Route path="/itens/equipamento/:categoria" element={user ? <ListarEquipamento /> : <Navigate to='/login'/>} />
          <Route path="/itens/equipamento/:categoria/:item" element={user ? <DescreverEquipamento /> : <Navigate to='/login'/>} />
          <Route path="/itens/consumiveis/:categoria" element={user ? <ListarConsumiveis /> : <Navigate to='/login'/>} />
          <Route path="/itens/consumiveis/:categoria/:item" element={user ? <DescreverConsumiveis /> : <Navigate to='/login'/>} />
          <Route path="/itens/diversos/:categoria" element={user ? <ListarDiversos /> : <Navigate to='/login'/>} />
          <Route path="/itens/diversos/:categoria/:item" element={user ? <DescreverDiversos /> : <Navigate to='/login'/>} />

          <Route path='*' element={<Error404 />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App