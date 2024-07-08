import React, { useState } from 'react';
import { ThreeLineHorizontal, Cross } from 'akar-icons';
import { useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <a href="/">Inicio</a>
          </li>
          <li className={`navbar-item ${location.pathname === '/sobre-nosotros' ? 'active' : ''}`}>
            <a href="/sobre-nosotros">Nosotros</a>
          </li>
          <li className={`navbar-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
            <a href="/servicios">Servicios</a>
          </li>
          <li className={`navbar-item ${location.pathname === '/diseno' ? 'active' : ''}`}>
            <a href="/diseno">Diseño</a>
          </li>
          <li className={`navbar-item ${location.pathname === '/politicas ' ? 'active' : ''}`}>
            <a href="/politicas">Política de calidad</a>
          </li>
          <li className={`navbar-item ${location.pathname === '/proyectos' ? 'active' : ''}`}>
            <a href="/proyectos">Proyectos</a>
          </li>
          <li className={`navbar-item ${location.pathname === '/contactenos' ? 'active' : ''}`}>
            <a href="/contactenos" className="contact-button">Contáctenos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
