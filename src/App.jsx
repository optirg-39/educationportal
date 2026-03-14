import { useState } from 'react'
import Hero from './Hero'
import Courses from './Courses'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <nav className="navbar glass">
        <div className="container nav-content">
          <div className="brand-logo">
            <div className="brand-dot"></div>
            LearnATTITUTE
          </div>
          <div className="nav-links">
            <a href="#courses" className="nav-link">Courses</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Courses />
      </main>

      <Footer />
    </div>
  )
}

export default App
