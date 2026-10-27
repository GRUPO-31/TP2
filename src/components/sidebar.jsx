import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) {
  const closeMobileSidebar = () => setIsOpen(false);

  const toggleThemeChaos = () => {
    const isRed = document.body.classList.toggle('theme-red');
    localStorage.setItem('sintaxia_theme', isRed ? 'red' : 'green');
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <aside id="main-sidebar" className={`sidebar${isOpen ? ' open' : ''}`}>
      <div className="sidebar-header">
        <NavLink to="/" className="logo" onClick={closeMobileSidebar}>
          SINTAXIA <span>.SYS</span>
        </NavLink>
        
        {/* Botón para contraer la sidebar en pantallas grandes */}
        <button 
          className="sidebar-toggle" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title="Minimizar panel"
          aria-label="Minimizar panel"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-cyber-link" onClick={closeMobileSidebar}>
          <span>[01]</span> <span className="nav-label">INICIO</span>
        </NavLink>
        <NavLink to="/equipo" className="nav-cyber-link" onClick={closeMobileSidebar}>
          <span>[02]</span> <span className="nav-label">EQUIPO</span>
        </NavLink>
        <NavLink to="/catalogo" className="nav-cyber-link" onClick={closeMobileSidebar}>
          <span>[03]</span> <span className="nav-label">CATÁLOGO</span>
        </NavLink>
        <NavLink to="/api" className="nav-cyber-link" onClick={closeMobileSidebar}>
          <span>[04]</span> <span className="nav-label">API PÚBLICA</span>
        </NavLink>
        <NavLink to="/arbol" className="nav-cyber-link" onClick={closeMobileSidebar}>
          <span>[05]</span> <span className="nav-label">ÁRBOL</span>
        </NavLink>
        <NavLink to="/bitacora" className="nav-cyber-link" onClick={closeMobileSidebar}>
          <span>[06]</span> <span className="nav-label">BITÁCORA</span>
        </NavLink>

        {/* --- BOTÓN DE ADVERTENCIA "NO TOCAR" --- */}
        <button 
          onClick={toggleThemeChaos}
          className="cyber-warning-btn"
          title="ADVERTENCIA: PROTOCOLO DE CAOS"
        >
          <span className="warning-icon">⚠</span> 
          <span className="nav-label">NO TOCAR</span>
        </button>
      </nav>
    </aside>
  );
}