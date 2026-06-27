// src/components/sections/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaFilter, FaGithub } from 'react-icons/fa'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [filter, setFilter] = useState('All')

// src/components/sections/Projects.jsx - Updated projects data

const projects = [
  {
    id: 1,
    title: 'Agency Approval System',
    description: 'Enterprise-grade approval workflow platform built on MERN stack. Enables seamless collaboration between agencies and clients with real-time approval tracking, comment threads, and change request management. Features role-based access control, email notifications, and comprehensive audit trails.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    image: 'https://picsum.photos/seed/approval/600/400',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Social Media Clone - Insta Clone',
    description: 'Feature-rich Instagram clone built with MERN stack. Includes user authentication, post creation with images/videos, real-time likes and comments, follow/unfollow system and explore feed with infinite scroll.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', ],
    image: 'https://picsum.photos/seed/instagram/600/400',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack'
  },
  {
    id: 3,
    title: 'Job Portal Platform',
    description: 'Comprehensive job portal connecting employers with job seekers.  Built with MERN stack.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    image: 'https://picsum.photos/seed/jobportal/600/400',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack'
  },
  {
    id: 4,
    title: 'LearnStreak - Learning Platform',
    description: 'Interactive learning management system where users can enroll in courses, track progress, complete quizzes, and earn certificates. Features include course creation for instructors, student dashboard with learning streaks, progress tracking, and community discussion forums.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    image: 'https://picsum.photos/seed/learnstreak/600/400',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack'
  },
  {
    id: 5,
    title: 'Blog Application',
    description: 'Modern blog platform developed with React frontend. Features include user authentication, post creation with rich text editor, category/tag management, search functionality, comment system, reading time estimation, related posts suggestion, and responsive design with dark mode support.',
    technologies: ['React', 'React Router', 'Context API', 'Axios', 'React Quill'],
    image: 'https://picsum.photos/seed/blog/600/400',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    id: 6,
    title: 'Oracle App - AI-Powered Assistant',
    description: 'Intelligent oracle application built with React frontend. Provides AI-powered insights, predictions, and recommendations using modern APIs. Features include real-time data visualization, interactive dashboards, customizable widgets, user preferences, and responsive design optimized for all devices.',
    technologies: ['React', 'React Router', 'Axios', 'Chart.js', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/oracle/600/400',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend'
  }
]

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

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
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Projects
          </motion.h2>

          <motion.div variants={itemVariants} className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'glass text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="row g-4">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="col-lg-6"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects