import {
  Server,
  Code2,
  Database,
  Cloud,
  Network,
  Terminal,
} from "lucide-react";
import site from "../data/site.json";
import { skillGroups } from "../data/profile";
import { SectionHeading } from "./UI";
const icons = {
  server: Server,
  code: Code2,
  database: Database,
  cloud: Cloud,
  network: Network,
  terminal: Terminal,
};
export default function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionHeading {...site.sections.skills} />
      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <article className="skill-group" key={group.title}>
              <div className="skill-top">
                <Icon size={23} />
                <span>0{i + 1}</span>
              </div>
              <p className="eyebrow">{group.note}</p>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <div className="iot-callout">
        <Network size={32} />
        <div>
          <h3>{site.iot.title}</h3>
          <p>{site.iot.description}</p>
        </div>
        <a href="#experience" aria-label="See industrial software experience">
          <Arrow />
        </a>
      </div>
    </section>
  );
}
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
