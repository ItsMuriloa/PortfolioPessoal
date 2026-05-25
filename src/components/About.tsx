import { User, Code2, Settings, Layers } from 'lucide-react';
import { portfolioConfig } from '../config';

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={22} />,
  code: <Code2 size={22} />,
  settings: <Settings size={22} />,
  layers: <Layers size={22} />,
};

export function About() {
  return (
    <section className="section container" id="sobre">
      <div className="section-header">
        <span className="section-label">// Sobre mim</span>
        <h2>Conheça minha trajetória</h2>
        <p>
          Entendo que o software moderno exige solidez no backend unida a uma
          infraestrutura robusta. Conheça minha mentalidade e foco.
        </p>
      </div>

      <div className="about__grid">
        {portfolioConfig.aboutCards.map((card) => (
          <article className="about__card" key={card.title}>
            <div className="about__card-icon">
              {iconMap[card.icon]}
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
