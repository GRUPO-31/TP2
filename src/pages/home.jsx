import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [titulo, setTitulo] = useState('');
  const tituloFinal = "SINTAXIA"; // Nombre oficial de la empresa
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  // Efecto Parallax interactivo sutil (sigue al mouse)
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  // Efecto de decodificación del título al cargar
  useEffect(() => {
    let iteracion = 0;
    const intervalo = setInterval(() => {
      setTitulo(tituloFinal.split("").map((letra, index) => {
        if (index < iteracion) return tituloFinal[index];
        return caracteres[Math.floor(Math.random() * caracteres.length)];
      }).join(""));
      
      if (iteracion >= tituloFinal.length) clearInterval(intervalo);
      iteracion += 1 / 4;
    }, 40);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div 
      className="home-integrated" 
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative', 
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
      }}
    >
      {/* Reactor de Anillos Holográficos (Fondo 3D) */}
      <div className="hologram-reactor" style={{
        transform: `translateZ(-100px) rotateX(${mousePos.y * -1}deg) rotateY(${mousePos.x}deg)`
      }}>
        <div className="reactor-ring ring-1"></div>
        <div className="reactor-ring ring-2"></div>
        <div className="reactor-ring ring-3"></div>
      </div>

      {/* Panel Central Integrado (Efecto Cristal / Glassmorphism) */}
      <div className="glass-panel" style={{
        transform: `translateZ(30px) rotateX(${mousePos.y * -0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
      }}>
        <div className="status-badge">
          <span className="dot"></span> PROTOCOLO INICIALIZADO
        </div>
        
        <h1 className="cyber-title">
          {titulo}
        </h1>
        
        {/* Descripción oficial de la empresa */}
        <div className="description-box">
          <p>
            <strong>SINTAXIA</strong> es una firma de desarrollo tecnológico especializada en arquitecturas web de alta densidad.
          </p>
          <p style={{ color: 'var(--text-muted)'}}>
            Diseñamos ecosistemas digitales escalables integrando interfaces inmersivas, consumo híbrido de APIs en tiempo real y bases de datos tácticas. Construimos el puente entre el código puro y la experiencia del usuario del futuro.
          </p>
        </div>

        {/* Botones de acción integrados */}
        <div className="action-panels">
          <Link to="/equipo" className="cyber-btn-angled primary">
            <span className="btn-glare"></span>
            [ INSPECCIONAR EQUIPO ] &gt;
          </Link>
          <Link to="/catalogo" className="cyber-btn-angled secondary">
            <span className="btn-glare"></span>
            [ BASE DE DATOS ] &gt;
          </Link>
        </div>
      </div>

      {/* Métricas flotantes sutiles en los bordes */}
      <div className="floating-metric top-left" style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}>
        <span>LATENCIA_UI</span>
        <strong>1.02ms</strong>
      </div>
      <div className="floating-metric bottom-right" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}>
        <span>ESTADO_RED</span>
        <strong>100% ONLINE</strong>
      </div>

      {/* ESTILOS CSS ADAPTADOS A VARIABLES GLOBALES */}
      <style>{`
        .home-integrated {
          background: radial-gradient(circle at center, var(--green-dim) 0%, transparent 60%);
          width: 100%;
        }

        .hologram-reactor {
          position: absolute;
          top: 50%; left: 50%;
          width: 600px; height: 600px;
          margin-top: -300px; margin-left: -300px;
          transform-style: preserve-3d;
          z-index: 1;
          pointer-events: none;
          transition: transform 0.15s ease-out;
          opacity: 0.5;
        }

        .reactor-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid var(--border-dim);
        }

        .ring-1 {
          border-top: 2px solid var(--green);
          border-bottom: 2px solid var(--cyan);
          animation: spin3D 15s infinite linear;
          box-shadow: 0 0 30px var(--green-dim);
        }
        .ring-2 {
          inset: 40px;
          border-left: 2px dashed var(--green);
          border-right: 2px dashed var(--cyan);
          animation: spin3DReverse 10s infinite linear;
        }
        .ring-3 {
          inset: 90px;
          border: 2px dotted var(--cyan);
          animation: spin3D 25s infinite linear;
        }

        .glass-panel {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 40px;
          max-width: 850px;
          width: 90%;
          background: var(--bg-card);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--border-dim);
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.8), inset 0 0 20px var(--green-dim);
          border-radius: 4px;
          transition: transform 0.1s ease-out;
        }

        .status-badge {
          display: inline-block;
          background: var(--green-dim);
          border: 1px solid var(--border-dim);
          padding: 6px 16px;
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: var(--green);
          margin-bottom: 20px;
          border-radius: 20px;
        }
        .status-badge .dot {
          display: inline-block;
          width: 6px; height: 6px;
          background: var(--green);
          border-radius: 50%;
          margin-right: 8px;
          box-shadow: 0 0 8px var(--green);
          animation: blinker 1.5s linear infinite;
        }

        .cyber-title {
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          font-family: var(--font-code);
          color: #fff;
          margin: 0 0 20px 0;
          letter-spacing: 10px;
          font-weight: 900;
          text-shadow: 0 0 25px var(--green-glow), 3px 3px 0px var(--cyan);
        }

        .description-box {
          font-family: var(--font-code);
          font-size: 1rem;
          line-height: 1.6;
          color: #fff;
          margin: 0 auto 35px;
          text-align: center;
        }
        .description-box p {
          margin-bottom: 15px;
        }

        .action-panels {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cyber-btn-angled {
          position: relative;
          display: inline-block;
          padding: 14px 28px;
          font-family: var(--font-code);
          font-size: 0.85rem;
          font-weight: bold;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
        }
        
        .cyber-btn-angled.primary {
          background: var(--green);
          color: #000;
          box-shadow: 0 0 15px var(--green-glow);
        }
        .cyber-btn-angled.primary:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        .cyber-btn-angled.secondary {
          background: var(--green-dim);
          color: var(--cyan);
          border-left: 2px solid var(--cyan);
          border-right: 2px solid var(--cyan);
        }
        .cyber-btn-angled.secondary:hover {
          background: rgba(0,229,255,0.2);
          transform: translateY(-2px);
        }

        .floating-metric {
          position: absolute;
          background: var(--bg-card);
          border-left: 2px solid var(--green);
          padding: 10px 15px;
          font-family: var(--font-code);
          z-index: 5;
          backdrop-filter: blur(4px);
          transition: transform 0.15s ease-out;
        }
        .floating-metric span {
          display: block; font-size: 0.6rem; color: var(--text-muted); margin-bottom: 4px;
        }
        .floating-metric strong {
          display: block; font-size: 1rem; color: var(--green);
        }
        .top-left { top: 5%; left: 2%; border-left-color: var(--cyan); }
        .top-left strong { color: var(--cyan); }
        .bottom-right { bottom: 5%; right: 2%; }

        @keyframes spin3D {
          0% { transform: rotateX(65deg) rotateZ(0deg); }
          100% { transform: rotateX(65deg) rotateZ(360deg); }
        }
        @keyframes spin3DReverse {
          0% { transform: rotateX(55deg) rotateY(15deg) rotateZ(360deg); }
          100% { transform: rotateX(55deg) rotateY(15deg) rotateZ(0deg); }
        }
        @keyframes blinker {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}