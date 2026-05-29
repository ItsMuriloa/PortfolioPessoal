"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

const AUTOPLAY_DELAY = 5000;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeProject = projects[activeIndex];
  const hasProjectLink = Boolean(activeProject.projectLink);
  const hasCodeLink = Boolean(activeProject.codeLink);
  const hasImageMedia = activeProject.mediaType !== "placeholder" && Boolean(activeProject.image);
  const mediaStyle = {
    "--project-media-fit": activeProject.mediaFit || "cover",
    "--project-media-position": activeProject.mediaPosition || "center",
  };
  const statusLabel = `[ ${activeProject.status.toUpperCase()} ]`;

  useEffect(() => {
    if (isPaused || projects.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <section className="projects-section-framer projects-carousel-section section-slide" id="projects">
      <div className="floating-object anim-rotate-slow" style={{ position: "absolute", top: "20%", left: "-10%", width: "320px", opacity: 0.07, pointerEvents: "none" }}>
        <Image src="/assets/chrome/6.png" alt="" width={320} height={320} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>
      <div className="floating-object anim-drift-slow" style={{ position: "absolute", bottom: "12%", right: "-6%", width: "240px", opacity: 0.08, pointerEvents: "none" }}>
        <Image src="/assets/chrome/9.png" alt="" width={240} height={240} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>

      <div className="container projects-carousel-container">
        <div className="section-title-container projects-carousel-title">
          <span className="section-tag">02 / TRABALHOS SELECIONADOS</span>
          <h2 className="section-title font-editorial">Projetos &amp; soluções</h2>
        </div>

        <div
          className="projects-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          aria-roledescription="carousel"
          aria-label="Projetos selecionados"
        >
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={showPrevious}
            aria-label="Projeto anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <article className={`project-card ${activeProject.cardClass}`} aria-live="polite">
            <div className="project-info">
              <div className="project-header">
                <span className="project-number">{activeProject.number}</span>
                <span className="project-status mono">{activeProject.status}</span>
                <h3 className="project-title font-editorial">{activeProject.title}</h3>
                <p className="project-desc">{activeProject.description}</p>
                <div className="project-tags">
                  {activeProject.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {activeProject.isComingSoon ? (
                  <span className="mono project-coming-soon">{statusLabel}</span>
                ) : !hasProjectLink && !hasCodeLink ? (
                  <span className="mono project-coming-soon">{statusLabel}</span>
                ) : (
                  <>
                    {hasProjectLink && (
                      <a href={activeProject.projectLink} target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                        Ver projeto <span className="project-arrow">-&gt;</span>
                      </a>
                    )}
                    {hasCodeLink && (
                      <a href={activeProject.codeLink} target="_blank" rel="noopener noreferrer" className="btn-project-secondary">
                        Ver código
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className={`project-media project-media-${activeProject.mediaType || "image"}`} style={mediaStyle}>
              {hasImageMedia ? (
                <Image
                  className="project-img"
                  src={activeProject.image}
                  alt={`Imagem do projeto ${activeProject.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              ) : (
                <div className={`project-placeholder project-placeholder-${activeProject.placeholderVariant || "default"}`}>
                  <span className="project-placeholder-icon" aria-hidden="true" />
                  <span className="project-placeholder-kicker mono">{activeProject.status}</span>
                  <strong className="project-placeholder-title">{activeProject.placeholderTitle || activeProject.title}</strong>
                  <p className="project-placeholder-text">{activeProject.placeholderText}</p>
                </div>
              )}
              <span className="project-image-hint mono">{activeProject.imageHint}</span>
            </div>
          </article>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={showNext}
            aria-label="Próximo projeto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Selecionar projeto">
          {projects.map((project, index) => (
            <button
              type="button"
              role="tab"
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              key={project.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar projeto ${project.number}`}
              aria-selected={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
