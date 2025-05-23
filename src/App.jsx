import './App.css'
import { BrowserRouter } from "react-router-dom";
import NavBar from './layouts/NavBar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
     
        <HeroSection />
        <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App
