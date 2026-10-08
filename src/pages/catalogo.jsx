import React, { useState } from 'react';
import recursosData from '../data/recursos.json';

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('TODAS');
  const [expandedId, setExpandedId] = useState(null);

  const categorias = ['TODAS', ...new Set(recursosData.map(r => r.categoria))];

  const resultados = recursosData.filter(item => {
    const coincideTexto = item.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                          item.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaFiltro === 'TODAS' || item.categoria === categoriaFiltro;
    return coincideTexto && coincideCategoria;
  });

  const resetearFiltros = () => {
    setBusqueda('');
    setCategoriaFiltro('TODAS');
  };

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>03. BASE DE DATOS LOCAL</span>
        <h2>CATÁLOGO DE RECURSOS TECNOLÓGICOS</h2>
        <p>Listado dinámico de 20 registros con opciones de búsqueda en tiempo real y filtrado por categoría.</p>
      </div>

      <div className="search-filter-box" style={{display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap'}}>
        <input 
          type="text" 
          placeholder="Buscar recurso por nombre o descripción..." 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          className="search-input"
        />
        <select 
          value={categoriaFiltro} 
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="filter-select"
        >
          {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      {resultados.length === 0 ? (
        <div style={{padding: '30px', textAlign: 'center', border: '1px dashed var(--border-dim)'}}>
          <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>&gt; NO SE ENCONTRARON REGISTROS COINCIDENTES.</p>
          <button className="btn btn-primary" onClick={resetearFiltros}>RESTABLECER LISTA COMPLETA</button>
        </div>
      ) : (
        <div className="grid-cards">
          {resultados.map(item => (
            <div key={item.id} className="card-item">
              <div>
                <span style={{color: 'var(--cyan)', fontFamily: 'var(--font-code)', fontSize: '0.65rem'}}>[{item.categoria.toUpperCase()}]</span>
                <h3 style={{marginTop: '5px'}}>{item.nombre}</h3>
                <p>{item.descripcion}</p>
              </div>
              <div>
                <span style={{fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--green)', display: 'block', marginBottom: '10px'}}>Nivel: {item.nivel}</span>
                <button 
                  className="btn" 
                  style={{width: '100%', justifyContent: 'center'}}
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                >
                  {expandedId === item.id ? 'OCULTAR DETALLES' : '+ CONSULTAR INFO'}
                </button>
                {expandedId === item.id && (
                  <div style={{marginTop: '10px', padding: '10px', background: '#000', fontSize: '0.75rem', fontFamily: 'var(--font-code)', borderLeft: '2px solid var(--green)'}}>
                    &gt; ID de registro: #{item.id} | Estado: Activo en stack Sintaxia.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}