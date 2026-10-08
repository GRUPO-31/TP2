import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>
      
      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>[SYSTEM_ONLINE // SINTAXIA_REACT]</span>
        <h1 style={{fontFamily: 'var(--font-code)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--green)', margin: '10px 0'}}>SINTAXIA</h1>
        <h2>ARQUITECTURA WEB &amp; SISTEMAS DE ALTA DENSIDAD EN REACT</h2>
        <p style={{marginTop: '15px', lineHeight: '1.6'}}>
          Plataforma desarrollada en equipo migrada a React, con enrutamiento dinámico, componentes reutilizables, consumo de datos locales y conexión con APIs externas.
        </p>
      </div>

      <div style={{display: 'flex', gap: '15px', marginTop: '30px', flexWrap: 'wrap'}}>
        <Link to="/equipo" className="btn btn-primary">VER EQUIPO Y PERFILES &gt;</Link>
        <Link to="/catalogo" className="btn">EXPLORAR RECURSOS</Link>
      </div>
    </div>
  );
}