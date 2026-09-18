import {
  Braces,
  GitBranch,
  Radio,
  ShieldCheck,
  FileCode2,
  Server,
  ArrowRight,
} from "lucide-react";
export default function ProjectVisual({ kind }) {
  return (
    <div className={"project-visual visual-" + kind} aria-hidden="true">
      <div className="visual-caption">
        <span className="tiny-dot" />{" "}
        {kind === "graph"
          ? "DEPENDENCY EXPLORER"
          : kind === "network"
            ? "CONNECTED SYSTEMS"
            : kind === "dashboard"
              ? "HOUSEHOLD / OVERVIEW"
              : "WARRANTY / WORKSPACE"}
        <span>↗</span>
      </div>
      {kind === "graph" ? (
        <div className="graph-canvas">
          <svg viewBox="0 0 500 190" preserveAspectRatio="none">
            <path d="M90 90H195V40H340M195 90H340M195 90V150H340" />
          </svg>
          <div className="graph-node graph-root">
            <FileCode2 size={16} /> app.tsx
          </div>
          <div className="graph-node graph-a">
            <Braces size={15} /> components
          </div>
          <div className="graph-node graph-b">
            <GitBranch size={15} /> services
          </div>
          <div className="graph-node graph-c">
            <Braces size={15} /> utilities
          </div>
          <span className="graph-legend">○ Imports & module relationships</span>
        </div>
      ) : kind === "network" ? (
        <div className="network-canvas">
          <div className="network-orbit orbit-one" />
          <div className="network-orbit orbit-two" />
          <div className="network-node">
            <Radio size={23} />
            <span>NIAGARA</span>
          </div>
          <span className="network-connector" />
          <div className="network-node mcp-node">
            <Server size={23} />
            <span>MCP</span>
          </div>
          <span className="network-note">
            Device context → Tool integration
          </span>
        </div>
      ) : kind === "dashboard" ? (
        <div className="dashboard-mock">
          <div className="mock-sidebar">
            <span>f.</span>
            <i />
            <i />
            <i />
          </div>
          <div className="mock-content">
            <div className="mock-heading">
              Monthly overview <span>Expenses ↗</span>
            </div>
            <div className="mock-chart">
              {[36, 58, 44, 79, 53, 95, 68, 83, 61, 100, 73, 88].map((v, i) => (
                <i key={i} style={{ height: v + "%" }} />
              ))}
            </div>
            <div className="mock-axis">
              <span>MONTHLY SPENDING</span>
              <span>BY HOUSEHOLD MEMBER</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="warranty-mock">
          <div className="warranty-shield">
            <ShieldCheck size={38} />
          </div>
          <div>
            <span className="system-label">YOUR PRODUCTS, ORGANIZED</span>
            <strong>
              Every warranty.
              <br />
              One place.
            </strong>
            <span className="warranty-line">
              Products <ArrowRight size={12} /> Reports <ArrowRight size={12} />{" "}
              Email
            </span>
          </div>
        </div>
      )}
      <span className="visual-footnote">CONCEPTUAL PROJECT VISUAL</span>
    </div>
  );
}
