import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { profile } from './data/profile';

type Theme = 'light' | 'dark';
const THEME_KEY = 'portfolio.theme';

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* localStorage no disponible */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignorar */
    }
  }, [theme]);

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main className="container">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <span>{new Date().getFullYear()} - {profile.name}</span>
        <span className="muted">Hecho con React + TypeScript, desplegado en GitHub Pages</span>
      </footer>
    </>
  );
}
