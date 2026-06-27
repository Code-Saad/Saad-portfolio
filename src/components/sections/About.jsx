// src/components/sections/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaUsers, FaCode, FaRocket } from 'react-icons/fa'

import AnimatedCounter from '../ui/AnimatedCounter'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: FaCode, value: 2, label: 'Years Experience', suffix: '+' },
    { icon: FaUsers, value: 20, label: 'Projects Delivered', suffix: '+' },
    // { icon: FaAward, value: 10, label: 'Certifications', suffix: '' },
    // { icon: FaRocket, value: 50, label: 'Happy Clients', suffix: '+' }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>

          <div className="row g-4">
            <motion.div variants={itemVariants} className="col-lg-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  MERN-Stack Developer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a MERN Stack Developer with 2+ years of experience crafting 
                  robust web applications. My journey in tech started with a curiosity 
                  for how things work, which evolved into a passion for building 
                  solutions that make a difference.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I specialize in creating scalable, performant, and user-friendly 
                  applications using React, Node.js, and MongoDB. I believe in writing 
                  clean, maintainable code and following best practices to ensure 
                  long-term success of projects.
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Career Goals</h4>
                  <p className="text-gray-300">
                    To leverage my skills in full-stack development to build 
                    innovative solutions that impact millions of users, while 
                    continuously learning and growing as a developer.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="col-lg-4">
              <div className="glass p-8 rounded-2xl h-full">
                <h4 className="text-lg font-semibold mb-4">Quick Stats</h4>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-purple-500/10">
                        <stat.icon className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold gradient-text">
                          <AnimatedCounter
                            value={stat.value}
                            suffix={stat.suffix}
                            inView={inView}
                          />
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About