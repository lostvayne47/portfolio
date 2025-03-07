import React from "react";
import SkillCard from "./SkillCard";
import SkillsData from "./skills.json";
export default function Skills() {
  const skillCategories = [
    "Frontend",
    "Backend",
    "Framework",
    "Database",
    "Cloud & DevOps",
  ];
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ height: "100%" }}
    >
      <div
        className="container scroll-container"
        style={{ maxHeight: "100%", overflowY: "auto", padding: "15px" }}
      >
        {skillCategories.map((category) => {
          const filteredSkills = SkillsData.filter(
            (skill) => skill.type === category
          );
          return (
            <div
              key={category}
              className="mb-4 p-3"
              style={{ borderBottom: "3px solid var(--border)" }}
            >
              <h4 className="text-center mb-3">{category}</h4>
              <div
                className="d-flex justify-content-evenly gap-3 flex-wrap "
                style={{ width: "100%" }}
              >
                {filteredSkills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    title={skill.name}
                    imgPath={skill.src}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
