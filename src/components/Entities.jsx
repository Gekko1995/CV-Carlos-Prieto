import { useMemo, useState } from 'react';
import { contracts } from '../data/contracts.js';

/* Mapa opcional: si pones el escudo oficial en public/images/escudos/<archivo>.png
   se mostrará automáticamente. Si no existe, se usa un escudo placeholder con
   las iniciales del municipio.
   Para añadir uno: pon el PNG en public/images/escudos/gachancipa.png y se
   detecta solo. */
const ESCUDOS = {
  'Gachancipá':       '/images/escudos/gachancipa.png',
  'Choachí':          '/images/escudos/choachi.png',
  'Zipaquirá':        '/images/escudos/zipaquira.png',
  'Guatavita':        '/images/escudos/guatavita.png',
  'Zipacón':          '/images/escudos/zipacon.png',
  'Sopó':             '/images/escudos/sopo.png',
  'Asocentro Cajicá': '/images/escudos/cajica.png',
  'Nemocón':          '/images/escudos/nemocon.png',
  'El Rosal':         '/images/escudos/el-rosal.png',
  'Guasca':           '/images/escudos/guasca.png',
};

function PlaceholderShield({ name }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <svg className="entity-shield-svg" viewBox="0 0 100 120" aria-hidden="true">
      <defs>
        <linearGradient id={`grad-${name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M 50 6 L 92 22 L 92 64 Q 92 96 50 116 Q 8 96 8 64 L 8 22 Z"
        fill={`url(#grad-${name})`}
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      <line x1="20" y1="40" x2="80" y2="40" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="var(--accent)"
        letterSpacing="-2"
      >
        {initials}
      </text>
    </svg>
  );
}

function EntityCard({ name }) {
  const escudoSrc = ESCUDOS[name];
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = escudoSrc && !imgFailed;

  return (
    <div className="entity-card">
      <div className="entity-card__shield">
        {showImg ? (
          <img
            src={escudoSrc}
            alt={`Escudo de ${name}`}
            className="entity-shield-img"
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
        ) : (
          <PlaceholderShield name={name} />
        )}
      </div>
      <h3 className="entity-card__name">{name}</h3>
      <span className="entity-card__role">Entidad contratante</span>
    </div>
  );
}

export default function Entities() {
  const data = useMemo(() => {
    const map = {};
    contracts.forEach((c) => {
      if (!map[c.municipio]) map[c.municipio] = { name: c.municipio, count: 0, total: 0 };
      map[c.municipio].count += 1;
      map[c.municipio].total += c.valor;
    });
    return Object.values(map).sort((a, b) => b.total - a.total);
  }, []);

  return (
    <section id="entidades" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">06 — Territorios</span>
          <h2 className="section__title">Entidades atendidas</h2>
          <p className="section__lead">
            Municipios y entidades públicas de Cundinamarca con las que CONAP Soluciones
            ha mantenido relación contractual entre 2021 y 2025.
          </p>
        </div>

        <div className="entities-grid">
          {data.map((d) => (
            <EntityCard key={d.name} name={d.name} count={d.count} total={d.total} />
          ))}
        </div>
      </div>
    </section>
  );
}
