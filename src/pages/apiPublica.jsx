import { useState, useEffect } from 'react';
import CryptoChart from '../components/CryptoChart';

const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false';

function formatPrice(value) {
  if (value == null) return '—';
  const num = Number(value);
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: num < 1 ? 4 : 2 });
}

function formatCompact(value) {
  if (value == null) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 2 }).format(Number(value));
}

export default function ApiPublica() {
  const [assets, setAssets] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);
  const [modalCrypto, setModalCrypto] = useState(null);
  const [selectedCryptoId, setSelectedCryptoId] = useState('');
  const selectedCrypto = assets.find((coin) => coin.id === selectedCryptoId) || assets[0];
  const chartCoinId = selectedCrypto?.id;
  const [history, setHistory] = useState({ coinId: null, data: [], loading: false, error: null });

  useEffect(() => {
    if (!chartCoinId) return;
    const controller = new AbortController();
    setHistory({ coinId: chartCoinId, data: [], loading: true, error: null });

    async function consultarHistorial() {
      try {
        // Siete días ofrece resolución horaria automática y timestamps reales.
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${encodeURIComponent(chartCoinId)}/market_chart?vs_currency=usd&days=7`, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const json = await response.json();
        if (!Array.isArray(json.prices)) throw new Error('Historial inválido');
        if (!controller.signal.aborted) {
          setHistory({ coinId: chartCoinId, data: json.prices, loading: false, error: null });
        }
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error('Error al consultar historial:', err);
        setHistory({ coinId: chartCoinId, data: [], loading: false, error: 'No se pudo cargar el historial horario. Intentá actualizar el mercado.' });
      }
    }

    consultarHistorial();
    return () => controller.abort();
  }, [chartCoinId, ultimaActualizacion]);

  const consultarMercado = async () => {
    setCargando(true);
    setError(null);
    try {
      const response = await fetch(COINGECKO_API);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const json = await response.json();
      setAssets(json || []);
      setUltimaActualizacion(new Date());
    } catch (err) {
      console.error('Error al consultar API:', err);
      setError('No se pudo establecer conexión con el flujo de mercado en tiempo real.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    consultarMercado();
    const interval = setInterval(consultarMercado, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cyber-frame">
      <div className="corner-hud tl"></div>
      <div className="corner-hud tr"></div>
      <div className="corner-hud bl"></div>
      <div className="corner-hud br"></div>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '10px', fontFamily: 'var(--font-code)', fontSize: '0.7rem'}}>
        <span className="blink" style={{color: 'var(--green)'}}>
          [API_CORE // CONEXIÓN EN VIVO]
        </span>
        <span style={{color: 'var(--cyan)'}}>
          SYNC: {ultimaActualizacion ? ultimaActualizacion.toLocaleTimeString() : '—'}
        </span>
      </div>

      <div className="section-heading">
        <span style={{color: 'var(--green)', fontFamily: 'var(--font-code)', fontSize: '0.75rem'}}>04. TELEMETRÍA DE MERCADO</span>
        <h2>ESTACIÓN DE ACTIVOS DIGITALES</h2>
        <p>Canal de consulta asíncrona en grilla táctica de tarjetas con efectos visuales avanzados. Haz clic en cualquier activo para inspeccionar.</p>
      </div>

      <div style={{marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap'}}>
        <button className="btn btn-primary" onClick={consultarMercado} disabled={cargando} style={{fontSize: '0.8rem'}}>
          {cargando ? '[ SINCRONIZANDO... ]' : '⚡ ACTUALIZAR MERCADO EN VIVO'}
        </button>
        <span style={{fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: 'var(--text-muted)'}}>
          * Actualización automática cada 45 segundos.
        </span>
      </div>

      {error && (
        <div style={{padding: '12px 15px', marginBottom: '20px', background: 'rgba(255,68,68,0.1)', border: '1px solid #ff4444', color: '#ff4444', fontFamily: 'var(--font-code)', fontSize: '0.78rem'}}>
          &gt; ERROR_RED: {error}
        </div>
      )}

      {cargando && assets.length === 0 ? (
        <div style={{padding: '50px', textAlign: 'center', fontFamily: 'var(--font-code)', color: 'var(--green)'}}>
          &gt; ESTABLECIENDO HANDSHAKE CON EL SERVIDOR DE MERCADO...
        </div>
      ) : (
        <div className="grid-cards">
          {assets.map((coin) => {
            const cambio = Number(coin.price_change_percentage_24h || 0);
            return (
              <article 
                key={coin.id} 
                className="card-item crypto-card-vfx" 
                style={{position: 'relative', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
                onClick={() => {
                  setSelectedCryptoId(coin.id);
                  setModalCrypto(coin);
                }}
              >
                <div className="crt-noise-overlay"></div>
                <div className="scanner-beam-vfx"></div>

                <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '0.65rem', marginBottom: '10px', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '6px', zIndex: 3, position: 'relative'}}>
                  <span style={{color: 'var(--cyan)', fontWeight: 'bold'}}>RANK #{coin.market_cap_rank}</span>
                  <span style={{background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 6px', border: '1px solid var(--green)'}}>
                    {coin.symbol.toUpperCase()}
                  </span>
                </div>

                <div style={{zIndex: 3, position: 'relative', marginBottom: '15px'}}>
                  <h3 style={{fontSize: '1.2rem', color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-code)'}}>{coin.name}</h3>
                  <div style={{fontSize: '1.4rem', color: 'var(--green)', fontFamily: 'var(--font-code)', fontWeight: 'bold', textShadow: '0 0 10px rgba(0,255,102,0.3)'}}>
                    {formatPrice(coin.current_price)}
                  </div>
                </div>

                <div style={{zIndex: 3, position: 'relative', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-code)', fontSize: '0.75rem', borderTop: '1px dashed var(--border-dim)', paddingTop: '10px'}}>
                  <span style={{color: 'var(--text-muted)'}}>24H: <strong style={{color: cambio >= 0 ? 'var(--green)' : '#ff4444'}}>{cambio >= 0 ? `+${cambio.toFixed(2)}%` : `${cambio.toFixed(2)}%`}</strong></span>
                  <span style={{color: 'var(--cyan)'}}>&gt;</span>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <section aria-labelledby="crypto-chart-heading" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px dashed var(--border-dim)', fontFamily: 'var(--font-code)' }}>
        <h3 id="crypto-chart-heading" style={{ color: 'var(--green)', marginBottom: '15px' }}>HISTORIAL DE PRECIOS // 7 DÍAS</h3>
        <label htmlFor="crypto-chart-select" style={{ display: 'block', marginBottom: '8px' }}>Criptomoneda</label>
        <select
          id="crypto-chart-select"
          className="filter-select"
          style={{ width: '100%', minWidth: 0, marginBottom: '20px' }}
          value={selectedCrypto?.id || ''}
          onChange={(event) => setSelectedCryptoId(event.target.value)}
          disabled={assets.length === 0}
        >
          {assets.length === 0 && <option value="">Sin activos disponibles</option>}
          {assets.map((coin) => <option key={coin.id} value={coin.id}>{coin.name} ({coin.symbol.toUpperCase()})</option>)}
        </select>
        {(cargando && assets.length === 0) || (chartCoinId && (history.loading || history.coinId !== chartCoinId)) ? (
          <p role="status" style={{ color: 'var(--text-muted)' }}>Cargando historial de precios...</p>
        ) : history.error ? (
          <p role="alert" style={{ color: '#ff4444' }}>{history.error}</p>
        ) : (
          <CryptoChart data={history.data} name={selectedCrypto?.name || ''} />
        )}
      </section>

      {/* MODAL DE INSPECCIÓN DE ACTIVO */}
      {modalCrypto && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 10, 5, 0.85)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="cyber-frame" style={{
            background: '#020d07',
            border: '2px solid var(--green)',
            width: '100%',
            maxWidth: '550px',
            position: 'relative',
            boxShadow: '0 0 40px rgba(0, 255, 102, 0.3)'
          }}>
            <div className="corner-hud tl"></div><div className="corner-hud tr"></div>
            <div className="corner-hud bl"></div><div className="corner-hud br"></div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border-dim)', paddingBottom: '10px', marginBottom: '15px', fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--green)'}}>
              <span>{'// INSPECCIÓN DE ACTIVO DIGITAL'}</span>
              <button onClick={() => setModalCrypto(null)} className="btn" style={{padding: '2px 8px', fontSize: '0.7rem', color: '#ff4444', borderColor: '#ff4444'}}>[ X ]</button>
            </div>

            <h3 style={{fontSize: '1.5rem', color: '#fff', fontFamily: 'var(--font-code)', marginBottom: '5px'}}>{modalCrypto.name} ({modalCrypto.symbol.toUpperCase()})</h3>
            <span style={{display: 'inline-block', color: 'var(--cyan)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', marginBottom: '15px'}}>
              POSICIÓN EN MERCADO: #{modalCrypto.market_cap_rank}
            </span>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px', fontFamily: 'var(--font-code)'}}>
              <div style={{background: 'rgba(0,255,102,0.05)', padding: '10px', border: '1px dashed var(--border-dim)'}}>
                <span style={{fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block'}}>PRECIO ACTUAL</span>
                <strong style={{color: 'var(--green)', fontSize: '1.1rem'}}>{formatPrice(modalCrypto.current_price)}</strong>
              </div>
              <div style={{background: 'rgba(0,255,102,0.05)', padding: '10px', border: '1px dashed var(--border-dim)'}}>
                <span style={{fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block'}}>CAPITALIZACIÓN</span>
                <strong style={{color: '#fff', fontSize: '1rem'}}>{formatCompact(modalCrypto.market_cap)}</strong>
              </div>
            </div>

            <div style={{background: '#000', border: '1px dashed var(--green)', padding: '12px', fontFamily: 'var(--font-code)', fontSize: '0.75rem', marginBottom: '20px', color: 'var(--green)'}}>
              &gt; MÁXIMO 24H: {formatPrice(modalCrypto.high_24h)}<br/>
              &gt; MÍNIMO 24H: {formatPrice(modalCrypto.low_24h)}<br/>
              &gt; VOLUMEN TOTAL: {formatCompact(modalCrypto.total_volume)}
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button onClick={() => setModalCrypto(null)} className="btn" style={{fontSize: '0.75rem'}}>
                CERRAR INSPECTOR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ESTILOS DE LAS TARJETAS Y EFECTOS */}
      <style>{`
        .crypto-card-vfx {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .crypto-card-vfx:hover {
          border-color: var(--green);
          box-shadow: 0 0 25px rgba(0, 255, 102, 0.3), inset 0 0 15px rgba(0, 255, 102, 0.08);
          transform: translateY(-4px);
        }
        .scanner-beam-vfx {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(180deg, rgba(0, 255, 102, 0.9), transparent);
          box-shadow: 0 0 10px var(--green);
          z-index: 2;
          pointer-events: none;
        }
        .crypto-card-vfx:hover .scanner-beam-vfx {
          animation: scanCryptoCard 1.5s infinite linear;
        }
        .crt-noise-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.015), rgba(0, 0, 255, 0.04));
          background-size: 100% 3px, 3px 100%;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes scanCryptoCard {
          0% { top: -20%; }
          100% { top: 120%; }
        }
      `}</style>
    </div>
  );
}
