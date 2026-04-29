import { profile, contact } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="eyebrow">Disponible para proyectos del sector público</span>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#contacto" onClick={(e) => smoothTo(e, 'contacto')}>
              Contactar
            </a>
            <a className="btn btn--ghost" href="#proyectos" onClick={(e) => smoothTo(e, 'proyectos')}>
              Ver proyectos
            </a>
            <button className="btn btn--ghost" onClick={() => window.print()} type="button">
              Descargar PDF
            </button>
          </div>

          <div className="hero__meta">
            <span>📍 {contact.location}</span>
            <span>·</span>
            <span>Matrícula Profesional · {contact.matricula}</span>
          </div>
        </div>

        <div className="hero__photo">
          <div className="photo">
            <div className="photo__placeholder" aria-label="Foto profesional (placeholder)">
              <span className="photo__initials">{profile.initials}</span>
              <span className="photo__hint">Foto profesional</span>
            </div>
            <div className="photo__ring" aria-hidden="true"></div>
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
