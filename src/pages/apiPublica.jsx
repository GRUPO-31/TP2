import React, { useState, useEffect } from 'react';

export default function ApiPublica() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const consultarApi = async () => {
    setCargando(true);
    setError(null);
    try {
      // Simulamos una consulta asíncrona a un servidor externo para evitar bloqueos de red/CORS del navegador
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulamos éxito controlado
          resolve([
            { id: '1', symbol: 'BTC', name: 'Bitcoin', priceUsd: '64230.50', rank: '1' },
            { id: '2', symbol: 'ETH', name: 'Ethereum', priceUsd: '3450.20', rank: '2' },
            { id: '3', symbol: 'SOL', name: 'Solana', priceUsd: '145.80', rank: '3' },
            { id: '4', symbol: 'ADA', name: 'Cardano', priceUsd: '0.45', rank: '4' },
            { id: '5', symbol: 'DOT', name: 'Polkadot', priceUsd: '6.15', rank: '5' }
          ]);
        }, 1000);
      }).then(data => {
        setDatos(data);
      });
    } catch (err) {
      setError('No se pudo establecer conexión con el servidor remoto.');
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
        <h2>ESTACIÓN API PÚBLICA (SIMULACIÓN DE DATOS REMOTOS)</h2>
        <p>Consulta asíncrona de datos de mercado con manejo de estados de carga, reintento y control de excepciones.</p>
      </div>

      <div style={{marginBottom: '20px'}}>
        <button className="btn btn-primary" onClick={consultarApi}>REINTENTAR / ACTUALIZAR CONSULTA</button>
      </div>

      {cargando && (
        <div style={{padding: '40px', textAlign: 'center', fontFamily: 'var(--font-code)', color: 'var(--green)'}}>
          &gt; CONECTANDO CON EL SERVIDOR EXTERNO Y DESCARGANDO DATOS...
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
                  ${crypto.priceUsd} USD
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