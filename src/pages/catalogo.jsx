import React, { useState, useMemo } from 'react';
import recursosData from '../data/recursos.json';

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('TODAS');
  const [orden, setOrden] = useState('id'); // 'id' o 'az'
  const [modalRecurso, setModalRecurso] = useState(null);
  const [telemetriaClicks, setTelemetriaClicks] = useState({});

  // Categorías únicas
  const categorias = useMemo(() => {
    const cats = (recursosData || []).map(r => r.categoria || 'GENERAL');
    return ['TODAS', ...new Set(cats)];
  }, []);

  // Filtrado y Ordenamiento
  const recursosFiltrados = useMemo(() => {
    let resultado = (recursosData || []).filter(item => {
      const matchTexto = (item.titulo || '').toLowerCase().includes(busqueda.toLowerCase()) ||
                         (item.descripcion || '').toLowerCase().includes(busqueda.toLowerCase());
      const matchCat = categoriaSeleccionada === 'TODAS' || item.categoria === categoriaSeleccionada;
      return matchTexto && matchCat;
    });

    if (orden === 'az') {
      resultado.sort((a, b) => (a.titulo || '').localeCompare(b.titulo || ''));
    } else {
      resultado.sort((a, b) => (a.id || 0) - (b.id || 0));
    }

    return resultado;
  }, [busqueda, categoriaSeleccionada, orden]);

  const abrirModal = (item) => {
    const idKey = item.id || item.titulo;
    setTelemetriaClicks(prev => ({
      ...prev,
      [idKey]: (prev[idKey] || 0) + 1
    }));
    setModalRecurso(item);
  };

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div>
      <div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div>
      <div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>03. BASE DE DATOS TÁCTICA &amp; TELEMETRÍA</span>
        <h2>CATÁLOGO DE RECURSOS SINTAXIA</h2>
        <p>Sistema avanzado de indexación, filtrado y diagnóstico de registros. Haz clic en cualquier tarjeta para desplegar el modal de inspección táctica.</p>
      </div>

      {/* Controles de Búsqueda, Filtros y Ordenamiento */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '15px', alignItems: 'center'}} className="catalogo-controls">
          <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--green)', fontFamily: 'var(--font-code)'}}>&gt;</span>
            <input 
              type="text" 
              placeholder="Buscar por título o descripción..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 35px',
                background: '#010f07',
                border: '1px solid var(--border-dim)',
                color: '#fff',
                fontFamily: 'var(--font-code)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
              className="cyber-input"
            />
          </div>

          <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <span style={{fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--text-muted)'}}>ORDEN:</span>
            <button 
              onClick={() => setOrden(orden === 'id' ? 'az' : 'id')}
              className="btn"
              style={{fontSize: '0.7rem', padding: '10px 12px'}}
            >
              {orden === 'id' ? '[ ID DE REGISTRO ]' : '[ ALFABÉTICO A-Z ]'}
            </button>
          </div>
        </div>

        {/* Filtros por Categoría */}
        <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
          {categorias.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`btn ${categoriaSeleccionada === cat ? 'btn-primary' : ''}`}
              style={{
                fontSize: '0.7rem',
                padding: '8px 12px',
                background: categoriaSeleccionada === cat ? 'var(--green)' : 'rgba(0,255,102,0.05)',
                color: categoriaSeleccionada === cat ? '#000' : 'var(--green)',
                borderColor: 'var(--green)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{marginBottom: '20px', fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between'}}>
        <span>REGISTROS VISIBLES: [{recursosFiltrados.length} / {(recursosData || []).length}]</span>
        <span className="blink">[TELEMETRÍA_ACTIVA: OK]</span>
      </div>

      {/* Grilla de Recursos con VFX */}
      {recursosFiltrados.length === 0 ? (
        <div style={{padding: '50px', textAlign: 'center', fontFamily: 'var(--font-code)', color: '#ff4444', border: '1px dashed #ff4444', background: 'rgba(255,0,0,0.05)'}}>
          &gt; ERROR_404: No se encontraron registros coincidentes en la base de datos.
        </div>
      ) : (
        <div className="grid-cards">
          {recursosFiltrados.map((item, index) => {
            const idKey = item.id || index;
            const clicksCount = telemetriaClicks[idKey] || 0;
            return (
              <article 
                key={idKey} 
                className="card-item catalog-card-vfx" 
                style={{position: 'relative', overflow: 'hidden', cursor: 'pointer'}}
                onClick={() => abrirModal(item)}
              >
                <div className="crt-noise-overlay"></div>
                <div className="scanner-beam-vfx"></div>

                <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '0.65rem', marginBottom: '8px', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '6px', zIndex: 3, position: 'relative'}}>
                  <span style={{color: 'var(--cyan)', fontWeight: 'bold'}}>ID_0{item.id || index + 1}</span>
                  <div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
                    {clicksCount > 0 && (
                      <span style={{color: 'var(--yellow)', fontSize: '0.6rem'}}>HIT: {clicksCount}</span>
                    )}
                    <span style={{background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 6px', border: '1px solid var(--green)'}}>{item.categoria || 'RECURSO'}</span>
                  </div>
                </div>

                <div style={{zIndex: 3, position: 'relative', marginBottom: '15px'}}>
                  <h3 style={{fontSize: '1.1rem', color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-code)'}}>{item.titulo}</h3>
                  <p style={{fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4'}}>{item.descripcion}</p>
                </div>

                <div style={{zIndex: 3, position: 'relative', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--green)', borderTop: '1px dashed var(--border-dim)', paddingTop: '8px'}}>
                  <span>[ INSPECCIONAR REGISTRO ]</span>
                  <span>&gt;</span>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* MODAL DE INSPECCIÓN TÁCTICA */}
      {modalRecurso && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 10, 5, 0.85)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="cyber-frame" style={{
            background: '#020d07',
            border: '2px solid var(--green)',
            width: '100%',
            maxWidth: '600px',
            position: 'relative',
            boxShadow: '0 0 40px rgba(0, 255, 102, 0.3)'
          }}>
            <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
            <div className="corner-hud bl"></div><div className="corner-hud br"></div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '10px', marginBottom: '15px', fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--green)'}}>
              <span>// TERMINAL DE INSPECCIÓN TÁCTICA</span>
              <button onClick={() => setModalRecurso(null)} className="btn" style={{padding: '2px 8px', fontSize: '0.7rem', color: '#ff4444', borderColor: '#ff4444'}}>[ X ]</button>
            </div>

            <h3 style={{fontSize: '1.4rem', color: '#fff', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>{modalRecurso.titulo}</h3>
            <span style={{display: 'inline-block', background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 8px', border: '1px solid var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.7rem', marginBottom: '15px'}}>
              CATEGORÍA: {modalRecurso.categoria || 'GENERAL'}
            </span>

            <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px'}}>
              {modalRecurso.descripcion}
            </p>

            <div style={{background: 'rgba(0,255,102,0.05)', border: '1px dashed var(--border-dim)', padding: '12px', fontFamily: 'var(--font-code)', fontSize: '0.75rem', marginBottom: '20px', color: 'var(--text)'}}>
              &gt; ESTADO DEL NÚCLEO: VERIFICADO [100% SEGURO]<br/>
              &gt; TOTAL DE ACCESOS EN SESIÓN: {telemetriaClicks[modalRecurso.id || modalRecurso.titulo] || 1}<br/>
              &gt; TIPO DE RECURSO: {modalRecurso.link && modalRecurso.link !== '#' ? 'ENLACE WEB EXTERNO DISPONIBLE' : 'REGISTRO INTERNO DE NÚCLEO'}
            </div>

            <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end', alignItems: 'center'}}>
              {modalRecurso.link && modalRecurso.link !== '#' ? (
                <a href={modalRecurso.link} target="_blank" rel="noreferrer" className="btn btn-primary" style={{fontSize: '0.75rem'}}>
                  ABRIR ENLACE EXTERNO &gt;
                </a>
              ) : (
                <span style={{fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--cyan)'}}>
                  * Módulo interno sin URL externa asignada.
                </span>
              )}
              <button onClick={() => setModalRecurso(null)} className="btn" style={{fontSize: '0.75rem'}}>
                CERRAR TERMINAL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS específicos del Catálogo */}
      <style>{`
        .cyber-input:focus {
          border-color: var(--green) !important;
          box-shadow: 0 0 15px rgba(0, 255, 102, 0.2);
        }
        .catalog-card-vfx {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .catalog-card-vfx:hover {
          border-color: var(--green);
          box-shadow: 0 0 25px rgba(0, 255, 102, 0.3), inset 0 0 15px rgba(0, 255, 102, 0.08);
          transform: translateY(-4px);
        }
        .scanner-beam-vfx {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(180deg, rgba(0, 255, 102, 0.9), transparent);
          box-shadow: 0 0 10px var(--green);
          z-index: 2;
          pointer-events: none;
        }
        .catalog-card-vfx:hover .scanner-beam-vfx {
          animation: scanCatalogVfx 1.5s infinite linear;
        }
        .crt-noise-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.015), rgba(0, 0, 255, 0.04));
          background-size: 100% 3px, 3px 100%;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes scanCatalogVfx {
          0% { top: -20%; }
          100% { top: 120%; }
        }
      `}</style>
    </div>
  );
}