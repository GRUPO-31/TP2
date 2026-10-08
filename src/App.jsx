import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Equipo from './pages/equipo';
import Catalogo from './pages/catalogo';
import ApiPublica from './pages/apiPublica';
import ArbolComponentes from './pages/arbolComponentes';
import Bitacora from './pages/bitacora';
import './index.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Efecto global para el fondo animado Matrix en Canvas
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const chars = "01100101 01110110 01110011 01110001 01110101 01100001 01100100 Sintaxia";
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(3, 8, 6, 0.08)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#00ff66";
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(drawMatrix, 40);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Canvas global del fondo Matrix */}
      <canvas id="matrix-canvas" style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        opacity: 0.25,
        pointerEvents: 'none'
      }}></canvas>

      <div className="app-layout">
        <button className="mobile-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/api" element={<ApiPublica />} />
            <Route path="/arbol" element={<ArbolComponentes />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}