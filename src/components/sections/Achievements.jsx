// src/components/sections/Achievements.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaStar, FaUsers, FaBolt, FaBullseye, FaChartLine } from 'react-icons/fa'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      icon: FaAward,
      title: 'Best Developer Award',
      description: 'Recognized for outstanding contributions and technical excellence'
    },
    {
      icon: FaStar,
      title: 'Open Source Contributor',
      description: 'Contributed to 10+ open-source projects with 100+ stars'
    },
    {
      icon: FaUsers,
      title: 'Team Leadership',
      description: 'Successfully led 3 development teams to deliver major projects'
    },
    {
      icon: FaBolt,
      title: 'Performance Optimization',
      description: 'Improved application performance by 40% through optimization'
    },
    {
      icon: FaBullseye,
      title: 'Project Delivery',
      description: 'Delivered 20+ projects with 100% client satisfaction'
    },
    {
      icon: FaChartLine,
      title: 'Revenue Impact',
      description: 'Generated $1M+ in revenue through developed platforms'
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Achievements
          </motion.h2>

          <div className="row g-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="col-lg-4 col-md-6"
              >
                <motion.div
                  className="glass p-6 rounded-2xl text-center h-full"
                  whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-4">
                    <achievement.icon className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements