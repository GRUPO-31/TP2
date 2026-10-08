import React, { useState, useEffect } from 'react';

export default function ApiPublica() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const consultarApi = async () => {
    setCargando(true);
    setError(null);
    try {
      const res = await fetch('https://api.coincap.io/v2/assets?limit=5');
      if (!res.ok) throw new Error('Error al conectar con la API pública.');
      const json = await res.json();
      setDatos(json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div><div className="corner-hud br"></div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>04. CONEXIÓN EXTERNA</span>
        <h2>ESTACIÓN API PÚBLICA (COINCAP)</h2>
        <p>Consulta en tiempo real de criptomonedas mediante API REST sin exposición de claves privadas.</p>
      </div>

      <div style={{marginBottom: '20px'}}>
        <button className="btn btn-primary" onClick={consultarApi}>REINTENTAR / ACTUALIZAR CONSULTA</button>
      </div>

      {cargando && (
        <div style={{padding: '40px', textAlign: 'center', fontFamily: 'var(--font-code)', color: 'var(--green)'}}>
          &gt; CARGANDO DATOS DESDE EL SERVIDOR EXTERNO...
        </div>
      )}

      {error && (
        <div style={{padding: '20px', background: 'rgba(255,0,0,0.1)', border: '1px solid red', color: '#ff6b6b', fontFamily: 'var(--font-code)'}}>
          &gt; ERROR DE SISTEMA: {error}
        </div>
      )}

      {!cargando && !error && datos && (
        <div className="grid-cards">
          {datos.map(crypto => (
            <div key={crypto.id} className="card-item">
              <div>
                <span style={{color: 'var(--cyan)', fontFamily: 'var(--font-code)', fontSize: '0.7rem'}}>{crypto.symbol}</span>
                <h3>{crypto.name}</h3>
                <p style={{fontSize: '1.1rem', color: '#fff', fontWeight: 'bold', margin: '10px 0'}}>
                  ${parseFloat(crypto.priceUsd).toFixed(2)} USD
                </p>
              </div>
              <span style={{fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--green)'}}>
                Ranking: #{crypto.rank}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}