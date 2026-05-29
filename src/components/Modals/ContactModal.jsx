"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

export default function ContactModal({ onClose, returnFocusTo }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      returnFocusTo?.focus?.();
    };
  }, [onClose, returnFocusTo]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-wrapper"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-desc"
      >
        <button ref={closeButtonRef} className="modal-close-btn mono" onClick={onClose}>
          FECHAR [X]
        </button>

        <div className="modal-inner">
          <span className="modal-tag mono">01 / CANAL DIRETO</span>
          <h3 id="contact-modal-title" className="modal-title font-editorial">Vamos conversar?</h3>
          <p id="contact-modal-desc" className="modal-desc">
            Escolha a melhor forma de contato para falarmos sobre projetos, ideias ou oportunidades.
          </p>

          <div className="contact-options-grid">
            <div className="contact-option-card">
              <div className="contact-option-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h4 className="contact-option-title font-editorial">Marcar reuniao</h4>
              <p className="contact-option-desc">
                Agende um horario para conversarmos com calma sobre sua ideia ou projeto.
              </p>
              <a href={profile.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-btn">
                Marcar reuniao
              </a>
            </div>

            <div className="contact-option-card">
              <div className="contact-option-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h4 className="contact-option-title font-editorial">Enviar e-mail</h4>
              <p className="contact-option-desc">
                Prefere explicar sua ideia por escrito? Me envie uma mensagem por e-mail.
              </p>
              <a href={`mailto:${profile.email}`} className="btn btn-secondary contact-btn" style={{ width: "100%" }}>
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="contact-whatsapp-footer">
            <span className="mono">Ou se preferir mensagem rapida:</span>
            <a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-link mono">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "6px" }} aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
