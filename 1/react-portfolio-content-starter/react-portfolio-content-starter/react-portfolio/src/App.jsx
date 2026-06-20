import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import References from './pages/References'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">SA</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#references">References</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Home />
        <About />
        <Projects />
        <Services />
        <References />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Sara. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App