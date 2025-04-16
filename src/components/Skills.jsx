import React from "react";
import SkillBar from "./SkillBar"; // adjust path as needed
import "/src/portfolio.css";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <SkillBar name="Core Java" level={80} />
            <SkillBar name="Spring Boot" level={80} />
            <SkillBar name="Micro Services" level={85} />
            <SkillBar name="HTML/CSS" level={90} />
            <SkillBar name="React" level={75} />
            <SkillBar name="Angular" level={70} />
            <SkillBar name="MySQL" level={80} />
            <SkillBar name="MongoDB" level={70} />
            <SkillBar name="Git" level={85} />
            <SkillBar name="AWS" level={75} />
            <SkillBar name="Jenkins" level={70} />
          </div>

          <div className="professional-skills">
            <h3>Professional Skills</h3>
            <div className="pro-skills-grid">
              {[
                "Problem Solving",
                "Teamwork",
                "Communication",
                "Creativity",
                "Time Management",
                "Adaptability",
                "Leadership",
                "Attention to Detail",
              ].map((skill) => (
                <div key={skill} className="pro-skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
