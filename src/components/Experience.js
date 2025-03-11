import React, { useContext } from "react";
import { Briefcase, Star, School, GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import portfolioContext from "../context/Context.js";
import experienceData from "./experience.json";
import DOMPurify from "dompurify";

export default function Experience() {
  const { theme } = useContext(portfolioContext);

  const dateClassName = "text-" + (theme === "dark" ? "light" : "dark");

  const Iconpack = {
    Briefcase: <Briefcase />,
    School: <School />,
    GraduationCap: <GraduationCap />,
  };
  return (
    <div
      className="container scroll-container"
      style={{ maxHeight: "100%", overflowY: "auto", padding: "10px" }}
    >
      <h1 className=" text-center">Experience & Education</h1>
      <VerticalTimeline lineColor={theme === "dark" ? "white" : "black"}>
        {experienceData.map((e) => {
          return (
            <VerticalTimelineElement
              key={e.id}
              className={"vertical-timeline-element--" + e.type}
              contentStyle={{ background: e.CardColours, color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid " + e.CardColours }}
              date={e.date}
              dateClassName={dateClassName}
              iconStyle={{ background: e.CardColours, color: "#fff" }}
              icon={Iconpack[e.icon]}
              intersectionObserverProps={{
                rootMargin: "0px 0px -40px 0px",
                triggerOnce: false,
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {e.designation}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {e.location}
              </h5>
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(e.details),
                }}
              />
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Star />}
          intersectionObserverProps={{
            rootMargin: "0px 0px -40px 0px",
            triggerOnce: false,
          }}
        />
      </VerticalTimeline>
    </div>
  );
}
