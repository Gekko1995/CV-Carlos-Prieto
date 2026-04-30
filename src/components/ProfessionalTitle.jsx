import { credential } from '../data.js';

export default function ProfessionalTitle() {
  return (
    <section id="titulo" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">05 — Título Profesional</span>
          <h2 className="section__title">Mi título profesional e ingeniería</h2>
        </div>

        <article className="credential">
          <aside className="credential__seal" aria-hidden="true">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="seal-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"  stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent-2)" />
                </linearGradient>
              </defs>
              {/* Aro exterior */}
              <circle cx="60" cy="60" r="56" fill="none" stroke="url(#seal-grad)" strokeWidth="2" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--rule)" strokeWidth="0.7" strokeDasharray="2 4" />
              {/* Compás de ingeniería */}
              <g transform="translate(60 60)">
                <path d="M 0 -28 L -16 16 M 0 -28 L 16 16 M 0 -28 L 0 -36"
                      stroke="url(#seal-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="0" cy="-28" r="3.5" fill="url(#seal-grad)" />
                <circle cx="-16" cy="16" r="2.5" fill="var(--accent-warm)" />
                <circle cx="16" cy="16" r="2.5" fill="var(--accent-warm)" />
                <path d="M -16 16 Q 0 24 16 16" stroke="var(--accent-warm)" strokeWidth="1.5" fill="none" />
              </g>
              {/* Texto circular */}
              <text fill="var(--text-muted)" fontFamily="IBM Plex Sans, sans-serif" fontSize="6" letterSpacing="2">
                <textPath href="#seal-arc" startOffset="0">INGENIERÍA · MECATRÓNICA · COPNIA</textPath>
              </text>
              <defs>
                <path id="seal-arc" d="M 60 8 A 52 52 0 1 1 59.99 8" fill="none" />
              </defs>
            </svg>
          </aside>

          <div className="credential__body">
            <span className="credential__institution">{credential.institutionShort}</span>
            <h3 className="credential__title">{credential.title}</h3>
            <p className="credential__institution-full">{credential.institution}</p>
            <p className="credential__desc">{credential.description}</p>

            <ul className="credential__highlights">
              {credential.highlights.map((h) => (
                <li key={h.label}>
                  <span className="credential__highlight-label">{h.label}</span>
                  <span className="credential__highlight-value">{h.value}</span>
                </li>
              ))}
            </ul>

            <div className="credential__registry">
              <RegistryIcon />
              <div>
                <span className="credential__registry-label">Matrícula profesional · {credential.registry}</span>
                <span className="credential__registry-note">{credential.registryNote}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function RegistryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
