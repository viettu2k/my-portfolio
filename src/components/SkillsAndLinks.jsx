import React from "react";
import { Divider, Icon } from "semantic-ui-react";

export default function SkillsAndLinks({ theme }) {
  return (
    <div
      className={
        theme === "light" ? "skills-card-main" : "skills-card-main-dark"
      }
    >
      <div className="skills-section">
        <p className={theme === "light" ? "expertise" : "expertise-dark"}>
          MORE ABOUT ME
        </p>
        <p
          className={
            theme === "light" ? "expertise-content" : "expertise-content-dark"
          }
        >
          I am a student at <b>Duy Tân university</b>, majoring in{" "}
          <b>software engineering.</b> And I am looking for a position that
          matches my skills, to learn and improve my experience.
        </p>
        <p
          className={
            theme === "light" ? "expertise-content" : "expertise-content-dark"
          }
        >
          Building projects to learn how the code works is my hobbies, as well
          socializing with friends and family and computing.
        </p>
        <Divider />
        <p className={theme === "light" ? "expertise" : "expertise-dark"}>
          CONTACT ME
        </p>
        <p
          className={
            theme === "light" ? "expertise-content" : "expertise-content-dark"
          }
        >
          <Icon name="mail" /> doanviettu2k@gmail.com
          <br />
          <Icon name="phone" /> 0373686373
          <br />
          <Icon name="facebook" />{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/doazvjettu/"
          >
            Facebook
          </a>
          <br />
          <Icon name="github" />{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/viettu2k"
          >
            Github
          </a>
          <br />
          <Icon name="linkedin" />{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/%C4%91o%C3%A0n-vi%E1%BB%87t-t%C3%BA-92070120b/"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <div className="links-section">
        <p className={theme === "light" ? "expertise" : "expertise-dark"}>
          MY KNOWLEDGE
        </p>
        <p
          className={
            theme === "light" ? "expertise-content" : "expertise-content-dark"
          }
          style={{ marginRight: "10px" }}
        >
          I studied{" "}
          <b>
            data structures and algorithms, software development process,
            software testing,
          </b>{" "}
          and some basic programming languages in my university program like{" "}
          <b>c++, c#, java</b>. In addition, I also learned more and felt very
          interested in the <b>JavaScript</b> language, so I learned the
          libraries and frameworks of the <b>JavaScript</b> language.
        </p>

        <div
          className={
            theme === "light" ? "skills-container" : "skills-container-dark"
          }
        >
          <ul className="skill-list">
            <li>HTML/CSS (basic)</li>
            <li>JavaScript (advanced)</li>
            <li>MS SQL (basic)</li>
          </ul>
          <ul className="skill-list">
            <li>React (basic)</li>
            <li>Node/ExpressJS (basic)</li>
            <li>MongoDB (basic)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
