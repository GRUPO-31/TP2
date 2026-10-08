import React, { useState } from 'react';

const bitacoraData = [
  { fecha: '07/09/2026', hito: 'Planificación y Arquitectura TP1.', estado: 'OK', desc: 'Acuerdo de roles, distribución de tareas y diseño conceptual de la estética cyberpunk.' },
  { fecha: '21/09/2026', hito: 'Despliegue y corrección de rutas en Vercel (TP1).', estado: 'FIX', desc: 'Resolución de conflictos por mayúsculas y minúsculas en producción.' },
  { fecha: '07/10/2026', hito: 'Migración a React y configuración de React Router.', estado: 'OK', desc: 'Estructuración inicial con Vite, instalación de dependencias y diseño de sidebar compartida.' },
  { fecha: '08/10/2026', hito: 'Desarrollo de Portada y Perfiles Interactivos.', estado: 'OK', desc: 'Construcción de componentes reutilizables para los perfiles de los operativos.' },
  { fecha: '09/10/2026', hito: 'Implementación de Datos Local JSON y Filtros.', estado: 'OK', desc: 'Creación del recurso con 20 registros, buscador en tiempo real y selector de categorías.' },
  { fecha: '10/10/2026', hito: 'Consumo de API Pública y Manejo de Estados.', estado: 'OK', desc: 'Integración con API CoinCap incorporando estados de carga y manejo de errores.' }
];

export default function Bitacora() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>06. REGISTRO TÉCNICO</span>
        <h2>BITÁCORA DEL SISTEMA // REACT</h2>
        <p>Memoria operativa de decisiones y hitos de desarrollo. Haz clic en cada registro para desplegar los detalles.</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        {bitacoraData.map((item, index) => (
          <div key={index} style={{background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-dim)', padding: '15px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'}} onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
              <span style={{fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--green)'}}>{item.fecha} - {item.hito}</span>
              <span style={{background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 6px', fontSize: '0.65rem', border: '1px solid var(--green)'}}>{item.estado}</span>
            </div>
            {expandedIndex === index && (
              <p style={{marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-dim)', paddingTop: '10px'}}>
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}