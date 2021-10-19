import React from "react";
import { Divider, Button, Icon } from "semantic-ui-react";

export default function SkillsAndLinks() {
  return (
    <div className="skills-card-main">
      <div className="skills-section">
        <p class="more-about-me">MORE ABOUT ME</p>
        <p className="introduction">
          I am a student at Duy Tân university, majoring in software
          engineering. And I am looking for a position that matches my skills,
          to learn and improve my experience.
        </p>
        <p className="introduction">
          Building projects to learn how the code works is my hobbies, as well
          socializing with friends and family and computing.
        </p>
        <Divider />
        <p className="expertise">CONTACT ME</p>
        <p className="expertise-content">
          <Icon name="mail" /> doanviettu2k@gmail.com
          <br />
          <Icon name="phone" /> 0373686373
          <br />
          <Icon name="facebook" />{" "}
          <a href="https://www.facebook.com/doazvjettu/">Facebook</a>
          <br />
          <Icon name="github" />{" "}
          <a href="https://github.com/viettu2k">Github</a>
          <br />
          <Icon name="linkedin" />{" "}
          <a href="https://www.linkedin.com/in/t%C3%BA-%C4%91o%C3%A0n-vi%E1%BB%87t-92070120b/">
            LinkedIn
          </a>
        </p>
        <Button inverted color="red">
          Download Resume
        </Button>
      </div>

      <div className="links-section">
        <p className="expertise">MY KNOWLEDGE</p>
        <p className="expertise-content">
          I have learned{" "}
          <b>data structures and algorithms, databases ,software testing</b> and
          my favorite programming language are <b>JavaScript</b>. So I
          approached the most popular frameworks and libraries of the{" "}
          <b>JavaScript</b> language.
        </p>

        <div className="skills-container">
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
