import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Database,
  Cloud,
  Radio,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "../data/profile";
import site from "../data/site.json";
import experience from "../data/experience.json";
import { ExternalLink } from "./UI";
const icons = {
  radio: Radio,
  braces: Braces,
  database: Database,
  cloud: Cloud,
  cpu: Cpu,
};
function SystemDiagram() {
  return (
    <div className="system-card">
      <div className="system-top">
        <span>
          <span className="status-dot" />
          {site.diagram.title}
        </span>
        <span>01 / {String(site.diagram.steps.length).padStart(2, "0")}</span>
      </div>
      <div className="system-body">
        {site.diagram.steps.map((step) => {
          const Icon = icons[step.icon] || Braces;
          return (
            <div
              className={`system-row ${step.core ? "core" : ""} ${step.compact ? "compact" : ""}`}
              key={step.id}
            >
              <span className="system-icon">
                <Icon />
              </span>
              <div>
                <span className="system-label">{step.label}</span>
                <strong>{step.title}</strong>
                <small>{step.detail}</small>
              </div>
              {step.core ? (
                <span className="core-tag">CORE</span>
              ) : (
                <span className="node-dot" />
              )}
            </div>
          );
        })}
      </div>
      <div className="system-foot">
        <span className="code-symbol" aria-hidden="true">
          ↳
        </span>
        {site.diagram.footer}
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}
export default function Home() {
  const currentRole = experience.find((e) => e.type === "work" && e.current);
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            {site.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {site.hero.headline.map((line) => (
              <span className="headline-line" key={line}>
                {line}
              </span>
            ))}
            <span className="headline-accent">{site.hero.highlight}</span>
          </h1>
          <p className="hero-intro">
            I’m {profile.shortName}. {site.hero.intro}{" "}
            <strong>{site.hero.coreStack}</strong> — {site.hero.description}
          </p>
          <p className="hero-sub">{site.hero.supportingText}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              {site.hero.projectCta}
              <ArrowRight size={20} />
            </a>
            <ExternalLink className="button secondary" href={profile.resume}>
              {site.hero.resumeCta}
              <ArrowUpRight size={20} />
            </ExternalLink>
          </div>
          <div className="hero-social">
            {currentRole && (
              <span>
                Currently building at <strong>{currentRole.company}</strong>
              </span>
            )}
            <span className="social-divider" />
            <ExternalLink href={profile.github} aria-label="GitHub profile">
              <Github size={21} />
            </ExternalLink>
            <ExternalLink href={profile.linkedin} aria-label="LinkedIn profile">
              <Linkedin size={21} />
            </ExternalLink>
          </div>
        </div>
        <SystemDiagram />
      </div>
      <div className="impact-strip">
        <div className="impact-label">
          <span className="eyebrow">Production impact</span>
          <span>{site.impact.source}</span>
        </div>
        {site.impact.items.map((item) => (
          <div key={item.label}>
            <strong>
              {item.value}
              <span>{item.suffix}</span>
            </strong>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
