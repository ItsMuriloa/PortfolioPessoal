"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

export default function LinksModal({ onClose, returnFocusTo }) {
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
        aria-labelledby="links-modal-title"
        aria-describedby="links-modal-desc"
      >
        <button ref={closeButtonRef} className="modal-close-btn mono" onClick={onClose}>
          FECHAR [X]
        </button>

        <div className="modal-inner">
          <span className="modal-tag mono">03 / ECOSSISTEMA DIGITAL</span>
          <h3 id="links-modal-title" className="modal-title font-editorial">Meus Links</h3>
          <p id="links-modal-desc" className="modal-desc">
            Me encontre pela web e acompanhe meus projetos.
          </p>

          <div className="links-tree">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="links-tree-item">
              <div className="links-item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="links-item-text">
                <span className="links-item-title font-editorial">GitHub</span>
                <span className="links-item-desc">Projetos, estudos e códigos.</span>
              </div>
              <span className="links-item-arrow">-&gt;</span>
            </a>

            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="links-tree-item">
              <div className="links-item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="links-item-text">
                <span className="links-item-title font-editorial">LinkedIn</span>
                <span className="links-item-desc">Perfil profissional e conexoes.</span>
              </div>
              <span className="links-item-arrow">-&gt;</span>
            </a>

            <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="links-tree-item">
              <div className="links-item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="links-item-text">
                <span className="links-item-title font-editorial">Instagram / Async Studio</span>
                <span className="links-item-desc">Conteúdos, identidade e projetos digitais.</span>
              </div>
              <span className="links-item-arrow">-&gt;</span>
            </a>

            <a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noopener noreferrer" className="links-tree-item">
              <div className="links-item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="links-item-text">
                <span className="links-item-title font-editorial">WhatsApp</span>
                <span className="links-item-desc">Contato rapido para conversas e oportunidades.</span>
              </div>
              <span className="links-item-arrow">-&gt;</span>
            </a>

            <a href={`mailto:${profile.email}`} className="links-tree-item">
              <div className="links-item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="links-item-text">
                <span className="links-item-title font-editorial">E-mail</span>
                <span className="links-item-desc">Envie uma mensagem diretamente.</span>
              </div>
              <span className="links-item-arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
