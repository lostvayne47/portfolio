import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import site from "../data/site.json";
import { profile } from "../data/profile";
import projects from "../data/projects.json";
import { SectionHeading, Tags, ExternalLink, ArrowLink } from "./UI";
import ProjectVisual from "./ProjectVisual";
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const featured = projects.filter((p) => p.featured);
  const filtered = featured.filter(
    (p) => filter === "all" || p.groups.includes(filter),
  );
  return (
    <section className="section container" id="projects">
      <SectionHeading {...site.sections.projects} />
      <div className="project-toolbar">
        <div className="filter-group" aria-label="Filter featured projects">
          {site.projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
        <ArrowLink href={profile.github}>GitHub profile</ArrowLink>
      </div>
      <div className="project-grid" aria-live="polite">
        {filtered.map((p) => (
          <article className="project-card" key={p.slug}>
            <ProjectVisual kind={p.kind} />
            <div className="project-content">
              <p className="eyebrow">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <p className="project-contribution">{p.contribution}</p>
              <Tags items={p.stack} />
              <div className="project-bottom">
                <span>{p.status}</span>
                <div>
                  <ExternalLink
                    href={p.url}
                    aria-label={"Code for " + p.title + " on GitHub"}
                  >
                    <Github size={17} /> Code
                  </ExternalLink>
                  {p.demo && (
                    <ExternalLink
                      href={p.demo}
                      aria-label={"Open " + p.title + " live demo"}
                    >
                      Live <ArrowUpRight size={17} />
                    </ExternalLink>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <details className="project-archive">
        <summary>
          More projects{" "}
          <span>
            {projects.length - featured.length} projects <ArrowDown size={17} />
          </span>
        </summary>
        <div className="archive-grid">
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <article key={p.slug}>
                <h3>
                  <ArrowLink href={p.url}>{p.title}</ArrowLink>
                </h3>
                <p>{p.description}</p>
                <Tags items={p.stack} />
                {p.demo && <ArrowLink href={p.demo}>Live demo</ArrowLink>}
              </article>
            ))}
        </div>
      </details>
    </section>
  );
}
