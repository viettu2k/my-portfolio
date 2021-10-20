import "./App.css";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import SkillsAndLinks from "./components/SkillsAndLinks";
import ProjectCard from "./components/ProjectCard";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = (theme) => {
    localStorage.setItem("Theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    setTheme(localStorage.getItem("Theme"));
  }, [theme]);

  return (
    <div
      className={theme === "light" ? "portfolio-main" : "portfolio-main-dark"}
    >
      <Container style={{ width: 900 }}>
        <Header theme={theme} />
        <IntroCard changeTheme={changeTheme} theme={theme} />
        <SkillsAndLinks theme={theme} />
        <ProjectCard theme={theme} />
      </Container>
    </div>
  );
}

export default App;
