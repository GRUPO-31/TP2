import React, { useState } from 'react';

export default function ArbolComponentes() {
  const [expandidoApp, setExpandidoApp] = useState(true);
  const [expandidoLayout, setExpandidoLayout] = useState(true);

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>05. ARQUITECTURA DE SOFTWARE</span>
        <h2>ÁRBOL DE COMPONENTES DE REACT</h2>
        <p>Estructura jerárquica interactiva que refleja la organización real de componentes en la aplicación.</p>
      </div>

      <div style={{background: '#010a05', padding: '20px', border: '1px dashed var(--border-dim)', fontFamily: 'var(--font-code)'}}>
        <div style={{color: 'var(--green)', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => setExpandidoApp(!expandidoApp)}>
          📁 App.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Raíz / BrowserRouter &amp; Routes)</span>
        </div>

        {expandidoApp && (
          <div className="tree-node">
            <div className="tree-toggle" onClick={() => setExpandidoLayout(!expandidoLayout)}>
              📁 MainLayout <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Estructura Compartida)</span>
            </div>

            {expandidoLayout && (
              <div className="tree-node">
                <div>📄 Sidebar.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Menú de navegación y responsive)</span></div>
                <div>📄 Home.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Portada del equipo)</span></div>
                <div>📄 Equipo.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Perfiles interactivos de Diego, Brian, Sergio y Cristian)</span></div>
                <div>📄 Catalogo.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Buscador y filtros sobre recursos.json)</span></div>
                <div>📄 ApiPublica.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Consumo API CoinCap con estados de carga)</span></div>
                <div>📄 ArbolComponentes.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Jerarquía de componentes)</span></div>
                <div>📄 Bitacora.jsx <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Bitácora técnica con elementos desplegables)</span></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}