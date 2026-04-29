import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="05 — Capacidades" title="Habilidades clave" />
        <div className="skills-grid">
          {skills.map((g) => (
            <article key={g.group} className="skill-card">
              <h3 className="skill-card__title">{g.group}</h3>
              <ul className="skill-card__list">
                {g.items.map((s) => (
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
