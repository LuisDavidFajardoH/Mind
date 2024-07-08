import React from 'react'
import Landing from './components/index/landing'
import SobreNosotros from './components/sobreNosotros/nosotros';
import Services from './components/servicios/services';
import DesignSection from './components/diseño/diseno';
import Servicios from './components/politicas/politicas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/diseno" element={<DesignSection />} />
        <Route path="/politicas" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
