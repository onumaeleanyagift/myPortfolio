import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import PullRequest from "./sections/PullRequest"
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <PullRequest />
      <ContactSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
