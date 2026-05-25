import { portfolioConfig } from '../config';

export function Skills() {
  const categories = Object.entries(portfolioConfig.skillCategories);

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Habilidades técnicas</span>
          <h2>Skills & Ferramentas</h2>
          <p>
            Tecnologias que utilizo no dia a dia para construir soluções
            robustas e escaláveis.
          </p>
        </div>

        <div className="skills__grid">
          {categories.map(([category, skills]) => (
            <div className="skills__category" key={category}>
              <h4 className="skills__category-title">{category}</h4>
              <ul className="skills__list">
                {skills.map((skill) => (
                  <li className="skills__item" key={skill}>
                    <span className="skills__item-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
