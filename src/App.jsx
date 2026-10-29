import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './index.css';


const Home = lazy(() => import('./pages/home'));
const Equipo = lazy(() => import('./pages/equipo'));
const Catalogo = lazy(() => import('./pages/catalogo'));
const ApiPublica = lazy(() => import('./pages/apiPublica'));
const ArbolComponentes = lazy(() => import('./pages/arbolComponentes'));
const Bitacora = lazy(() => import('./pages/bitacora'));


const CyberLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'var(--font-code)',
    color: 'var(--green)',
    textAlign: 'center'
  }}>
    <div className="blink" style={{ fontSize: '1.2rem', marginBottom: '12px', letterSpacing: '2px' }}>
      &gt; DESCONECTANDO ENLACE NEURONAL...
    </div>
    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
      REDIRECCIONANDO FLUJO DE DATOS A SIÓN [100%]
    </div>
  </div>
);


function AnimatedRoutes() {
  const location = useLocation();
  const [animating, setAnimating] = useState(false);
  const [isRedTheme, setIsRedTheme] = useState(false);

  useEffect(() => {
   
    setIsRedTheme(document.body.classList.contains('theme-red'));
    setAnimating(true);
    
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 650); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const transitionClass = animating 
    ? (isRedTheme ? 'zion-disconnect-transition zion-red-glitch-transition' : 'zion-disconnect-transition')
    : '';

  return (
    <div style={{ width: '100%', minHeight: '100%', position: 'relative' }} className={transitionClass}>
      <Suspense fallback={<CyberLoader />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/api" element={<ApiPublica />} />
          <Route path="/arbol" element={<ArbolComponentes />} />
          <Route path="/bitacora" element={<Bitacora />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  
  const [themeRed, setThemeRed] = useState(() => {
    return localStorage.getItem('sintaxia_theme') === 'red';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setThemeRed(localStorage.getItem('sintaxia_theme') === 'red');
    };

    window.addEventListener('storage', handleStorageChange);
    
    const intervalCheck = setInterval(() => {
      const isRedBody = document.body.classList.contains('theme-red');
      if (isRedBody !== themeRed) {
        setThemeRed(isRedBody);
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalCheck);
    };
  }, [themeRed]);


  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const chars = "01100101 01110110 01110011 01110001 01110101 01100101 01100100 Sintaxia";
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    ctx.clearRect(0, 0, width, height);

    function drawMatrix() {
      ctx.fillStyle = themeRed ? "rgba(13, 2, 3, 0.2)" : "rgba(3, 8, 6, 0.2)";
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = themeRed ? "#ff1e38" : "#00ff66";
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
  }, [themeRed]);

  return (
    <BrowserRouter>
     
      <canvas id="matrix-canvas" style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        opacity: 0.28,
        pointerEvents: 'none'
      }}></canvas>

      <div className={`app-layout${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
        <button className="mobile-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} title={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'} aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={sidebarOpen} aria-controls="main-sidebar">
          <span></span><span></span><span></span>
        </button>
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
        
        <main className="main-content">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}