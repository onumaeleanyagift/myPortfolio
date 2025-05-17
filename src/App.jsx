import './App.css'
import NavBar from './layouts/Navbar'
import AboutSection from './sections/AboutSection'
import HeroSection from './sections/HeroSection'

function App() {
  

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}

export default App
