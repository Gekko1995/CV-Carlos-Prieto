import { contact, profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contacto" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="06 — Hablemos" title="Contacto" />
        <div className="contact">
          <p className="contact__lead">
            Si tienes un proyecto del sector público, una oportunidad de innovación tecnológica o
            necesitas un aliado para soporte técnico e infraestructura, conversemos.
          </p>

          <div className="contact__grid">
            <a className="contact-card" href={`mailto:${contact.email}`}>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">{contact.email}</span>
            </a>

            <a className="contact-card" href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="contact-card__label">GitHub</span>
              <span className="contact-card__value">@{contact.github}</span>
            </a>

            <a className="contact-card" href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <span className="contact-card__label">LinkedIn</span>
              <span className="contact-card__value">{contact.linkedin}</span>
            </a>

            <div className="contact-card">
              <span className="contact-card__label">Matrícula Profesional</span>
              <span className="contact-card__value">{contact.matricula}</span>
            </div>
          </div>

          <p className="contact__sign">— {profile.name}</p>
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
