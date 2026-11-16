import { skills } from '../data/profile';

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.group} className="skill-group">
            <h3>{group.group}</h3>
            <ul className="stack">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
