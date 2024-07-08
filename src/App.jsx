import React from 'react'
import Landing from './components/index/landing'
import SobreNosotros from './components/sobreNosotros/sobreNosotros';
import Servicios from './components/servicios/servicios';
import Diseno from './components/diseño/diseno';
import Politicas from './components/politicas/politicas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/diseño" element={<Diseno />} />
        <Route path="/politica-de-calidad" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
