import "./App.css";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import SkillsAndLinks from "./components/SkillsAndLinks";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="portfolio-main">
      <Header />
      <IntroCard />
      <SkillsAndLinks />
      <ProjectCard />
    </div>
  );
}

export default App;
