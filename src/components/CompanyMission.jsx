import { company } from '../data.js';

export default function CompanyMission() {
  return (
    <section id="empresa" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">02 — Empresa</span>
          <h2 className="section__title">CONAP Soluciones</h2>
          <p className="section__lead">
            Misión y visión de la firma desde la cual ejecuto los contratos del sector público.
          </p>
        </div>

        <div className="company-grid">
          <article className="company-card company-card--mision">
            <header className="company-card__head">
              <span className="company-card__icon" aria-hidden="true">
                <MisionIcon />
              </span>
              <h3 className="company-card__title">Misión</h3>
            </header>
            <p className="company-card__text">{company.mision}</p>
          </article>

          <article className="company-card company-card--vision">
            <header className="company-card__head">
              <span className="company-card__icon" aria-hidden="true">
                <VisionIcon />
              </span>
              <h3 className="company-card__title">Visión 2030</h3>
            </header>
            <p className="company-card__text">{company.vision}</p>
          </article>
        </div>

        <div className="company-brand">
          <img src={company.logo} alt={company.name} className="company-brand__logo" />
          <div>
            <p className="company-brand__name">{company.name}</p>
            <p className="company-brand__tagline">Ingeniería · Tecnología · Sector público</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MisionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
