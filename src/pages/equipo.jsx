import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const [selectedOp, setSelectedOp] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState('Esperando orden de diagnóstico táctico...');
  const [pasoEscaneo, setPasoEscaneo] = useState(-1);
  const [scanningId, setScanningId] = useState(null);
  const ejecutando = pasoEscaneo >= 0 && pasoEscaneo < 4;

  useEffect(() => {
    setSelectedOp(null);
    setPasoEscaneo(-1);
    setTerminalOutput('Esperando orden de diagnóstico táctico...');
    setScanningId(null);
  }, [location.key]);

  const ejecutarTest = (nombre) => {
    if (ejecutando) return;
    setTerminalOutput(`> INICIANDO SECUENCIA NEURONAL DE ACCESO PARA ${nombre}...`);
    setPasoEscaneo(0);
  };

  useEffect(() => {
    if (pasoEscaneo < 0 || pasoEscaneo >= 4) return;

    const mensajesPorPerfil = {
      diego: [
        '> QA_SCAN: Validando integridad de datos... [OK]',
        '> Comprobando rendimiento del backend en servidor... [OK]',
        '> Verificando seguridad de núcleos y cifrado... [OK]',
        '> [ESTADO: OPERATIVO 100% SEGURO // ACCESO CONCEDIDO]'
      ],
      brian: [
        '> FULLSTACK_BUILD: Sincronizando endpoints... [OK]',
        '> Compilando componentes de React v19... [OK]',
        '> Integración de pasarelas y APIs REST... [OK]',
        '> [ESTADO: FLUJO NEURONAL ESTABLE // CONEXIÓN ACTIVA]'
      ],
      sergio: [
        '> QA_SCAN: Ejecutando pruebas de estrés... [OK]',
        '> Analizando consistencia de interfaces DOM... [OK]',
        '> Revisión de excepciones y control de calidad... [OK]',
        '> [ESTADO: INTEGRIDAD CRÍTICA VERIFICADA]'
      ],
      cristian: [
        '> IA_CORE: Cargando modelos predictivos... [OK]',
        '> Analizando secuencias de automatización Python... [OK]',
        '> Despliegue de nodos inteligentes en la nube... [OK]',
        '> [ESTADO: INTELIGENCIA ARTIFICIAL EN LÍNEA]'
      ]
    };

    const mensajes = mensajesPorPerfil[selectedOp?.id] || [];

    const temporizador = setTimeout(() => {
      setTerminalOutput(anterior => anterior + '\n' + mensajes[pasoEscaneo]);
      setPasoEscaneo(anterior => anterior + 1);
    }, 750);

    return () => clearTimeout(temporizador);
  }, [pasoEscaneo, selectedOp?.id]);

  const abrirPerfil = (op) => {
    setScanningId(op.id);
    // Efecto de escaneo láser fluido antes de desplegar el perfil limpio
    setTimeout(() => {
      setSelectedOp(op);
      setPasoEscaneo(-1);
      setTerminalOutput('Esperando orden de diagnóstico táctico...');
      setScanningId(null);
    }, 450);
  };

  return (
    <div className="cyber-frame" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* HUD Corners Holográficos */}
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>02. UNIDADES DE DESARROLLO</span>
        <h2 className="matrix-glow-title">EQUIPO SINTAXIA</h2>
        <p>Especialistas capacitados para el despliegue de software de alta densidad. Pasa el cursor y haz clic en las tarjetas.</p>
      </div>

      {!selectedOp ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '30px' }}>
          {integrantesData.map((op, idx) => (
            <article 
              key={op.id} 
              className={`card-item op-card-creative cyber-glitch-card ${scanningId === op.id ? 'matrix-card-scanning-active' : ''}`} 
              style={{position: 'relative', overflow: 'hidden'}}
            >
              <div className="matrix-binary-bg"></div>

              <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '0.7rem', marginBottom: '10px', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '6px', position: 'relative', zIndex: 4}}>
                <span style={{color: 'var(--green)', fontWeight: 'bold'}}>OP_0{idx + 1}</span>
                <span className="blink" style={{background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 6px', border: '1px solid var(--green)'}}>ONLINE</span>
              </div>

              {/* Contenedor de imagen con efectos hiper-cibernéticos y láser doble */}
              <div 
                className="vfx-frame-container"
                style={{position: 'relative', height: '210px', background: '#000', border: '1px solid var(--border-dim)', cursor: 'pointer', overflow: 'hidden', zIndex: 4}}
                onClick={() => abrirPerfil(op)}
              >
                <div style={{position: 'absolute', inset: '8px', border: '1px dashed var(--border-dim)', pointerEvents: 'none', zIndex: 3}}></div>
                <div className="vfx-crt-noise"></div>
                <div className="vfx-laser-scan"></div>
                <div className="vfx-laser-scan-vertical"></div>
                <div className="matrix-digital-rain-overlay"></div>

                <img 
                  src={op.img} 
                  alt={op.nombre} 
                  className="vfx-zoomed-photo"
                  style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center', 
                    filter: 'grayscale(20%) contrast(130%) brightness(0.9)',
                  }} 
                />
                
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4px 8px', background: 'rgba(2, 10, 5, 0.92)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '0.6rem', color: 'var(--text-muted)', zIndex: 4, borderTop: '1px solid var(--border-dim)'}}>
                  <span>SYNC: {op.sync}</span><span>LATENCY: {op.latency}</span>
                </div>
              </div>

              <div style={{marginTop: '15px', position: 'relative', zIndex: 4}}>
                <h3 className="glitch-text" data-text={op.nombre} style={{fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: '#fff'}}>{op.nombre}</h3>
                <span style={{display: 'inline-block', color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.7rem', fontWeight: 'bold', margin: '4px 0 8px'}}>{op.rol}</span>
                <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px'}}>{op.bio}</p>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px'}}>
                  {op.tech.map((t, i) => (
                    <span key={i} style={{background: 'var(--green-dim)', border: '1px solid var(--border-dim)', color: 'var(--text)', fontFamily: 'var(--font-code)', fontSize: '0.6rem', padding: '2px 6px'}}>{t}</span>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center', position: 'relative', zIndex: 4}} onClick={() => abrirPerfil(op)}>
                [ + ] TARJETA PERSONAL &gt;
              </button>
            </article>
          ))}
        </div>
      ) : (
        /* VISTA DE PERFIL ABIERTA CON ENTRADA HOLOGRÁFICA FLUIDA */
        <div className="matrix-profile-transition">
          <button className="btn" style={{marginBottom: '20px'}} onClick={() => setSelectedOp(null)}>&lt; VOLVER A LA GRILLA DE OPERATIVOS</button>
          
          <div className="cyber-frame matrix-opened-container" style={{background: '#010a05', border: '2px solid var(--green)', position: 'relative', overflow: 'hidden'}}>
            <div className="matrix-binary-bg-large"></div>
            
            <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
            <div className="corner-hud bl"></div><div className="corner-hud br"></div>
            <div className="matrix-digital-rain-overlay"></div>

            <div className="profile-layout" style={{position: 'relative', zIndex: 4}}>
              <aside className="profile-sidebar">
                <div className="avatar-frame vfx-frame-container" style={{width: '160px', height: '160px', margin: '0 auto 15px', border: '2px solid var(--green)', overflow: 'hidden', background: '#000', position: 'relative'}}>
                  <div className="vfx-crt-noise"></div>
                  <div className="vfx-laser-scan"></div>
                  <div className="matrix-digital-rain-overlay"></div>
                  <img 
                    src={selectedOp.img} 
                    alt={selectedOp.nombre} 
                    className="vfx-zoomed-photo"
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'center',
                      filter: 'contrast(120%)'
                    }} 
                  />
                </div>
                <h2 className="glitch-text" style={{fontFamily: 'var(--font-code)', color: '#fff', fontSize: '1.3rem'}}>{selectedOp.nombre}</h2>
                <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', display: 'block', margin: '5px 0 10px'}}>{selectedOp.rol}</span>
                <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px'}}>{selectedOp.meta}</p>
                <p style={{fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '15px'}}>{selectedOp.fullBio}</p>
                
                <div style={{background: 'var(--green-dim)', borderLeft: '3px solid var(--green)', padding: '10px', fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '15px', textAlign: 'left', boxShadow: 'inset 0 0 15px var(--green-dim)'}}>
                  {selectedOp.quote}
                </div>

                <div style={{display: 'flex', gap: '10px', justifyContent: 'center', width: '100%'}}>
                  <a href={selectedOp.github} target="_blank" rel="noreferrer" className="btn" style={{padding: '6px 12px', fontSize: '0.7rem'}}>GitHub</a>
                  <a href={selectedOp.web} target="_blank" rel="noreferrer" className="btn btn-primary" style={{padding: '6px 12px', fontSize: '0.7rem'}}>Web Deploy</a>
                </div>
              </aside>

              <section className="profile-details" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div className="card-item matrix-inner-card" style={{background: 'var(--bg-card)'}}>
                  <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '15px'}}>// HABILIDADES Y ESPECIFICACIONES</h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    {selectedOp.skills.map((s, idx) => (
                      <div key={idx}>
                        <span style={{fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--text-muted)'}}>{s.name}</span>
                        <div style={{width: '100%', height: '6px', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--border-dim)', marginTop: '4px', position: 'relative', overflow: 'hidden'}}>
                          <div className="matrix-skill-bar-pulse" style={{width: s.width, height: '100%', background: 'var(--green)', boxShadow: '0 0 15px var(--green)'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                  <div className="card-item matrix-inner-card" style={{background: 'var(--bg-card)'}}>
                    <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// 🎬 PELÍCULAS</h3>
                    <ul style={{listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                      {selectedOp.peliculas.map((p, i) => <li key={i}>&gt; {p}</li>)}
                    </ul>
                  </div>
                  <div className="card-item matrix-inner-card" style={{background: 'var(--bg-card)'}}>
                    <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// 🎵 MÚSICA</h3>
                    <ul style={{listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                      {selectedOp.musica.map((m, i) => <li key={i}>&gt; {m}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="card-item matrix-terminal-box matrix-inner-card" style={{background: '#000', border: '1px dashed var(--green)'}}>
                  <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// CONSOLA TÁCTICA DE DIAGNÓSTICO</h3>
                  <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px'}}>Ejecuta el protocolo de escaneo para verificar el estado de esta unidad en tiempo real:</p>
                  <button className="btn btn-primary" onClick={() => ejecutarTest(selectedOp.nombre)}>EJECUTAR ESCANEO DE UNIDAD</button>
                  <pre className="matrix-terminal-screen" style={{marginTop: '12px', padding: '12px', background: '#020a05', color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', whiteSpace: 'pre-wrap', border: '1px solid var(--border-dim)'}}>{terminalOutput}</pre>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* ESTILOS DE TRANSICIÓN LIMPIA Y FLASHERA MATRIX */}
      <style>{`
        .op-card-creative {
          transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .op-card-creative:hover {
          border-color: var(--green) !important;
          box-shadow: 0 0 40px var(--green-glow), inset 0 0 25px var(--green-dim) !important;
          transform: translateY(-6px) scale(1.01);
        }

        /* Efecto de escaneo láser completo al presionar la tarjeta */
        .matrix-card-scanning-active {
          filter: brightness(1.6);
          box-shadow: 0 0 50px var(--green) !important;
          transform: scale(0.98);
          transition: transform 0.15s ease;
        }

        .matrix-binary-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), 
                      repeating-linear-gradient(0deg, transparent, transparent 4px, var(--green-dim) 4px, var(--green-dim) 5px);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }
        .op-card-creative:hover .matrix-binary-bg {
          opacity: 0.35;
        }

        .matrix-binary-bg-large {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 6px, var(--green-dim) 6px, var(--green-dim) 7px);
          opacity: 0.2;
          pointer-events: none;
          z-index: 1;
        }
        
        .vfx-laser-scan {
          position: absolute;
          top: -120%;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(180deg, #ffffff, var(--green)) !important;
          box-shadow: 0 0 15px var(--green), 0 0 30px var(--green-glow) !important;
          z-index: 5;
          pointer-events: none;
        }
        .vfx-frame-container:hover .vfx-laser-scan {
          animation: laserScanMove 1.3s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .vfx-laser-scan-vertical {
          position: absolute;
          top: 0;
          left: -120%;
          width: 4px;
          height: 100%;
          background: linear-gradient(90deg, #ffffff, var(--green)) !important;
          box-shadow: 0 0 15px var(--green) !important;
          z-index: 5;
          pointer-events: none;
        }
        .vfx-frame-container:hover .vfx-laser-scan-vertical {
          animation: laserScanMoveVertical 1.6s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .matrix-digital-rain-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--green-glow) 1.5px, transparent 0);
          background-size: 14px 14px;
          opacity: 0.22;
          z-index: 2;
          pointer-events: none;
        }

        .vfx-crt-noise {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05));
          background-size: 100% 3px, 3px 100%;
          opacity: 0.65;
          pointer-events: none;
          z-index: 3;
        }

        .vfx-zoomed-photo {
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.6s ease;
        }
        .vfx-frame-container:hover .vfx-zoomed-photo {
          transform: scale(1.08);
          filter: grayscale(0%) contrast(145%) brightness(1.15) !important;
        }

        /* Entrada holográfica limpia y fluida (sin achicar la pantalla) */
        .matrix-profile-transition {
          animation: matrixSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
        }

        .matrix-opened-container {
          box-shadow: 0 0 60px var(--green-glow), inset 0 0 35px var(--green-dim);
          animation: containerPulse 2.5s infinite alternate;
        }

        .matrix-inner-card {
          border: 1px solid var(--border-dim);
          transition: all 0.3s ease;
        }
        .matrix-inner-card:hover {
          border-color: var(--green);
          box-shadow: 0 0 20px var(--green-dim);
        }

        .matrix-skill-bar-pulse {
          position: relative;
          overflow: hidden;
        }
        .matrix-skill-bar-pulse::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
          animation: shimmerBar 1.8s infinite linear;
        }

        .matrix-terminal-screen {
          box-shadow: inset 0 0 20px var(--green-dim);
          text-shadow: 0 0 10px var(--green-glow);
        }

        .glitch-text {
          position: relative;
        }
        .op-card-creative:hover .glitch-text {
          animation: textGlitch 0.25s infinite alternate;
        }

        @keyframes matrixSlideIn {
          0% { opacity: 0; transform: translateY(20px); filter: brightness(1.8); }
          100% { opacity: 1; transform: translateY(0); filter: brightness(1); }
        }

        @keyframes laserScanMove {
          0% { top: -20%; }
          100% { top: 120%; }
        }

        @keyframes laserScanMoveVertical {
          0% { left: -20%; }
          100% { left: 120%; }
        }

        @keyframes containerPulse {
          0% { border-color: var(--green); box-shadow: 0 0 35px var(--green-glow); }
          100% { border-color: var(--cyan); box-shadow: 0 0 65px var(--green-glow); }
        }

        @keyframes shimmerBar {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @keyframes textGlitch {
          0% { text-shadow: 3px 0 var(--green), -3px 0 #fff; transform: translate(0); }
          50% { text-shadow: -3px 0 var(--green), 3px 0 var(--cyan); transform: translate(-1.5px, 1.5px); }
          100% { text-shadow: 1.5px 3px var(--green), -1.5px -3px #fff; transform: translate(1.5px, -1.5px); }
        }
      `}</style>
    </div>
  );
}