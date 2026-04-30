import { contact, profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contacto" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="06 — Contacto" title="Hablemos" />
        <div className="contact">
          <p className="contact__lead">
            Si tienes un proyecto del sector público, una oportunidad de innovación tecnológica
            o necesitas un aliado para soporte técnico e infraestructura, conversemos.
          </p>

          <div className="contact__grid">
            <a className="contact-card" href={`mailto:${contact.email}`}>
              <span className="contact-card__label">Correo</span>
              <span className="contact-card__value">{contact.email}</span>
            </a>

            <a className="contact-card" href={`tel:+57${contact.phone}`}>
              <span className="contact-card__label">Teléfono</span>
              <span className="contact-card__value">+57 {contact.phoneDisplay}</span>
            </a>
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
