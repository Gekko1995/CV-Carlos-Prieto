import { profile, contact } from '../data.js';
import { contracts } from '../data/contracts.js';
import BranchSVG from './BranchSVG.jsx';

function formatM(n) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)} B`;
  if (n >= 1_000_000) return `$${Math.round(n / 1_000_000)} M`;
  return `$${n.toLocaleString('es-CO')}`;
}

export default function Hero() {
  const totalContracts = contracts.length;
  const totalValor = contracts.reduce((s, c) => s + c.valor, 0);
  const munis = new Set(contracts.map((c) => c.municipio)).size;
  const years = new Set(contracts.map((c) => c.year)).size;

  return (
    <section id="top" className="hero">
      <BranchSVG variant="hero-tr" />
      <BranchSVG variant="hero-bl" />

      <div className="container">
        <div className="hero__badge">
          <img src="/images/logo-aconap.png" alt="" />
          <span>Representante Legal · <strong>ACONAP Soluciones</strong></span>
        </div>

        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title} · Contratista del Sector Público</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => window.print()} type="button">
            <DownloadIcon /> Descargar HV (PDF)
          </button>
          <a className="btn btn--ghost" href="#contacto" onClick={(e) => smoothTo(e, 'contacto')}>
            Contactar
          </a>
        </div>

        <div className="hero__meta">
          <span>📍 {contact.location}</span>
          <span>·</span>
          <span>Matrícula Profesional · {contact.matricula}</span>
        </div>

        {/* Cifras verificables */}
        <div className="hero-stats" role="list">
          <div className="hero-stat" role="listitem">
            <span className="hero-stat__value">{totalContracts}</span>
            <span className="hero-stat__label">Contratos</span>
            <span className="hero-stat__sub">públicos ejecutados</span>
          </div>
          <div className="hero-stat" role="listitem">
            <span className="hero-stat__value">{formatM(totalValor)}</span>
            <span className="hero-stat__label">Valor gestionado</span>
            <span className="hero-stat__sub">en pesos colombianos</span>
          </div>
          <div className="hero-stat" role="listitem">
            <span className="hero-stat__value">{munis}</span>
            <span className="hero-stat__label">Entidades</span>
            <span className="hero-stat__sub">públicas atendidas</span>
          </div>
          <div className="hero-stat" role="listitem">
            <span className="hero-stat__value">{years}</span>
            <span className="hero-stat__label">Años</span>
            <span className="hero-stat__sub">2021 — Actualidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function smoothTo(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
