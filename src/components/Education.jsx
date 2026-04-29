import { education } from '../data.js';

const TYPE_LABEL = {
  pregrado: 'Pregrado',
  tecnologico: 'Tecnólogo',
  tecnico: 'Técnico',
  bachiller: 'Bachillerato',
  diplomado: 'Diplomado',
};

export default function Education() {
  return (
    <section id="educacion" className="section">
      <div className="container">
        <SectionHeader eyebrow="04 — Formación" title="Educación" />
        <div className="edu-grid">
          {education.map((e, i) => (
            <article key={i} className="edu-card">
              <span className="edu-card__year">{e.year}</span>
              <span className="edu-card__type">{TYPE_LABEL[e.type] || e.type}</span>
              <h3 className="edu-card__title">{e.title}</h3>
              <p className="edu-card__inst">{e.institution}</p>
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
