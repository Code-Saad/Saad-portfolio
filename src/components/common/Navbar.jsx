// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass py-3 shadow-2xl shadow-purple-500/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl md:text-3xl font-bold gradient-text tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saad
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Social Icons - Desktop */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/10">
                <a 
                  href="https://github.com/Code-Saad" 
                  className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-saad-1500112b6/" 
                  className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href="mailto:codewithsaad@gmail.com.com" 
                  className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                  aria-label="Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          x: mobileMenuOpen ? 0 : '100%',
        }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        className="fixed top-0 right-0 h-full w-80 z-50 glass shadow-2xl md:hidden overflow-y-auto"
      >
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 flex-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons - Mobile */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs text-gray-400 mb-4">Connect with me</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Code-Saad" 
                className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-saad-1500112b6/" 
                className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:codewithsaad@gmail.com.com" 
                className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Navbar