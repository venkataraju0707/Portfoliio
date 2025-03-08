
// import './App.css'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Service from './Components/Service/Service.jsx'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App