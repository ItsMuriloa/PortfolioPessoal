import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

type HeaderProps = {
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

const navLinks = [
  { id: 'inicio', label: 'Home' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'craft', label: 'Craft' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contato', label: 'Contato' },
];

export function Header({ activeSection, theme, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__brand">muriloa.</a>

        <button
          type="button"
          className="header__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
