// src/components/common/Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-top border-white/10">
      <div className="container mx-auto px-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Muhammad Saad. All rights reserved.
          </div>
          
          <div className="d-flex align-items-center gap-2 text-gray-400 text-sm">
            Made with
            <FaHeart size={16} />
            using React & Bootstrap
          </div>
          
          <div className="d-flex gap-3">
            <a href="https://github.com/Code-Saad" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-saad-1500112b6/" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={18} />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a> */}
            <a href="mailto:codewithsaad786@gmail.com.com" className="text-gray-400 hover:text-white transition-colors">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer