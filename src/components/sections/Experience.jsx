// src/components/sections/Experience.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: 'Senior MERN Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading the development of enterprise-scale web applications using React, Node.js, and MongoDB. Implementing microservices architecture and optimizing performance.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 8 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed full-stack applications for various clients across different industries. Specialized in building responsive and accessible web applications.',
      achievements: [
        'Delivered 15+ projects on time',
        'Reduced load time by 30%',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      period: '2019 - 2020',
      description: 'Focused on building user interfaces with React and modern CSS frameworks. Worked closely with designers to implement pixel-perfect designs.',
      achievements: [
        'Built 20+ responsive websites',
        'Implemented component library',
        'Improved accessibility scores'
      ]
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
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Experience
          </motion.h2>

          <div className="position-relative">
            <div className="d-none d-md-block position-absolute start-50 translate-middle-x h-100" 
                 style={{ width: '2px', background: 'linear-gradient(to bottom, #667eea, #764ba2)' }}>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`row mb-5 ${index % 2 === 0 ? 'justify-content-end' : ''}`}
              >
                <div className={`col-md-6 ${index % 2 === 0 ? 'text-end' : ''}`}>
                  <div className="glass p-6 rounded-2xl position-relative">
                    <div className="d-none d-md-block position-absolute top-0 translate-middle-y"
                         style={{
                           left: index % 2 === 0 ? 'auto' : '0',
                           right: index % 2 === 0 ? '0' : 'auto',
                           transform: index % 2 === 0 ? 'translateX(50%)' : 'translateX(-50%)',
                           width: '16px',
                           height: '16px',
                           background: 'linear-gradient(135deg, #667eea, #764ba2)',
                           borderRadius: '50%',
                           border: '4px solid #0a0a0f'
                         }}>
                    </div>

                    <div className="d-flex align-items-start gap-3 mb-3">
                      <FaBriefcase size={24} />
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-purple-400">{exp.company}</p>
                        <div className="d-flex align-items-center gap-2 text-gray-400 mb-2">
                          <FaCalendarAlt size={16} />
                          <span className="small">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <ul className="list-unstyled">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 small mb-1">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience