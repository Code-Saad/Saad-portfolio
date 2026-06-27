// src/components/ui/GlassCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`glass p-6 rounded-2xl ${hover ? 'glass-hover' : ''} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard