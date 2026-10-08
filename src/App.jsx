import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Equipo from './Pages/Equipo';
import Catalogo from './Pages/Catalogo';
import ApiPublica from './Pages/ApiPublica';
import ArbolComponentes from './Pages/ArbolComponentes';
import Bitacora from './Pages/Bitacora';
import './index.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
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