import { Award, GraduationCap, ArrowUpRight } from "lucide-react";
import certificates from "../data/certificates.json";
import experience from "../data/experience.json";
import site from "../data/site.json";
import { profile } from "../data/profile";
import { SectionHeading, ExternalLink } from "./UI";
function Credential({ item }) {
  return (
    <article className="credential">
      <Award size={22} />
      <div>
        <h4>{item.name}</h4>
        <span>{item.caption}</span>
      </div>
      <ExternalLink
        href={item.image}
        aria-label={"View " + item.name + " certificate"}
      >
        <ArrowUpRight size={20} />
      </ExternalLink>
      {item.link && (
        <ExternalLink className="verify-link" href={item.link}>
          Verify
        </ExternalLink>
      )}
    </article>
  );
}
export default function About() {
  const education = experience.filter((e) => e.type === "education");
  const featuredEducation = education.filter((e) => e.featured);
  const otherEducation = education.filter((e) => !e.featured);
  const awardCount = certificates.filter(
    (c) => c.awardGroup === site.awards.group,
  ).length;
  return (
    <section className="section container" id="about">
      <SectionHeading {...site.sections.about} />
      <div className="about-grid">
        <div className="about-copy">
          <div className="about-intro">
            <img
              src={profile.portrait}
              alt={profile.name}
              width="88"
              height="88"
              loading="lazy"
            />
            <div>
              <h3>{profile.name}</h3>
              <p>{profile.tagline}</p>
            </div>
          </div>
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="personal-note">{profile.personalNote}</p>
          {featuredEducation.map((e) => (
            <div className="education" key={e.id}>
              <GraduationCap size={26} />
              <div>
                <p className="eyebrow">Education</p>
                <h4>{e.designation}</h4>
                <p>{e.location}</p>
                <span>{e.date}</span>
                {e.points.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
          {otherEducation.length > 0 && (
            <details className="school-details">
              <summary>Earlier education</summary>
              {otherEducation.map((e) => (
                <div key={e.id}>
                  <h4>{e.designation}</h4>
                  <p>
                    {e.location} · {e.date}
                  </p>
                  {e.points.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ))}
            </details>
          )}
        </div>
        <div id="certifications" className="credentials">
          <p className="eyebrow">Certifications & recognition</p>
          {certificates
            .filter((c) => c.featured)
            .map((c) => (
              <Credential key={c.id} item={c} />
            ))}
          {awardCount > 0 && (
            <div className="award-note">
              <span className="award-count">{awardCount}×</span>
              <div>
                <strong>{site.awards.title}</strong>
                <p>{site.awards.caption}</p>
              </div>
            </div>
          )}
          <details>
            <summary>
              All credentials & awards{" "}
              <span>{certificates.length} total +</span>
            </summary>
            {certificates
              .filter((c) => !c.featured)
              .map((c) => (
                <Credential key={c.id} item={c} />
              ))}
          </details>
        </div>
      </div>
    </section>
  );
}
