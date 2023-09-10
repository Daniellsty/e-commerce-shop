import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import Header from './components/Header/Header'

function App() {

  return (
    <>

    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
