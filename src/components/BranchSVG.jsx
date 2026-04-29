/* Rama decorativa lineal/geométrica — usada como elemento de fondo. */
export default function BranchSVG({ variant = 'hero-tr', className = '' }) {
  const cls = `branch-bg branch-bg--${variant} ${className}`.trim();
  return (
    <svg className={cls} viewBox="0 0 400 400" aria-hidden="true">
      {/* Tronco principal */}
      <path d="M 80 380 Q 130 280 180 220 T 280 100" strokeWidth="1.5" />

      {/* Ramas secundarias derivadas del tronco */}
      <path d="M 165 240 Q 200 220 240 230" strokeWidth="1" />
      <path d="M 200 180 Q 240 160 290 175" strokeWidth="1" />
      <path d="M 240 130 Q 280 110 330 125" strokeWidth="1" />
      <path d="M 130 300 Q 90 310 60 290" strokeWidth="1" />
      <path d="M 175 220 Q 150 195 110 200" strokeWidth="1" />

      {/* Hojas como elipses geométricas */}
      <ellipse cx="240" cy="226" rx="6" ry="2.5" transform="rotate(15 240 226)" />
      <ellipse cx="290" cy="172" rx="6" ry="2.5" transform="rotate(-10 290 172)" />
      <ellipse cx="330" cy="122" rx="6" ry="2.5" transform="rotate(20 330 122)" />
      <ellipse cx="60"  cy="288" rx="6" ry="2.5" transform="rotate(-30 60 288)" />
      <ellipse cx="110" cy="200" rx="6" ry="2.5" transform="rotate(25 110 200)" />
      <ellipse cx="280" cy="100" rx="7" ry="3" transform="rotate(-15 280 100)" />

      {/* Puntos de unión */}
      <circle cx="180" cy="220" r="2.5" />
      <circle cx="240" cy="130" r="2.5" />
      <circle cx="200" cy="180" r="2.5" />
    </svg>
  );
}
