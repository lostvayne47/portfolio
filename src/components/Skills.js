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
      className="container d-flex flex-column justify-content-center my-5"
      style={{ height: "100%" }}
    >
      <h1 className="text-center">Skills</h1>
      <div
        className="container scroll-container"
        style={{ maxHeight: "85%", overflowY: "auto", padding: "15px" }}
      >
        {skillCategories.map((category) => {
          const filteredSkills = SkillsData.filter(
            (skill) => skill.type === category
          );
          return (
            <div key={category} className="mb-4">
              <h3 className="text-center">{category}</h3>
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
