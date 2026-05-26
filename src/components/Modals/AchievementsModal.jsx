"use client";

import { useEffect } from "react";
import { achievements } from "@/data/achievements";

export default function AchievementsModal({ onClose }) {
  // Lock scroll and handle Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn mono" onClick={onClose}>
          FECHAR [×]
        </button>

        <div className="modal-inner">
          <span className="modal-tag mono">02 / EVOLUÇÃO CONTÍNUA</span>
          <h3 className="modal-title font-editorial">Conquistas</h3>
          <p className="modal-desc">
            Alguns marcos da minha evolução técnica como desenvolvedor de software.
          </p>

          <div className="achievements-list">
            {achievements.map((achievement) => (
              <div className="achievement-item-card" key={achievement.id}>
                <div className="achievement-item-header">
                  <span className="achievement-category-tag mono">{achievement.type}</span>
                  <span className="achievement-date mono">{achievement.date}</span>
                </div>
                
                <div className="achievement-item-body">
                  <h4 className="achievement-item-title font-editorial">{achievement.title}</h4>
                  <span className="achievement-platform mono">{achievement.platform}</span>
                  <p className="achievement-item-desc">{achievement.description}</p>
                </div>

                <div className="achievement-item-footer">
                  {achievement.link ? (
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="achievement-btn mono"
                    >
                      VER CERTIFICADO —&gt;
                    </a>
                  ) : (
                    <span className="achievement-btn-disabled mono">
                      [ EM BREVE ]
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
