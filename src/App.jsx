import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Home from './pages/home'
import Info from './pages/info'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/admin' element={<Info />} />
          <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
