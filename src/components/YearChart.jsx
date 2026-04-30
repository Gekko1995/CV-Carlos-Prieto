import { useMemo } from 'react';
import { contracts } from '../data/contracts.js';

function formatCOP(n) {
  return `$${n.toLocaleString('es-CO')}`;
}

export default function YearChart() {
  const data = useMemo(() => {
    const byYear = {};
    contracts.forEach((c) => {
      if (!byYear[c.year]) byYear[c.year] = { year: c.year, count: 0, total: 0 };
      byYear[c.year].count += 1;
      byYear[c.year].total += c.valor;
    });
    return Object.values(byYear).sort((a, b) => a.year - b.year);
  }, []);

  const max = Math.max(...data.map((d) => d.total), 1);
  const totalAll = data.reduce((s, d) => s + d.total, 0);
  const countAll = data.reduce((s, d) => s + d.count, 0);

  return (
    <div className="year-chart">
      <div className="year-chart__head">
        <h3 className="year-chart__title">Cantidad contratada por año</h3>
        <span className="year-chart__hint">{countAll} contratos · {formatCOP(totalAll)} total</span>
      </div>
      <div className="year-chart__rows">
        {data.map((d) => {
          const pct = (d.total / max) * 100;
          return (
            <div key={d.year} className="year-row" aria-label={`${d.year}: ${d.count} contratos por ${formatCOP(d.total)}`}>
              <span className="year-row__year">{d.year}</span>
              <span className="year-row__count">
                <strong>{d.count}</strong>
                <span>contratos</span>
              </span>
              <div className="year-row__bar">
                <div className="year-row__bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <span className="year-row__amount">{formatCOP(d.total)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
