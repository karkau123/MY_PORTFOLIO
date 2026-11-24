import { useState } from "react";
import { profile, projects } from "../portfolio";

const filters = ["All", "AI", "Backend", "Developer tools"];

function HandoffPreview() {
  return (
    <div className="handoff-preview" aria-hidden="true">
      <div className="handoff-window">
        <div className="handoff-top">
          <span className="window-dots"><i /><i /><i /></span>
          <span>Context Relay</span>
        </div>
        <div className="handoff-body">
          <span className="handoff-source">Source conversation</span>
          <div className="handoff-transfer"><span>ChatGPT</span><b>→</b><span>Claude</span></div>
          <div className="handoff-packet">
            <p>Handoff packet</p>
            <span>✓ Decisions</span><span>✓ Open tasks</span>
            <span>✓ Constraints</span><span>✓ Artifacts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = filter === "All" ? projects : projects.filter(({ category }) => category.includes(filter));

  return (
    <section className="section shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2 id="projects-title">Selected projects</h2>
        </div>
        <a className="text-link" href={profile.github}>More on GitHub <span aria-hidden="true">↗</span></a>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((option) => (
          <button type="button" key={option} aria-pressed={filter === option} onClick={() => setFilter(option)}>
            {option}
          </button>
        ))}
      </div>
      <span className="sr-only" role="status">{visibleProjects.length} projects shown</span>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.id} className={project.id === "context-relay" ? "project-card project-feature" : "project-card"}>
            <div className="project-copy">
              <p className="eyebrow">{project.format}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {project.impact && <p className="project-impact">{project.impact}</p>}
              <ul className="tags" aria-label="Technologies">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map(({ label, href }) => (
                    <a className="text-link" href={href} key={href}>{label} <span aria-hidden="true">↗</span></a>
                  ))}
                </div>
              )}
            </div>
            {project.id === "context-relay" && <HandoffPreview />}
          </article>
        ))}
      </div>
    </section>
  );
}
