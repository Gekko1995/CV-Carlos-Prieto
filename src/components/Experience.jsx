import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="03 — Trayectoria" title="Experiencia profesional" />
        <ol className="timeline">
          {experience.map((item, i) => (
            <li key={i} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true"></div>
              <article className="timeline__card">
                <header className="timeline__head">
                  <h3>{item.role}</h3>
                  <span className="badge">{item.period}</span>
                </header>
                <p className="timeline__org">
                  <strong>{item.company}</strong>
                  {item.location ? <> · {item.location}</> : null}
                </p>
                <p className="timeline__summary">{item.summary}</p>

                {item.clients && item.clients.length > 0 && (
                  <div className="chips">
                    {item.clients.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                )}

                <ul className="timeline__bullets">
                  {item.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
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
