"use client";

import { useEffect, useRef } from "react";
import { certificates } from "@/data/certificates";
import { skills } from "@/data/skills";

export default function CertificatesSkillsModal({ onClose, returnFocusTo }) {
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
        className="modal-wrapper modal-wrapper-wide"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificates-skills-title"
        aria-describedby="certificates-skills-desc"
      >
        <button ref={closeButtonRef} className="modal-close-btn mono" onClick={onClose}>
          Fechar
        </button>

        <div className="modal-inner">
          <span className="modal-tag mono">02 / CERTIFICADOS E SKILLS</span>
          <h3 id="certificates-skills-title" className="modal-title font-editorial">Stack técnica</h3>
          <p id="certificates-skills-desc" className="modal-desc">
            Habilidades, tecnologias e estudos organizados para facilitar a manutenção do portfólio.
          </p>

          <div className="skills-detail-grid">
            {skills.map((skill) => (
              <article className="skill-detail-card" key={skill.id}>
                <div className="skill-detail-header">
                  <span className="achievement-category-tag mono">{skill.category}</span>
                  <span className="achievement-date mono">{skill.level}</span>
                </div>
                <h4 className="achievement-item-title font-editorial">{skill.name}</h4>
                <p className="achievement-item-desc">{skill.description}</p>
              </article>
            ))}
          </div>

          <div className="certificates-block">
            <span className="modal-tag mono">CERTIFICADOS / MARCOS</span>
            <div className="certificates-list">
              {certificates.map((certificate) => (
                <article className="achievement-item-card" key={certificate.id}>
                  <div className="achievement-item-header">
                    <span className="achievement-category-tag mono">{certificate.type}</span>
                    <span className="achievement-date mono">{certificate.date}</span>
                  </div>

                  <div className="achievement-item-body">
                    <h4 className="achievement-item-title font-editorial">{certificate.title}</h4>
                    <span className="achievement-platform mono">{certificate.issuer}</span>
                    <p className="achievement-item-desc">{certificate.description}</p>
                    {certificate.credentialCode && (
                      <span className="achievement-platform mono">
                        Credencial: {certificate.credentialCode}
                      </span>
                    )}
                    {certificate.competencies?.length > 0 && (
                      <span className="achievement-platform mono">
                        Competências: {certificate.competencies.join(", ")}
                      </span>
                    )}
                  </div>

                  <div className="achievement-item-footer">
                    {certificate.link ? (
                      <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="achievement-btn mono">
                        Ver referência -&gt;
                      </a>
                    ) : (
                      <span className="achievement-btn-disabled mono">[ {certificate.status} ]</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
