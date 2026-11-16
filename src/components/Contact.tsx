import { profile } from '../data/profile';

export function Contact() {
  return (
    <section id="contacto" className="section contact">
      <h2>Contacto</h2>
      <p>Estoy abierto a oportunidades como desarrollador backend o full stack. Escribeme:</p>
      <ul className="contact-list">
        <li>
          <span className="muted">Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className="muted">GitHub</span>
          <a href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noreferrer">github.com/{profile.githubUser}</a>
        </li>
        <li>
          <span className="muted">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.replace('https://', '')}</a>
        </li>
      </ul>
    </section>
  );
}
