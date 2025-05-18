import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './layouts/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectSection from './sections/ProjectSection';

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
     
        <HeroSection />
        <AboutSection />
        <ProjectSection />
    </BrowserRouter>
  );
}

export default App
