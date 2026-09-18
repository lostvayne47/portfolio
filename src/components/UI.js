import { ArrowUpRight } from "lucide-react";
export function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  description,
  children,
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {(children || description) && (
        <div className="section-aside">{children || <p>{description}</p>}</div>
      )}
    </div>
  );
}
export function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export function ArrowLink({ href, children }) {
  return (
    <ExternalLink href={href} className="text-link">
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </ExternalLink>
  );
}
