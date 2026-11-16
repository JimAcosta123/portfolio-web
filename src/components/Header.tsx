import { profile } from '../data/profile';

interface Props {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="header">
      <a href="#inicio" className="logo">{profile.name.split(' ')[0]} <span>Acosta</span></a>
      <nav className="nav" aria-label="Secciones">
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}>
        {theme === 'dark' ? 'Claro' : 'Oscuro'}
      </button>
    </header>
  );
}
