// src/components/ui/ProjectCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="glass overflow-hidden rounded-2xl group h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="position-relative overflow-hidden">
        {/* <img
          src={project.image}
          alt={project.title}
          className="w-100 transition-transform duration-500 group-hover:scale-110"
          style={{ height: '250px', objectFit: 'cover' }}
        /> */}
        <div className="position-absolute top-0 end-0 m-3">
          <span className="px-3 py-1 rounded-full glass text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="d-flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full glass text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
          {/* live demo and source code btn */}

        {/* <div className="d-flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <FaExternalLinkAlt size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={16} />
            Source Code
          </a>
        </div> */}
      </div>
    </motion.div>
  )
}

export default ProjectCard