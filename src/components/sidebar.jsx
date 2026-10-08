import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
  const closeMenu = () => setIsOpen(false);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          SINTAXIA<span>_CORE</span>
        </NavLink>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span>01</span> PORTADA
        </NavLink>
        <NavLink to="/equipo" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span>02</span> EQUIPO &amp; PERFILES
        </NavLink>
        <NavLink to="/catalogo" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span>03</span> CATÁLOGO (JSON)
        </NavLink>
        <NavLink to="/api" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span>04</span> ESTACIÓN API PÚBLICA
        </NavLink>
        <NavLink to="/arbol" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span>05</span> ÁRBOL DE COMPONENTES
        </NavLink>
        <NavLink to="/bitacora" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span>06</span> BITÁCORA TÉCNICA
        </NavLink>
      </nav>
    </aside>
  );
}