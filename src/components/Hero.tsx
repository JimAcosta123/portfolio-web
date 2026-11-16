import { profile } from '../data/profile';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <p className="eyebrow">Hola, soy</p>
      <h1>{profile.name}</h1>
      <h2>{profile.role}</h2>
      <p className="lead">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
        <a className="btn" href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer">GitHub</a>
        {profile.cvUrl && (
          <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer">Descargar CV</a>
        )}
      </div>
    </section>
  );
}
