import { profile } from '../data/profile';

export function About() {
  return (
    <section id="sobre-mi" className="section about">
      <h2>Sobre mi</h2>
      {profile.bio.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p className="muted">{profile.location}</p>
    </section>
  );
}
