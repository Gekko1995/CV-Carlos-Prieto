import { profile } from '../data.js';

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeader eyebrow="01 — Perfil" title="Sobre mí" />
        <div className="about">
          <p className="about__text">{profile.about}</p>
          <ul className="about__pillars">
            <li>
              <strong>Sector público</strong>
              <span>Contratación estatal y suministro</span>
            </li>
            <li>
              <strong>Tecnología</strong>
              <span>Soporte IT, redes y servidores</span>
            </li>
            <li>
              <strong>Industrial</strong>
              <span>Mantenimiento electromecánico</span>
            </li>
            <li>
              <strong>Innovación</strong>
              <span>Proyectos de I+D aplicados</span>
            </li>
          </ul>
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
