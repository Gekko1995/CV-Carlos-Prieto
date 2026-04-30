import { useEffect } from 'react';

export default function DownloadModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  function triggerPrint(mode) {
    const root = document.documentElement;
    const originalTheme = root.dataset.theme;
    root.dataset.printMode = mode;
    if (mode === 'digital') root.dataset.theme = 'dark';
    else root.dataset.theme = 'light';

    onClose();

    setTimeout(() => {
      window.print();
      setTimeout(() => {
        root.dataset.theme = originalTheme;
        delete root.dataset.printMode;
      }, 600);
    }, 280);
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal__head">
          <h2 className="modal__title">Descargar Hoja de Vida</h2>
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">
            <CloseIcon />
          </button>
        </header>

        <p className="modal__lead">
          Elige el formato según tu uso. Se abrirá el diálogo de impresión de tu navegador
          donde podrás escoger <strong>Guardar como PDF</strong>.
        </p>

        <div className="modal__options">
          <button className="modal-option modal-option--digital" onClick={() => triggerPrint('digital')}>
            <div className="modal-option__visual modal-option__visual--digital">
              <span className="modal-option__chip">Fondo azul</span>
            </div>
            <div className="modal-option__body">
              <h3>Versión digital</h3>
              <p>Diseño completo con fondo azul institucional. Ideal para enviar por correo o ver en pantalla.</p>
            </div>
          </button>

          <button className="modal-option modal-option--print" onClick={() => triggerPrint('print')}>
            <div className="modal-option__visual modal-option__visual--print">
              <span className="modal-option__chip">Fondo blanco</span>
            </div>
            <div className="modal-option__body">
              <h3>Versión imprimible</h3>
              <p>Fondo blanco optimizado para impresión en papel. No satura tinta. Hoja carta.</p>
            </div>
          </button>
        </div>

        <p className="modal__hint">
          Tip: en el diálogo de impresión activa <strong>"Gráficos de fondo"</strong> para que
          el color del fondo se conserve. Tamaño de papel: <strong>Carta</strong> (Letter).
        </p>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
