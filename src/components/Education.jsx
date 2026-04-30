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
        <SectionHeader
          eyebrow="03 — Formación"
          title="Educación"
          lead="Trayectoria académica en orden cronológico, del bachillerato al pregrado en Ingeniería Mecatrónica."
        />
        <ol className="edu-timeline">
          {education.map((e, i) => (
            <li key={i} className="edu-timeline__item">
              <div className="edu-timeline__year">
                <span>{e.year}</span>
              </div>
              <div className="edu-timeline__marker" aria-hidden="true">
                <span className="edu-timeline__dot" />
              </div>
              <div className="edu-timeline__card">
                <span className="edu-timeline__type">{TYPE_LABEL[e.type] || e.type}</span>
                <h3 className="edu-timeline__title">{e.title}</h3>
                <p className="edu-timeline__inst">{e.institution}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, lead }) {
  return (
    <div className="section__header">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section__title">{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  );
}
