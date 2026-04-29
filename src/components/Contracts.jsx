import { useMemo, useState } from 'react';
import { contracts, CATEGORIES } from '../data/contracts.js';

const MUNI_LABEL = (m) => m;
const ALL = '__all__';

function formatCOP(n) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)} B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)} M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)} K`;
  return `$${n}`;
}
function formatCOPLong(n) {
  return `$${n.toLocaleString('es-CO')}`;
}

function titleCase(s) {
  if (!s) return '';
  const lower = ['de', 'la', 'el', 'y', 'a', 'en', 'del', 'al', 'los', 'las', 'por', 'para', 'con', 'o'];
  return s.toLowerCase().split(/\s+/).map((w, i) => {
    if (i > 0 && lower.includes(w)) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

export default function Contracts() {
  const [year, setYear] = useState(ALL);
  const [muni, setMuni] = useState(ALL);
  const [cat, setCat] = useState(ALL);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const years = useMemo(() => [...new Set(contracts.map((c) => c.year))].sort((a, b) => b - a), []);
  const munis = useMemo(() => [...new Set(contracts.map((c) => c.municipio))].sort(), []);
  const cats = useMemo(() => [...new Set(contracts.map((c) => c.categoria))], []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return contracts.filter((c) =>
      (year === ALL || c.year === Number(year)) &&
      (muni === ALL || c.municipio === muni) &&
      (cat === ALL || c.categoria === cat) &&
      (!q || c.objeto.toLowerCase().includes(q))
    ).sort((a, b) => b.year - a.year || b.valor - a.valor);
  }, [year, muni, cat, search]);

  const stats = useMemo(() => {
    const total = filtered.reduce((s, c) => s + c.valor, 0);
    const byMuni = {};
    filtered.forEach((c) => { byMuni[c.municipio] = (byMuni[c.municipio] || 0) + 1; });
    const topMuni = Object.entries(byMuni).sort((a, b) => b[1] - a[1])[0];
    return { count: filtered.length, total, topMuni };
  }, [filtered]);

  const totalAll = useMemo(() => contracts.reduce((s, c) => s + c.valor, 0), []);

  return (
    <section id="contratos" className="section">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">02 — Trayectoria contractual</span>
          <h2 className="section__title">57 contratos · 5 años · 10 entidades</h2>
        </div>

        {/* KPIs */}
        <div className="kpi-grid">
          <div className="kpi-card kpi-card--accent">
            <span className="kpi-card__label">Total contratos</span>
            <span className="kpi-card__value">{contracts.length}</span>
            <span className="kpi-card__sub">2021 — 2025</span>
          </div>
          <div className="kpi-card kpi-card--accent">
            <span className="kpi-card__label">Valor gestionado</span>
            <span className="kpi-card__value">{formatCOP(totalAll)}</span>
            <span className="kpi-card__sub">{formatCOPLong(totalAll)} COP</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-card__label">Entidades atendidas</span>
            <span className="kpi-card__value">{munis.length}</span>
            <span className="kpi-card__sub">Cundinamarca</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-card__label">Años activo</span>
            <span className="kpi-card__value">{years.length}</span>
            <span className="kpi-card__sub">consecutivos</span>
          </div>
        </div>

        {/* Filtros */}
        <div className="filters">
          <div className="filters__row">
            <FilterSelect label="Año" value={year} onChange={setYear} options={[[ALL, 'Todos los años'], ...years.map((y) => [y, String(y)])]} />
            <FilterSelect label="Municipio" value={muni} onChange={setMuni} options={[[ALL, 'Todos'], ...munis.map((m) => [m, m])]} />
            <FilterSelect label="Categoría" value={cat} onChange={setCat} options={[[ALL, 'Todas'], ...cats.map((c) => [c, CATEGORIES[c].label])]} />
            <input
              className="filters__search"
              type="search"
              placeholder="Buscar en el objeto del contrato…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filters__summary">
            Mostrando <strong>{stats.count}</strong> de {contracts.length} contratos
            {stats.count > 0 && (
              <> · valor total: <strong>{formatCOPLong(stats.total)} COP</strong></>
            )}
          </div>
        </div>

        {/* Tabla / Cards */}
        {filtered.length === 0 ? (
          <div className="empty">
            <p>No se encontraron contratos con esos filtros.</p>
            <button
              className="btn btn--ghost"
              onClick={() => { setYear(ALL); setMuni(ALL); setCat(ALL); setSearch(''); }}
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="contracts-list">
            <div className="contracts-list__head" role="row">
              <span>Año</span>
              <span>Municipio</span>
              <span>Categoría</span>
              <span>Objeto</span>
              <span>Valor</span>
              <span>Soportes</span>
            </div>
            {filtered.map((c) => {
              const cat = CATEGORIES[c.categoria];
              const isOpen = expanded === c.id;
              return (
                <article key={c.id} className={`contract ${isOpen ? 'contract--open' : ''}`} role="row">
                  <span className="contract__year">{c.year}</span>
                  <span className="contract__muni">{c.municipio}</span>
                  <span className="contract__cat" style={{ '--cat-color': cat.color }}>
                    <span className="cat-dot" />
                    <span className="contract__cat-label">{cat.label}</span>
                  </span>
                  <span className="contract__obj">
                    <button
                      type="button"
                      className="contract__obj-btn"
                      onClick={() => setExpanded(isOpen ? null : c.id)}
                      aria-expanded={isOpen}
                    >
                      {titleCase(c.objeto.length > 90 && !isOpen ? c.objeto.slice(0, 90) + '…' : c.objeto)}
                    </button>
                  </span>
                  <span className="contract__val">{formatCOP(c.valor)}</span>
                  <span className="contract__links">
                    {c.siaobserva && (
                      <a href={c.siaobserva} target="_blank" rel="noopener noreferrer" title="Ficha pública en SIA Observa">
                        <ExtIcon /> SIA
                      </a>
                    )}
                    {c.acta && (
                      <a href={c.acta} target="_blank" rel="noopener noreferrer" title="Acta de liquidación">
                        <DocIcon /> Acta
                      </a>
                    )}
                  </span>
                </article>
              );
            })}
          </div>
        )}

        <p className="contracts-note">
          Información verificable públicamente en{' '}
          <a href="https://siaobserva.auditoria.gov.co" target="_blank" rel="noopener noreferrer">SIA Observa</a>
          {' '}— Sistema Integral de Auditoría de la Auditoría General de la República de Colombia.
        </p>
      </div>
    </section>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="filter">
      <span className="filter__label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="filter__select">
        {options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
    </label>
  );
}

function ExtIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
