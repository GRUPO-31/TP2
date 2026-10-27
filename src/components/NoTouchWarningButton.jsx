import React, { useState, useEffect } from 'react';

export default function NoTouchWarningButton() {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('sintaxia_theme');
    if (savedTheme === 'red' || document.body.classList.contains('theme-red')) {
      setIsRed(true);
      document.body.classList.add('theme-red');
    }
  }, []);

  const toggleReality = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const nextState = !isRed;
    setIsRed(nextState);
    if (nextState) {
      document.body.classList.add('theme-red');
      localStorage.setItem('sintaxia_theme', 'red');
    } else {
      document.body.classList.remove('theme-red');
      localStorage.setItem('sintaxia_theme', 'green');
    }
  };

  return (
    <div className="notouch-warning-wrapper">
      <button 
        type="button"
        onClick={toggleReality} 
        className={`notouch-tactical-btn ${isRed ? 'mode-chaos-red' : 'mode-stable-green'}`}
        title="ADVERTENCIA: PROTOCOLO DE CAOS"
      >
        {/* Esquinas HUD Geométricas */}
        <span className="hud-corner tl"></span>
        <span className="hud-corner tr"></span>
        <span className="hud-corner bl"></span>
        <span className="hud-corner br"></span>

        {/* Cámara de Advertencia */}
        <div className="warning-icon-chamber">
          <div className="laser-scan-bar"></div>
          <span className="warning-symbol">⚠</span>
        </div>

        {/* Panel de Texto Táctico con Advertencia NO TOCAR */}
        <div className="tactical-text-box">
          <span className="tactical-subtitle">// SEGURIDAD</span>
          <span className="tactical-title">
            {isRed ? 'SISTEMA ROTO [⚠]' : 'NO TOCAR'}
          </span>
        </div>

        {/* Nodo de Telemetría LED */}
        <div className="telemetry-node">
          <span className="led-pulse-dot"></span>
        </div>
      </button>

      <style>{`
        .notouch-warning-wrapper {
          display: flex;
          justify-content: center;
          padding: 12px 15px;
          border-top: 1px solid var(--border-dim);
          margin-top: auto;
          background: rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .notouch-tactical-btn {
          position: relative;
          width: 100%;
          max-width: 240px;
          background: rgba(2, 8, 4, 0.94);
          border: 1px solid var(--border-dim);
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          cursor: pointer;
          font-family: var(--font-code);
          color: var(--green);
          backdrop-filter: blur(16px);
          box-shadow: 0 0 15px var(--green-glow), inset 0 0 8px var(--green-dim);
          transition: all 0.3s ease;
          outline: none;
          user-select: none;
        }

        .notouch-tactical-btn:hover {
          border-color: var(--green);
          box-shadow: 0 0 25px var(--green-glow);
          transform: translateY(-2px);
        }

        body.theme-red .notouch-tactical-btn {
          border-color: #ff1e38;
          color: #ff1e38;
          box-shadow: 0 0 20px rgba(255, 30, 56, 0.5);
          background: rgba(18, 2, 4, 0.96);
        }

        .hud-corner {
          position: absolute;
          width: 5px;
          height: 5px;
          border-color: inherit;
          border-style: solid;
          pointer-events: none;
        }
        .hud-corner.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .hud-corner.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .hud-corner.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .hud-corner.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        .warning-icon-chamber {
          position: relative;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px dashed currentColor;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .warning-symbol {
          font-size: 0.85rem;
          animation: warningBlinkSymbol 0.8s infinite alternate;
        }

        @keyframes warningBlinkSymbol {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        .laser-scan-bar {
          position: absolute;
          top: 0;
          left: -120%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.85), transparent);
          animation: laserScanMove 2.2s infinite linear;
          z-index: 3;
          pointer-events: none;
        }

        @keyframes laserScanMove {
          0% { left: -120%; }
          100% { left: 120%; }
        }

        .tactical-text-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
          text-align: left;
          overflow: hidden;
          flex: 1;
        }

        .tactical-subtitle {
          font-size: 0.45rem;
          color: var(--text-muted);
          letter-spacing: 0.4px;
        }

        .tactical-title {
          font-size: 0.6rem;
          font-weight: 800;
          color: inherit;
          text-shadow: 0 0 6px currentColor;
          white-space: nowrap;
        }

        .telemetry-node {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 6px currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .led-pulse-dot {
          width: 2px;
          height: 2px;
          background: #fff;
          border-radius: 50%;
          animation: ledBlink 1.2s infinite alternate;
        }

        @keyframes ledBlink {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }

        .mode-chaos-red { background: rgba(14, 2, 4, 0.95); }
      `}</style>
    </div>
  );
}