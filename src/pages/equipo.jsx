import React, { useState } from 'react';

const integrantesData = [
  {
    id: 'diego',
    nombre: 'DIEGO',
    rol: '<LEAD_ARCHITECT />',
    bio: 'Especialista en lógica de backend, estructuras avanzadas y gestión de datos.',
    meta: '📍 Buenos Aires, Argentina | ⏳ 46 Años',
    fullBio: 'Enfocado en asegurar la calidad del software mediante pruebas, detección de errores y mejora continua, buscando desarrollar sistemas confiables, funcionales y eficientes.',
    quote: '"Detectar errores también es una forma de construir mejores soluciones."',
    github: 'https://github.com/diegojrodriguez/landing-personalDJR',
    web: 'https://landing-personal-djr.vercel.app/',
    img: '/Imagenes/diego.jpg',
    sync: '100%',
    latency: '1ms',
    stats: [{ label: 'BACKEND', width: '95%' }, { label: 'DATABASES', width: '90%' }],
    tech: ['HTML-CSS', 'NODE.JS', 'SQL', 'PYTHON'],
    skills: [
      { name: 'C# / .NET & Backend Services', width: '85%' },
      { name: 'SQL Server & Bases de Datos Relacionales', width: '90%' },
      { name: 'Python / APIs & Automatización', width: '80%' }
    ],
    peliculas: ['Back to the Future (1985)', 'El Efecto Mariposa (2004)', 'Terminator (1984)'],
    musica: ['A 2000 - Rodrigo', 'La Leyenda Continua - Rodrigo', 'Q\' Lokura / Ulises Bueno']
  },
  {
    id: 'brian',
    nombre: 'BRIAN',
    rol: '<FULLSTACK_DEV />',
    bio: 'Integrador de sistemas end-to-end, lógica de negocio y APIs REST eficientes.',
    meta: '📍 Buenos Aires, Argentina | ⏳ 31 Años',
    fullBio: 'Desarrollador Fullstack apasionado por crear aplicaciones modernas, optimizar interfaces frontend fluidas y potenciar el flujo de trabajo integrando herramientas de Inteligencia Artificial.',
    quote: '"Construyendo aplicaciones escalables y conectando el código inteligente con experiencias visuales de vanguardia."',
    github: 'https://github.com/brianlavandera3/pfo1-Brian-David-Lavandera-2-A',
    web: 'https://pfo1-brian-david-lavandera-2-a.vercel.app/',
    img: '/Imagenes/brian.png',
    sync: '98.2%',
    latency: '2ms',
    stats: [{ label: 'INTEGRACIÓN', width: '92%' }, { label: 'ESTRUCTURA', width: '88%' }],
    tech: ['EXPRESS', 'JS_ES6', 'GIT'],
    skills: [
      { name: 'Desarrollo Frontend & UI Dinámica', width: '92%' },
      { name: 'Creación de Apps & APIs REST', width: '88%' },
      { name: 'Asistencia y Prompting con IA', width: '90%' }
    ],
    peliculas: ['The Matrix (1999)', 'Ex Machina (2014)', 'Blade Runner 2049 (2017)'],
    musica: ['Daft Punk - Random Access Memories', 'The Weeknd - After Hours', 'Gorillaz - Demon Days']
  },
  {
    id: 'sergio',
    nombre: 'SERGIO',
    rol: '<QA_ENGINEER />',
    bio: 'Control de calidad estricto, depuración de errores y pruebas de stress del sistema.',
    meta: '📍 Buenos Aires, Argentina | ⏳ 33 Años',
    fullBio: 'Especializado en el diseño, desarrollo e integración de sistemas críticos y aplicaciones cliente-servidor. Enfocado en la consistencia de datos y aseguramiento de calidad.',
    quote: '"Un sistema robusto no es el que nunca falla, sino el que está diseñado para garantizar la integridad."',
    github: 'https://github.com/SergioVargas101/pfo1-landing-portfolio',
    web: 'https://pfo1-landing-portfolio-gamma.vercel.app/',
    img: '/Imagenes/Sergio.png',
    sync: '96.5%',
    latency: '2ms',
    stats: [{ label: 'DEBUGGING', width: '96%' }, { label: 'TESTING', width: '89%' }],
    tech: ['JEST', 'CYPRESS', 'DOCS'],
    skills: [
      { name: 'HTML y CSS', width: '80%' },
      { name: 'JavaScript', width: '65%' },
      { name: 'C# / .NET', width: '75%' }
    ],
    peliculas: ['Interestelar (2014)', '¿Qué pasó ayer? (2009)', 'Matrix (1999)'],
    musica: ['Linkin Park - Meteora', 'Soda Stereo - Sueño Stereo', 'Maroon 5 - Red Pill Blues']
  },
  {
    id: 'cristian',
    nombre: 'CRISTIAN',
    rol: '<IA_ENGINEER />',
    bio: 'Experto en inteligencia artificial y automatización de procesos.',
    meta: '📍 Buenos Aires, Argentina | ⏳ 33 Años',
    fullBio: 'Apasionado por la creación de soluciones innovadoras mediante inteligencia artificial, automatización de procesos y desarrollo de sistemas inteligentes.',
    quote: '"Convierte datos en inteligencia y procesos en soluciones automáticas."',
    github: 'https://github.com/Crrisst/PfoFrontend',
    web: 'https://pfo-frontend.vercel.app/',
    img: '/Imagenes/cristian.jpg',
    sync: '97.1%',
    latency: '3ms',
    stats: [{ label: 'MACHINE LEARNING', width: '91%' }, { label: 'DEEP LEARNING', width: '85%' }],
    tech: ['PYTHON', 'DATA SCIENCE', 'DATA ANALYST'],
    skills: [
      { name: 'Python', width: '90%' },
      { name: 'Despliegue e integración en la nube', width: '85%' },
      { name: 'Automatización de Procesos', width: '80%' }
    ],
    peliculas: ['Al filo del mañana (2014)', 'Ex Machina (2014)', 'El lobo de Wall Street (2013)'],
    musica: ['Michael Jackson - Thriller', 'Airbag - El club de la pelea', 'Linkin Park - Hybrid Theory']
  }
];

export default function Equipo() {
  const [selectedOp, setSelectedOp] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState('Esperando orden de diagnóstico táctico...');

  const ejecutarTest = (nombre) => {
    setTerminalOutput(`> Conectando con núcleo de ${nombre}...\n> Analizando flujos de datos y memoria... [OK]\n> ESTADO: SISTEMA 100% OPERATIVO Y SINCRONIZADO.`);
  };

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>02. UNIDADES DE DESARROLLO</span>
        <h2>EQUIPO SINTAXIA</h2>
        <p>Especialistas capacitados para el despliegue de software de alta densidad. Pasa el cursor y haz clic en las tarjetas.</p>
      </div>

      {!selectedOp ? (
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '20px', 
          marginBottom: '30px'
        }}>
          {integrantesData.map((op, idx) => (
            <article key={op.id} className="card-item op-card-creative" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '0.7rem', marginBottom: '10px', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '6px'}}>
                <span style={{color: 'var(--green)', fontWeight: 'bold'}}>OP_0{idx + 1}</span>
                <span style={{background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 6px', border: '1px solid var(--green)'}}>ONLINE</span>
              </div>

              {/* Contenedor de imagen con efectos creativos VFX */}
              <div 
                className="vfx-frame-container"
                style={{position: 'relative', height: '190px', background: '#000', border: '1px solid var(--border-dim)', cursor: 'pointer', overflow: 'hidden'}}
                onClick={() => setSelectedOp(op)}
              >
                <div style={{position: 'absolute', inset: '8px', border: '1px dashed rgba(0, 255, 102, 0.25)', pointerEvents: 'none', zIndex: 3}}></div>
                <div className="vfx-crt-noise"></div>
                <div className="vfx-laser-scan"></div>

                <img 
                  src={op.img} 
                  alt={op.nombre} 
                  className="vfx-zoomed-photo"
                  style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    objectPosition: 'center', 
                    filter: 'grayscale(35%) contrast(125%) brightness(0.95)',
                  }} 
                />
                
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4px 8px', background: 'rgba(2, 10, 5, 0.9)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '0.6rem', color: 'var(--text-muted)', zIndex: 4, borderTop: '1px solid var(--border-dim)'}}>
                  <span>SYNC: {op.sync}</span><span>LATENCY: {op.latency}</span>
                </div>
              </div>

              <div style={{marginTop: '15px'}}>
                <h3 style={{fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: '#fff'}}>{op.nombre}</h3>
                <span style={{display: 'inline-block', color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.7rem', fontWeight: 'bold', margin: '4px 0 8px'}}>{op.rol}</span>
                <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px'}}>{op.bio}</p>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px'}}>
                  {op.tech.map((t, i) => (
                    <span key={i} style={{background: 'rgba(0,255,102,0.05)', border: '1px solid var(--border-dim)', color: 'var(--text)', fontFamily: 'var(--font-code)', fontSize: '0.6rem', padding: '2px 6px'}}>{t}</span>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}} onClick={() => setSelectedOp(op)}>
                [ + ] TARJETA PERSONAL &gt;
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div>
          <button className="btn" style={{marginBottom: '20px'}} onClick={() => setSelectedOp(null)}>&lt; VOLVER A LA GRILLA DE OPERATIVOS</button>
          
          <div className="cyber-frame" style={{background: '#010a05', border: '2px solid var(--green)'}}>
            <div className="profile-layout">
              <aside className="profile-sidebar">
                <div className="avatar-frame vfx-frame-container" style={{width: '160px', height: '160px', margin: '0 auto 15px', border: '2px solid var(--green)', overflow: 'hidden', background: '#000', position: 'relative'}}>
                  <div className="vfx-crt-noise"></div>
                  <div className="vfx-laser-scan"></div>
                  <img 
                    src={selectedOp.img} 
                    alt={selectedOp.nombre} 
                    className="vfx-zoomed-photo"
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain', 
                      objectPosition: 'center',
                      filter: 'contrast(115%)'
                    }} 
                  />
                </div>
                <h2 style={{fontFamily: 'var(--font-code)', color: '#fff', fontSize: '1.3rem'}}>{selectedOp.nombre}</h2>
                <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', display: 'block', margin: '5px 0 10px'}}>{selectedOp.rol}</span>
                <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px'}}>{selectedOp.meta}</p>
                <p style={{fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '15px'}}>{selectedOp.fullBio}</p>
                
                <div style={{background: 'rgba(0,255,102,0.05)', borderLeft: '3px solid var(--green)', padding: '10px', fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '15px', textAlign: 'left'}}>
                  {selectedOp.quote}
                </div>

                <div style={{display: 'flex', gap: '10px', justifyContent: 'center', width: '100%'}}>
                  <a href={selectedOp.github} target="_blank" rel="noreferrer" className="btn" style={{padding: '6px 12px', fontSize: '0.7rem'}}>GitHub</a>
                  <a href={selectedOp.web} target="_blank" rel="noreferrer" className="btn btn-primary" style={{padding: '6px 12px', fontSize: '0.7rem'}}>Web Deploy</a>
                </div>
              </aside>

              <section className="profile-details" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div className="card-item" style={{background: 'var(--bg-card)'}}>
                  <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '15px'}}>// HABILIDADES Y ESPECIFICACIONES</h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    {selectedOp.skills.map((s, idx) => (
                      <div key={idx}>
                        <span style={{fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--text-muted)'}}>{s.name}</span>
                        <div style={{width: '100%', height: '6px', background: 'rgba(0,255,102,0.1)', border: '1px solid var(--border-dim)', marginTop: '4px'}}>
                          <div style={{width: s.width, height: '100%', background: 'var(--green)', boxShadow: '0 0 8px var(--green-glow)'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                  <div className="card-item" style={{background: 'var(--bg-card)'}}>
                    <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// 🎬 PELÍCULAS</h3>
                    <ul style={{listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                      {selectedOp.peliculas.map((p, i) => <li key={i}>&gt; {p}</li>)}
                    </ul>
                  </div>
                  <div className="card-item" style={{background: 'var(--bg-card)'}}>
                    <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// 🎵 MÚSICA</h3>
                    <ul style={{listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                      {selectedOp.musica.map((m, i) => <li key={i}>&gt; {m}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="card-item" style={{background: '#000', border: '1px dashed var(--green)'}}>
                  <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// CONSOLA TÁCTICA DE DIAGNÓSTICO</h3>
                  <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px'}}>Ejecuta el protocolo de escaneo para verificar el estado de esta unidad en tiempo real:</p>
                  <button className="btn btn-primary" onClick={() => ejecutarTest(selectedOp.nombre)}>EJECUTAR ESCANEO DE UNIDAD</button>
                  <pre style={{marginTop: '12px', padding: '12px', background: '#020a05', color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', whiteSpace: 'pre-wrap', border: '1px solid var(--border-dim)'}}>{terminalOutput}</pre>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .op-card-creative {
          transition: all 0.3s ease;
        }
        .op-card-creative:hover {
          border-color: var(--green);
          box-shadow: 0 0 30px rgba(0, 255, 102, 0.25), inset 0 0 15px rgba(0, 255, 102, 0.08);
          transform: translateY(-4px);
        }
        .vfx-laser-scan {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(180deg, rgba(0, 255, 102, 1), rgba(0, 229, 255, 0.4));
          box-shadow: 0 0 12px var(--green);
          z-index: 3;
          pointer-events: none;
        }
        .vfx-frame-container:hover .vfx-laser-scan {
          animation: laserScanMove 1.8s infinite linear;
        }
        .vfx-crt-noise {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.015), rgba(0, 0, 255, 0.04));
          background-size: 100% 3px, 3px 100%;
          opacity: 0.65;
          pointer-events: none;
          z-index: 2;
        }
        .vfx-zoomed-photo {
          transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.5s ease;
        }
        .vfx-frame-container:hover .vfx-zoomed-photo {
          transform: scale(1.06);
          filter: grayscale(0%) contrast(135%) brightness(1.08) !important;
        }
        @keyframes laserScanMove {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
}