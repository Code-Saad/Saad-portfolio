// src/components/sections/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaCode,
  FaGithub,
  FaDocker,
  FaFigma,
  FaBootstrap
} from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: FaServer, color: '#FFFFFF' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: FaDatabase, color: '#47A248' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'VS Code', icon: FaCode, color: '#007ACC' },
        { name: 'Github', icon: FaGithub, color: '#ffffff' },
        // { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        // { name: 'Figma', icon: FaFigma, color: '#F24E1E' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Skills & Expertise
          </motion.h2>

          <div className="row g-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="col-lg-3 col-md-6"
              >
                <div className="glass p-6 rounded-2xl h-full hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <skill.icon 
                          size={24} 
                          style={{ color: skill.color }}
                          className="flex-shrink-0"
                        />
                        <span className="text-gray-300">{skill.name}</span>
                      </motion.div>
                    ))}
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

export default Skills