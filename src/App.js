import React from 'react'
import './App.css'
import {BrownserRouter, Routes, Router} from 'react-router-dom'

import Home from './routes/Home'
import Navigation from './components/Navigation'
import About from './routes/About'
import Detail from './routes/Detail'

function App() {
  return (
    <BrownserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
    </BrownserRouter>
  )
}

export default App