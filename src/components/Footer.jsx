import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__sep">·</span>
        <span>{profile.title}</span>
      </div>
    </footer>
  );
}
