import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) {
  const closeMenu = () => setIsOpen(false);

  return (
    <aside id="main-sidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          aria-label={isCollapsed ? 'Expandir sidebar' : 'Comprimir sidebar'}
          aria-expanded={!isCollapsed}
          aria-controls="sidebar-navigation"
          title={isCollapsed ? 'Expandir sidebar' : 'Comprimir sidebar'}
        >
          <span></span><span></span><span></span>
        </button>
        <NavLink to="/" className="logo" onClick={closeMenu} title="Ir a la portada">
          SINTAXIA<span>_CORE</span>
        </NavLink>
      </div>
      <nav id="sidebar-navigation" className="sidebar-nav" aria-label="Navegación principal">
        <NavLink to="/" title="Portada" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span aria-hidden="true">01</span> <span className="nav-label">PORTADA</span>
        </NavLink>
        <NavLink to="/equipo" title="Equipo y perfiles" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span aria-hidden="true">02</span> <span className="nav-label">EQUIPO &amp; PERFILES</span>
        </NavLink>
        <NavLink to="/catalogo" title="Catálogo de recursos (JSON)" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span aria-hidden="true">03</span> <span className="nav-label">CATÁLOGO (JSON)</span>
        </NavLink>
        <NavLink to="/api" title="Estación API pública: criptomonedas" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span aria-hidden="true">04</span> <span className="nav-label">ESTACIÓN API PÚBLICA</span>
        </NavLink>
        <NavLink to="/arbol" title="Árbol de componentes" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span aria-hidden="true">05</span> <span className="nav-label">ÁRBOL DE COMPONENTES</span>
        </NavLink>
        <NavLink to="/bitacora" title="Bitácora técnica" className={({isActive}) => `nav-cyber-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
          <span aria-hidden="true">06</span> <span className="nav-label">BITÁCORA TÉCNICA</span>
        </NavLink>
      </nav>
    </aside>
  );
}
