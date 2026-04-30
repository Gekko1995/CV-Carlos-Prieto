import { Link } from 'react-router-dom';
import { contracts } from '../data/contracts.js';

function formatCOPLong(n) {
  return `$${n.toLocaleString('es-CO')}`;
}

export default function ExperienciaPromo() {
  const totalContracts = contracts.length;
  const totalValor = contracts.reduce((s, c) => s + c.valor, 0);
  const munis = new Set(contracts.map((c) => c.municipio)).size;
  const years = new Set(contracts.map((c) => c.year)).size;

  return (
    <section id="trayectoria" className="section section--alt experiencia-promo">
      <div className="container">
        <div className="experiencia-promo__grid">
          <div>
            <span className="eyebrow">03 — Trayectoria contractual</span>
            <h2 className="section__title">{totalContracts} contratos públicos en {years} años</h2>
            <p className="experiencia-promo__lead">
              Trayectoria verificable en el sector público con <strong>{munis} entidades</strong> de
              Cundinamarca. Información pública en SIA Observa de la Auditoría General de la República.
            </p>
            <Link to="/experiencia" className="btn btn--primary experiencia-promo__cta">
              Ver experiencia completa
              <ArrowIcon />
            </Link>
          </div>
          <div className="experiencia-promo__stats">
            <div className="experiencia-promo__stat">
              <span className="experiencia-promo__stat-value">{totalContracts}</span>
              <span className="experiencia-promo__stat-label">Contratos</span>
            </div>
            <div className="experiencia-promo__stat experiencia-promo__stat--big">
              <span className="experiencia-promo__stat-value">{formatCOPLong(totalValor)}</span>
              <span className="experiencia-promo__stat-label">COP gestionados</span>
            </div>
            <div className="experiencia-promo__stat">
              <span className="experiencia-promo__stat-value">{munis}</span>
              <span className="experiencia-promo__stat-label">Entidades</span>
            </div>
            <div className="experiencia-promo__stat">
              <span className="experiencia-promo__stat-value">{years}</span>
              <span className="experiencia-promo__stat-label">Años</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
