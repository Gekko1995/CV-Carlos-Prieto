import { useMemo, useState } from 'react';
import { contracts, CATEGORIES } from '../data/contracts.js';

const ALL = '__all__';

function formatCOP(n) {
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
    return { count: filtered.length, total };
  }, [filtered]);

  const totalAll = useMemo(() => contracts.reduce((s, c) => s + c.valor, 0), []);

  return (
    <section id="contratos" className="section">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">Trayectoria contractual</span>
          <h2 className="section__title">Experiencia en el sector público</h2>
          <p className="section__lead">
            Trayectoria completa contractual de Carlos Andrés Prieto Martín en el sector público
            colombiano. Toda la información es verificable en SIA Observa de la Auditoría General
            de la República.
          </p>
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
            <span className="kpi-card__value kpi-card__value--money">{formatCOP(totalAll)}</span>
            <span className="kpi-card__sub">Pesos colombianos (COP)</span>
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
              <> · valor total: <strong>{formatCOP(stats.total)} COP</strong></>
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
              <span>Valor (COP)</span>
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
                </article>
              );
            })}
          </div>
        )}
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
