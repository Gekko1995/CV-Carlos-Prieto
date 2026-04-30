import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="06 — Capacidades"
          title="Habilidades segmentadas según experiencia"
          lead="Cinco áreas en las que CONAP Soluciones ejecuta contratos del sector público, sustentadas en mi formación profesional y mi trayectoria contractual."
        />
        <div className="skills-list">
          {skills.map((s, i) => (
            <article key={s.group} className="skill-block">
              <span className="skill-block__num">
                {String(i + 1).padStart(2, '0')}
                <span className="skill-block__num-total">/ {String(skills.length).padStart(2, '0')}</span>
              </span>
              <div className="skill-block__body">
                <h3 className="skill-block__title">{s.group}</h3>
                <p className="skill-block__desc">{s.description}</p>
                <ul className="skill-block__chips">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
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
