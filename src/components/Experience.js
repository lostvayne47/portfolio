import experience from "../data/experience.json";
import site from "../data/site.json";
import { SectionHeading, Tags } from "./UI";
export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container section">
        <SectionHeading {...site.sections.experience} />
        <div className="timeline">
          {experience
            .filter((e) => e.type === "work")
            .map((e) => (
              <article className="experience-item" key={e.id}>
                <div className="experience-meta">
                  <span className="timeline-dot" />
                  <p className="eyebrow">{e.date}</p>
                  <h3>{e.company}</h3>
                  <span>{e.location}</span>
                  {e.current && (
                    <span className="current-label">Current role</span>
                  )}
                </div>
                <div className="experience-body">
                  <h3>{e.designation}</h3>
                  <ul>
                    {e.points.slice(0, e.previewCount).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {e.points.length > e.previewCount && (
                    <details>
                      <summary>
                        More about this role <span>+</span>
                      </summary>
                      <ul>
                        {e.points.slice(e.previewCount).map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                  {e.stack?.length > 0 && <Tags items={e.stack} />}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
