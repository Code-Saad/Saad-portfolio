// src/App.jsx
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

// Components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollProgress from './components/common/ScrollProgress'
import BackToTop from './components/common/BackToTop'
import ParticleBackground from './components/common/ParticleBackground'

// Sections
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import Certifications from './components/sections/Certifications'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  }, [])

  return (
    <>
      <Helmet>
        <title>Muhammad Saad | MERN Stack Developer</title>
        <meta name="description" content="Muhammad Saad - MERN Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta property="og:title" content="Muhammad Saad | MERN Stack Developer" />
        <meta property="og:description" content="Professional portfolio showcasing my work as a full-stack developer." />
        <meta name="theme-color" content="#0a0a0f" />
      </Helmet>

      <ScrollProgress />
      <Navbar />
      <ParticleBackground />
      
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        {/* <Achievements />
        <Certifications />
        <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App