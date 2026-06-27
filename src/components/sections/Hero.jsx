// src/components/sections/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'
import myLogo from '../../assets/mylogo.png'; 

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.8
      }
    }
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Code-Saad', label: 'GitHub', color: 'hover:text-white' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-saad-1500112b6/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    // { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter', color: 'hover:text-blue-400' },
    // { icon: FaEnvelope, href: 'codewithsaad@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ]

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Profile Image with Ring */}
          <motion.div
            variants={imageVariants}
            className="mb-8 md:mb-10 relative inline-block"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-1 ">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] p-1">
                  <img
                    src={myLogo}
                    alt="Muhammad Saad"
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Online Status Dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0f] animate-pulse" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
          >
            <span className="gradient-text">Muhammad Saad</span>
          </motion.h1>

          {/* Title with Typewriter Effect */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
              <span className="inline-block border-r-2 border-purple-500 pr-2 animate-pulse">
                MERN Stack Developer
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            I am Software Engineer specializing in MERN stack architecture, operating at the intersection of full-stack engineering and intelligent automation.

          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
          >
            {/* <motion.a
              href="#"
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload size={18} />
              Download Resume
            </motion.a> */}
            
            <motion.a
              href="#contact"
              className="px-6 sm:px-8 py-3 rounded-full glass border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope size={18} />
              Contact Me
            </motion.a>

            {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 sm:gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 text-gray-400 ${social.color}`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>


          </motion.div>

          
          {/* Scroll Indicator */}
          {/* <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
              <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 flex justify-center p-1">
                <div className="w-1 h-2 bg-purple-500 rounded-full animate-scroll" />
              </div>
            </motion.div> */}
          {/* </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero