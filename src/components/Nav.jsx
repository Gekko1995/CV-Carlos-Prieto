import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../data.js';

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleAnchor(e, id) {
    e.preventDefault();
    setOpen(false);
    if (onHome) {
      scrollToId(id);
    } else {
      navigate('/');
      setTimeout(() => scrollToId(id), 80);
    }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img
            src="/images/logo-aconap.png"
            alt="CONAP Soluciones"
            className="nav__brand-logo"
            width="36"
            height="36"
          />
          <span className="nav__brand-text">
            <span className="nav__brand-name">Carlos Prieto</span>
            <span className="nav__brand-sub">CONAP Soluciones</span>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {navLinks.map((l) => {
            if (l.type === 'route') {
              return (
                <Link
                  key={l.id}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={location.pathname === l.to ? 'is-active' : ''}
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => handleAnchor(e, l.id)}>
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            aria-expanded={open}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
