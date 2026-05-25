import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { portfolioConfig } from '../config';

export function Contact() {
  const mailHref = `mailto:${portfolioConfig.email}?subject=${encodeURIComponent(
    portfolioConfig.contactSubject
  )}&body=${encodeURIComponent(portfolioConfig.contactBody)}`;

  return (
    <section className="section container contact" id="contato">
      <div className="section-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
        <span className="section-label">// Vamos conversar</span>
        <h2>Bora construir algo juntos?</h2>
        <p className="contact__subtitle">
          Quer discutir uma oportunidade, propor um desafio de engenharia ou
          marcar uma conversa? Escolha o canal que preferir.
        </p>
      </div>

      <div className="contact__links">
        <a href={mailHref} className="contact__link">
          <Mail size={18} />
          {portfolioConfig.email}
        </a>
        <a
          href={portfolioConfig.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href={portfolioConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>

      <div className="contact__resume">
        <a href="/curriculo-murilo-alves.pdf" target="_blank" rel="noreferrer">
          <Download size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Baixar Currículo (PDF)
        </a>
      </div>
    </section>
  );
}
