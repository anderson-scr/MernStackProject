import React from 'react'
import NavBar from './components/navBar/navBar'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Pages
import Home from './components/home/home'
import User from './components/users/user'
import Products from './components/products/products';
import TableModal from './components/users/tableUsers/tableModal'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Users" element={<User />} />
        <Route path="/Products" element={<TableModal />} />
      </Routes >
    </BrowserRouter>
  )
}

export default App;