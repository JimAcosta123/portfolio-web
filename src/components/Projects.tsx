import { useState } from 'react';
import { projects, type Project } from '../data/projects';

const FILTERS = ['Todos', 'Full stack', 'Backend', 'Frontend'] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project-head">
        <h3>{project.name}</h3>
        <span className="badge">{project.category}</span>
      </div>
      <p>{project.summary}</p>
      <ul className="highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <ul className="stack" aria-label="Tecnologias">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
        Ver codigo en GitHub
      </a>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const visible = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="section">
      <div className="section-head">
        <h2>Proyectos</h2>
        <div className="filters" role="tablist" aria-label="Filtrar proyectos">
          {FILTERS.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {visible.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
