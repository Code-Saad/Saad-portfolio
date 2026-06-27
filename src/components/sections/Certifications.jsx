// src/components/sections/Certifications.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaCode, FaDatabase, FaCloud, FaShieldAlt, FaPalette } from 'react-icons/fa'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certifications = [
    {
      icon: FaCode,
      title: 'MERN Stack Developer',
      issuer: 'MongoDB University',
      year: '2023',
      description: 'Comprehensive certification in MongoDB, Express.js, React, and Node.js'
    },
    {
      icon: FaDatabase,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB',
      year: '2023',
      description: 'Expertise in MongoDB database design, queries, and optimization'
    },
    {
      icon: FaCloud,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2022',
      description: 'Foundational understanding of AWS cloud services and architecture'
    },
    {
      icon: FaShieldAlt,
      title: 'Web Security Specialist',
      issuer: 'Coursera',
      year: '2022',
      description: 'Advanced web security practices, OWASP top 10, and secure coding'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      year: '2021',
      description: 'User-centered design principles, prototyping, and usability testing'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Certifications
          </motion.h2>

          <div className="row g-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="col-md-6 col-lg-4"
              >
                <motion.div
                  className="glass p-6 rounded-2xl h-full"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-purple-500/10 flex-shrink-0">
                      <cert.icon className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{cert.title}</h4>
                      <p className="text-sm text-purple-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
                  <span className="text-xs text-gray-500">{cert.year}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications