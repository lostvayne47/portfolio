import { ArrowUpRight, ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import site from "../data/site.json";
import { ExternalLink } from "./UI";
export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">{site.contact.eyebrow}</p>
            <h2>
              {site.contact.headline}
              <br />
              <span>{site.contact.highlight}</span>
            </h2>
            <p>{site.contact.description}</p>
          </div>
          <a
            className="contact-arrow"
            href={"mailto:" + profile.email}
            aria-label={"Email " + profile.shortName}
          >
            <ArrowUpRight size={45} />
          </a>
          <div className="contact-bottom">
            <a className="email-link" href={"mailto:" + profile.email}>
              {profile.email}
              <ArrowUpRight size={19} />
            </a>
            <div className="contact-links">
              <ExternalLink href={profile.github}>
                <Github size={17} />
                GitHub
              </ExternalLink>
              <ExternalLink href={profile.linkedin}>
                <Linkedin size={17} />
                LinkedIn
              </ExternalLink>
              <ExternalLink href={profile.leetcode}>
                LeetCode <ArrowUpRight size={15} />
              </ExternalLink>
              <a href={"tel:" + profile.phone.replace(/[^+\d]/g, "")}>
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="container site-footer">
        <a
          className="brand-mark"
          href="#top"
          aria-label={profile.initials + ". Back to top"}
        >
          {profile.initials}
          <span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{site.footer}</span>
        <a href="#top">
          Back to top <ArrowUp size={15} />
        </a>
      </footer>
    </>
  );
}
