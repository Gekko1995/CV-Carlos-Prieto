import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <SectionHeader eyebrow="05 — Portafolio" title="Proyectos destacados" />
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.name} className="project-card">
              <header className="project-card__head">
                <span className="project-card__highlight">{p.highlight}</span>
                <h3 className="project-card__title">{p.name}</h3>
                <p className="project-card__role">{p.role}</p>
              </header>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section__header">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section__title">{title}</h2>
    </div>
  );
}
