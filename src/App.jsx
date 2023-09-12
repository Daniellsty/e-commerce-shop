import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartPage, CategoryProduct, Home, ProductSinglePage } from './pages'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Signup from './pages/Signup/Signup'

function App() {

  return (
    <>

    <Router>
       <Header/>
       <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductSinglePage/>} />
        <Route path="/category/:category" element={<CategoryProduct/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/signup" element={<Signup/>} />
      
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
