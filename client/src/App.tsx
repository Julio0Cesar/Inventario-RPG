import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CssBaseline } from "@mui/material"
import { useAuth } from "./hooks/useAuth"
import React from "react"
import Home from "./pages/home/Home"
import NavBar from "./layouts/NavBar"
import Footer from "./layouts/Footer"
import Login from "./pages/login/Login"
import Error404 from "./pages/error-404/Error404"

function App() {
  const { user } = useAuth()
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>} />
          <Route path='*' element={<Error404 />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App