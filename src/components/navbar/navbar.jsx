import React, { useState } from 'react';
import { ThreeLineHorizontal, Cross } from 'akar-icons';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/45+.png" alt="Logo" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <Cross size={24} color='white' /> : <ThreeLineHorizontal strokeWidth={2} size={36} color='white' />}
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li className="navbar-item"><a href="/">Inicio</a></li>
          <li className="navbar-item"><a href="/sobre-nosotros">Nosotros</a></li>
          <li className="navbar-item"><a href="#servicios">Servicios</a></li>
          <li className="navbar-item"><a href="#diseno">Diseño</a></li>
          <li className="navbar-item"><a href="#politica-calidad">Política de calidad</a></li>
          <li className="navbar-item"><a href="#proyectos">Proyectos</a></li>
          <li className="navbar-item"><a href="#contactenos" className="contact-button">Contáctenos</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
