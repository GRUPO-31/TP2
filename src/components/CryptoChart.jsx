import PropTypes from 'prop-types';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 6,
});

const timeZone = 'America/Argentina/Buenos_Aires';
const hourFormatter = new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone });
const dateTimeFormatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone,
});

// Datos de CoinGecko: pares [timestamp en milisegundos, precio].
export default function CryptoChart({ data = [], name = '' }) {
  const chartData = data
    .filter((point) => Array.isArray(point) && Number.isFinite(point[0]) && Number.isFinite(point[1]))
    .map(([timestamp, price]) => ({ timestamp, price }))
    .sort((a, b) => a.timestamp - b.timestamp);

  if (!chartData.some((point) => point.price !== null)) {
    return <p role="status" style={{ color: 'var(--text-muted)' }}>No hay datos históricos disponibles para este activo.</p>;
  }

  return (
    <div role="img" aria-label={`Gráfico lineal del precio de ${name} en USD durante los últimos siete días`} style={{ width: '100%', minWidth: 0 }}>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData} margin={{ top: 15, right: 15, bottom: 25, left: 10 }} accessibilityLayer>
          <CartesianGrid stroke="var(--border-dim)" strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" type="number" scale="time" domain={['dataMin', 'dataMax']} tickFormatter={(value) => hourFormatter.format(value)} minTickGap={35} stroke="var(--text-muted)" tick={{ fontSize: 11 }} label={{ value: 'Hora (Argentina, UTC−3)', position: 'bottom', fill: 'var(--text-muted)', fontSize: 11 }} />
          <YAxis width={85} domain={['auto', 'auto']} stroke="var(--text-muted)" tickFormatter={(value) => priceFormatter.format(value)} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value) => [priceFormatter.format(value), 'Precio (USD)']}
            labelFormatter={(label) => `${dateTimeFormatter.format(Number(label))} (UTC−3)`}
            contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--green)', color: 'var(--text)' }}
            labelStyle={{ color: 'var(--text-muted)' }}
          />
          <Line type="linear" dataKey="price" stroke="var(--green)" strokeWidth={2} dot={chartData.length === 1} isAnimationActive={false} connectNulls={false} />
        </LineChart>
      </ResponsiveContainer>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Historial por hora. Pasá el cursor sobre la línea para ver la fecha, hora y precio del punto.</p>
    </div>
  );
}

CryptoChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  name: PropTypes.string,
};
