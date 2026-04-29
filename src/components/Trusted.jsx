import { contracts } from '../data/contracts.js';

export default function Trusted() {
  const munis = [...new Set(contracts.map((c) => c.municipio))].sort();

  return (
    <section className="trusted">
      <div className="container trusted__inner">
        <span className="trusted__label">Han confiado</span>
        <ul className="trusted__list">
          {munis.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
