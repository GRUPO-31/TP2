import React, { useState } from 'react';

const integrantesData = [
  {
    id: 'diego',
    nombre: 'DIEGO RODRIGUEZ',
    rol: 'LEAD_ARCHITECT',
    meta: '📍 Buenos Aires, Argentina | ⏳ 46 Años',
    bio: 'Enfocado en asegurar la calidad del software mediante pruebas, detección de errores y mejora continua, buscando desarrollar sistemas confiables, funcionales y eficientes.',
    quote: '"Detectar errores también es una forma de construir mejores soluciones."',
    github: 'https://github.com/diegojrodriguez/landing-personalDJR',
    web: 'https://landing-personal-djr.vercel.app/',
    img: '/Imagenes/diego.jpg',
    skills: [
      { name: 'C# / .NET & Backend Services', width: '85%' },
      { name: 'SQL Server & Bases de Datos Relacionales', width: '90%' },
      { name: 'Python / APIs & Automatización', width: '80%' },
      { name: 'HTML5, CSS3 & JavaScript', width: '75%' }
    ],
    peliculas: ['Back to the Future (1985)', 'El Efecto Mariposa (2004)', 'Terminator (1984)'],
    musica: ['A 2000 - Rodrigo', 'La Leyenda Continua - Rodrigo', 'Q\' Lokura / Ulises Bueno']
  },
  {
    id: 'brian',
    nombre: 'BRIAN',
    rol: 'FULLSTACK_DEV',
    meta: '📍 Buenos Aires, Argentina | ⏳ 31 Años',
    bio: 'Desarrollador Fullstack apasionado por crear aplicaciones modernas, optimizar interfaces frontend fluidas y potenciar el flujo de trabajo integrando herramientas de Inteligencia Artificial.',
    quote: '"Construyendo aplicaciones escalables y conectando el código inteligente con experiencias visuales de vanguardia."',
    github: 'https://github.com/brianlavandera3/pfo1-Brian-David-Lavandera-2-A',
    web: 'https://pfo1-brian-david-lavandera-2-a.vercel.app/',
    img: '/Imagenes/brian.png',
    skills: [
      { name: 'Desarrollo Frontend & UI Dinámica', width: '92%' },
      { name: 'Creación de Apps & APIs REST', width: '88%' },
      { name: 'Asistencia y Prompting con IA', width: '90%' },
      { name: 'Control de Versiones & Git', width: '85%' }
    ],
    peliculas: ['The Matrix (1999)', 'Ex Machina (2014)', 'Blade Runner 2049 (2017)'],
    musica: ['Daft Punk - Random Access Memories', 'The Weeknd - After Hours', 'Gorillaz - Demon Days']
  },
  {
    id: 'sergio',
    nombre: 'SERGIO VARGAS',
    rol: 'QA ENGINEER',
    meta: '📍 Buenos Aires, Argentina | ⏳ 33 Años',
    bio: 'Especializado en el diseño, desarrollo e integración de sistemas críticos y aplicaciones cliente-servidor. Enfocado en la consistencia de datos, arquitectura backend robusta y aseguramiento de calidad.',
    quote: '"Un sistema robusto no es el que nunca falla, sino el que está diseñado para garantizar la integridad."',
    github: 'https://github.com/SergioVargas101/pfo1-landing-portfolio',
    web: 'https://pfo1-landing-portfolio-gamma.vercel.app/',
    img: '/Imagenes/Sergio.png',
    skills: [
      { name: 'HTML y CSS', width: '80%' },
      { name: 'JavaScript', width: '65%' },
      { name: 'C# / .NET', width: '75%' },
      { name: 'MySQL', width: '75%' }
    ],
    peliculas: ['Interestelar (2014)', '¿Qué pasó ayer? (2009)', 'Matrix (1999)'],
    musica: ['Linkin Park - Meteora', 'Soda Stereo - Sueño Stereo', 'Maroon 5 - Red Pill Blues']
  },
  {
    id: 'cristian',
    nombre: 'CRISTIAN VILLAGRA',
    rol: 'IA ENGINEER',
    meta: '📍 Buenos Aires, Argentina | ⏳ 33 Años',
    bio: 'Apasionado por la creación de soluciones innovadoras mediante inteligencia artificial, automatización de procesos y desarrollo de sistemas inteligentes.',
    quote: '"Convierte datos en inteligencia y procesos en soluciones automáticas."',
    github: 'https://github.com/Crrisst/PfoFrontend',
    web: 'https://pfo-frontend.vercel.app/',
    img: '/Imagenes/cristian.jpg',
    skills: [
      { name: 'Python', width: '90%' },
      { name: 'Despliegue e integración en la nube', width: '85%' },
      { name: 'Automatización de Procesos', width: '80%' },
      { name: 'Ingeniería de Datos para IA', width: '95%' }
    ],
    peliculas: ['Al filo del mañana (2014)', 'Ex Machina (2014)', 'El lobo de Wall Street (2013)'],
    musica: ['Michael Jackson - Thriller', 'Airbag - El club de la pelea', 'Linkin Park - Hybrid Theory']
  }
];

export default function Equipo() {
  const [selectedOp, setSelectedOp] = useState(null);
  const [outputTerminal, setOutputTerminal] = useState('Terminal interactiva // Esperando comando...');

  const runConsoleTest = (nombre) => {
    setOutputTerminal(`> Ejecutando escaneo para ${nombre}...\n> Validando integridad de componentes... [OK]\n> ESTADO: SISTEMA OPERATIVO Y SINCRONIZADO AL 100%.`);
  };

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>02. UNIDADES DE DESARROLLO</span>
        <h2>EQUIPO SINTAXIA</h2>
        <p>Selecciona un operativo para desplegar su tarjeta completa de perfil con estadísticas, gustos y consola interactiva.</p>
      </div>

      {!selectedOp ? (
        <div className="grid-cards">
          {integrantesData.map((op) => (
            <div key={op.id} className="card-item" style={{cursor: 'pointer'}} onClick={() => setSelectedOp(op)}>
              <div>
                <div style={{height: '160px', background: '#000', marginBottom: '12px', border: '1px solid var(--border-dim)'}}>
                  <img src={op.img} alt={op.nombre} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <h3>{op.nombre}</h3>
                <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.7rem'}}>&lt;{op.rol} /&gt;</span>
                <p style={{marginTop: '8px', fontSize: '0.8rem'}}>{op.bio}</p>
              </div>
              <button className="btn btn-primary" style={{width: '100%', marginTop: '15px', justifyContent: 'center'}}>ABRIR PERFIL COMPLETO &gt;</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button className="btn" style={{marginBottom: '20px'}} onClick={() => setSelectedOp(null)}>&lt; VOLVER AL LISTADO DE OPERATIVOS</button>
          
          <div className="profile-layout">
            <aside className="profile-sidebar">
              <div className="avatar-frame" style={{width: '160px', height: '160px', margin: '0 auto 15px', border: '2px solid var(--green)', overflow: 'hidden'}}>
                <img src={selectedOp.img} alt={selectedOp.nombre} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <h2 style={{fontFamily: 'var(--font-code)', color: '#fff', fontSize: '1.2rem'}}>{selectedOp.nombre}</h2>
              <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', display: 'block', margin: '5px 0 10px'}}>{selectedOp.rol}</span>
              <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px'}}>{selectedOp.meta}</p>
              <p style={{fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '15px'}}>{selectedOp.bio}</p>
              <div style={{background: 'rgba(0,255,102,0.05)', borderLeft: '3px solid var(--green)', padding: '10px', fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '15px', textAlign: 'left'}}>
                {selectedOp.quote}
              </div>
              <div style={{display: 'flex', gap: '8px', justifyContent: 'center', width: '100%'}}>
                <a href={selectedOp.github} target="_blank" rel="noreferrer" className="btn" style={{padding: '6px 12px', fontSize: '0.7rem'}}>GitHub</a>
                <a href={selectedOp.web} target="_blank" rel="noreferrer" className="btn btn-primary" style={{padding: '6px 12px', fontSize: '0.7rem'}}>Web Deploy</a>
              </div>
            </aside>

            <section className="profile-details" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div className="card-item" style={{background: 'var(--bg-card)'}}>
                <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '15px'}}>// HABILIDADES PRINCIPALES</h3>
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

              <div className="card-item" style={{background: '#010a05', border: '1px dashed var(--green)'}}>
                <h3 style={{color: 'var(--green)', fontFamily: 'var(--font-code)', marginBottom: '10px'}}>// CONSOLA INTERACTIVA DEL PERFIL</h3>
                <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px'}}>Ejecuta el diagnóstico de rendimiento específico para este operativo:</p>
                <button className="btn btn-primary" onClick={() => runConsoleTest(selectedOp.nombre)}>EJECUTAR TEST DE SISTEMA</button>
                <pre style={{marginTop: '12px', padding: '10px', background: '#000', color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', whiteSpace: 'pre-wrap'}}>{outputTerminal}</pre>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}