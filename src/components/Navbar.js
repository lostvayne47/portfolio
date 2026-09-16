import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import site from "../data/site.json";
import { ExternalLink } from "./UI";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((el) => observer.observe(el));
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", close);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            {profile.initials}
            <span>.</span>
          </span>
          <span>
            {profile.name}
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {site.navigation.map(({ id, label }) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <ExternalLink className="nav-resume" href={profile.resume}>
            Resume <ArrowUpRight size={15} />
          </ExternalLink>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
