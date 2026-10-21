import React, { useState } from 'react';

export default function ArbolComponentes() {
  const [expandidoApp, setExpandidoApp] = useState(true);
  const [expandidoLayout, setExpandidoLayout] = useState(true);
  const [expandidoAppLayout, setExpandidoAppLayout] = useState(true);
  const [expandidoMainContent, setExpandidoMainContent] = useState(true);
  const [expandidoRutas, setExpandidoRutas] = useState(true);
  const [expandidoApi, setExpandidoApi] = useState(true);
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
               📁 BrowserRouter <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>(Estructura Compartida)</span>
            </div>

            {expandidoLayout && (
                <div className="tree-node">

                  <div>📄 Canvas (Fondo animado Matrix)</div>

                  {/* Carpeta app-layout desplegable */}
                  <div className="tree-toggle" onClick={() => setExpandidoAppLayout(!expandidoAppLayout)}>
                    📁 app-layout (Contenedor compartido)
                  </div>

                  {expandidoAppLayout && (
                    <div className="tree-node">
                      <div>📄 Sidebar.jsx (Menú lateral)</div>

                      {/* Carpeta main-content desplegable */}
                      <div className="tree-toggle" onClick={() => setExpandidoMainContent(!expandidoMainContent)}>
                        📁 main-content (Contenido principal)
                      </div>

                      {expandidoMainContent && (
                        <div className="tree-node">

                          <div className="tree-toggle" onClick={() => setExpandidoRutas(!expandidoRutas)}>
                            📁 Routes (Navegación entre páginas)
                          </div>

                          {expandidoRutas && (
                            <div className="tree-node">
                              <div>📄 Home.jsx (Portada)</div>
                              <div>📄 Equipo.jsx (Perfiles)</div>
                              <div>📄 Catalogo.jsx (JSON y filtros)</div>

                              <div className="tree-toggle" onClick={() => setExpandidoApi(!expandidoApi)}>
                                📁 ApiPublica.jsx (API CoinGecko)
                              </div>

                              {expandidoApi && (
                                <div className="tree-node">
                                  <div>📄 CryptoChart.jsx (Gráfico de precios)</div>
                                </div>
                              )}

                              <div>📄 ArbolComponentes.jsx (Árbol interactivo)</div>
                              <div>📄 Bitacora.jsx (Registro técnico)</div>
                            </div>
                          )}

                        </div>
                      )}
                    </div>
                  )}
                </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
}