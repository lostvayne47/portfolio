import React, { useContext } from "react";
import { Briefcase, Star } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import portfolioContext from "../context/Context.js";

export default function Experience() {
  const { theme } = useContext(portfolioContext);

  const dateClassName = "text-" + (theme === "dark" ? "light" : "dark");
  return (
    <div
      className="container scroll-container"
      style={{ maxHeight: "100%", overflowY: "auto", padding: "10px" }}
    >
      <h1 className=" text-center">Experience</h1>
      <VerticalTimeline lineColor={theme === "dark" ? "white" : "black"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(243, 33, 44)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(243, 33, 44)" }}
          date="Jul 2023 - Aug 2024"
          dateClassName={dateClassName}
          iconStyle={{ background: "rgb(243, 33, 44)", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer 1
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Honeywell,Pune</h4>
          <br />
          <ul>
            <li>
              Developed <b>custom modules</b> within the{" "}
              <b>Tridium Niagara framework</b> using <b>Java</b> and{" "}
              <b>JavaScript</b>, improving <b>automation efficiency by 20%</b>.
            </li>
            <li>
              Designed and implemented <b>front-end dashboards</b> and{" "}
              <b>widgets</b> for the <b>Honeywell Inncom Direct system</b> using{" "}
              <b>React.js</b>, enhancing <b>user experience</b> and reducing{" "}
              <b>load times</b>.
            </li>
            <li>
              Collaborated with <b>UI/UX designers</b> using <b>Figma</b> to
              optimize <b>interface design</b>, resulting in improved{" "}
              <b>customer satisfaction</b>.
            </li>
            <li>
              Developed and integrated <b>APIs</b> in <b>ASP.NET Core</b> for{" "}
              <b>backend communication</b>, improving{" "}
              <b>data exchange speed by 37%</b> and reducing <b>latency</b>.
            </li>
            <li>
              Utilized <b>DevExpress</b> to generate <b>dynamic reports</b> in{" "}
              <b>.NET</b>, improving <b>reporting functionality</b> and
              streamlining <b>data presentation</b>.
            </li>
            <li>
              Led <b>integration of hardware devices</b> with{" "}
              <b>cloud services</b>, ensuring seamless{" "}
              <b>system functionality</b>.
            </li>
            <li>
              Optimized <b>application performance</b>, reducing{" "}
              <b>system lag by 25%</b> through efficient{" "}
              <b>memory management</b> and <b>code refactoring</b>.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jul 2023 - Aug 2024"
          dateClassName={dateClassName}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Process Instrumentation Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ThyssenKrupp Industrial Solution,Pune
          </h4>
          <br />
          <ul>
            <li>
              Involved in a large-scale <b>brownfield PSU EPCM project</b> for
              the <b>Government of India</b> under the guidance of the{" "}
              <b>Chief Engineer</b>.
            </li>
            <li>
              Developed and maintained the <b>instrument index</b> and{" "}
              <b>wiring diagrams</b>.
            </li>
            <li>
              Prepared <b>functional loop schematics</b> and{" "}
              <b>technical specification sheets</b> for <b>control valves</b>{" "}
              and other instrumentation in <b>Smart Plant Instrumentation</b>.
            </li>
            <li>
              Managed <b>purchase orders</b> and coordinated with vendors for
              timely procurement.
            </li>
            <li>
              Prepared detailed <b>Instrument Hookups</b> and corresponding{" "}
              <b>bills of material</b> for project-wide procurement.
            </li>
            <li>
              Validated and prepared <b>IO counts</b> for{" "}
              <b>DCS, ESD, and FGS systems</b> using <b>P&ID diagrams</b>.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(250, 126, 54)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(250, 126, 54)" }}
          date="Apr 2021 - Jul 2021"
          dateClassName={dateClassName}
          iconStyle={{ background: "rgb(250, 126, 54)", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">Technical Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Quarkonics Applied Research Corporation, Remote
          </h4>
          <br />
          <ul>
            <li>
              Assisted in <b>software development</b> using <b>Java</b> for
              backend and the{" "}
              <b>MERN stack (MongoDB, Express.js, React.js, Node.js)</b> for
              frontend.
            </li>
            <li>
              Contributed to an <b>in-house project</b>, optimizing{" "}
              <b>frontend performance</b> and reducing <b>load times by 15%</b>.
            </li>
            <li>
              <b>Debugged and optimized code</b>, improving{" "}
              <b>system stability and scalability</b>.
            </li>
            <li>
              Gained hands-on experience with <b>RESTful APIs</b>,{" "}
              <b>database management</b>, and <b>state management</b>, enhancing
              software functionality.
            </li>
            <li>
              <b>Refactored existing codebase</b>, reducing{" "}
              <b>technical debt by 30%</b> and improving maintainability.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </div>
  );
}
