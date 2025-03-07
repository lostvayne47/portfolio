import React from "react";
import SkillCard from "./SkillCard";
import SkillsData from "./skills.json";
export default function Skills() {
  return (
    <div
      className="container d-flex flex-column justify-content-center my-5"
      style={{ height: "100%" }}
    >
      <h1 className="text-center">Skills</h1>
      <div
        className="container scroll-container"
        style={{
          maxHeight: "85%",
          overflowY: "auto",
          padding: "15px",
        }}
      >
        <br />
        <h3 className="text-center">Frontend</h3>
        <div className="d-flex justify-content-center gap-3">
          {SkillsData.map((skill) => {
            if (skill.type === "Frontend")
              return (
                <SkillCard
                  key={skill.name}
                  title={skill.name}
                  type={skill.type}
                  imgPath={skill.src}
                />
              );
          })}
        </div>
        <br />
        <h3 className="text-center">Backend</h3>
        <div className="d-flex justify-content-center gap-3">
          {SkillsData.map((skill) => {
            if (skill.type === "Backend")
              return (
                <SkillCard
                  key={skill.name}
                  title={skill.name}
                  type={skill.type}
                  imgPath={skill.src}
                />
              );
          })}
        </div>
        <br />
        <br />
        <h3 className="text-center">Framework</h3>
        <div className="d-flex justify-content-center gap-3">
          {SkillsData.map((skill) => {
            if (skill.type === "Framework")
              return (
                <SkillCard
                  key={skill.name}
                  title={skill.name}
                  type={skill.type}
                  imgPath={skill.src}
                />
              );
          })}
        </div>
        <br />
        <h3 className="text-center">Database</h3>
        <div className="d-flex justify-content-center gap-3">
          {SkillsData.map((skill) => {
            if (skill.type === "Database")
              return (
                <SkillCard
                  key={skill.name}
                  title={skill.name}
                  type={skill.type}
                  imgPath={skill.src}
                />
              );
          })}
        </div>
        <br />
        <h3>Cloud & DevOps</h3>
        <div className="d-flex justify-content-center gap-3">
          {SkillsData.map((skill) => {
            if (skill.type === "Cloud & DevOps")
              return (
                <SkillCard
                  key={skill.name}
                  title={skill.name}
                  type={skill.type}
                  imgPath={skill.src}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}
