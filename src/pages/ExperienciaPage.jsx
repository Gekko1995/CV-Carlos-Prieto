import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Contracts from '../components/Contracts.jsx';

export default function ExperienciaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="experiencia-page">
      <div className="container experiencia-page__back">
        <Link to="/" className="back-link">
          <BackIcon />
          <span>Volver al CV</span>
        </Link>
      </div>
      <Contracts />
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
