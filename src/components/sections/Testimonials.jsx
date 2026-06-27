// src/components/sections/Testimonials.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CTO, TechCorp',
      content: 'Working with Saad was an absolute pleasure. He delivered a complex platform ahead of schedule and exceeded our expectations. His attention to detail and technical expertise is outstanding.',
      avatar: 'https://via.placeholder.com/80/667eea/ffffff?text=JS',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Manager, InnovateCo',
      content: 'Saad is one of the most dedicated developers I\'ve worked with. He not only writes clean code but also deeply understands business requirements and user needs.',
      avatar: 'https://via.placeholder.com/80/764ba2/ffffff?text=SJ',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Developer, StartUpX',
      content: 'Exceptional problem-solving skills and a great team player. Saad\'s contributions to our project were invaluable, and his code quality is top-notch.',
      avatar: 'https://via.placeholder.com/80/667eea/ffffff?text=MC',
      rating: 5
    }
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

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
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Testimonials
          </motion.h2>

          <motion.div variants={itemVariants} className="position-relative">
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="d-flex justify-content-center mb-4">
                    <FaQuoteLeft size={40} />  // or FaQuoteRight
                  </div>
                  
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="rounded-circle"
                      width={80}
                      height={80}
                    />
                  </div>
                  
                  <div className="d-flex justify-content-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        className={i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-4">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-purple-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft size={20} className="text-gray-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight size={20} className="text-gray-300" />
                </button>
              </div>

              <div className="d-flex justify-content-center gap-2 mt-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-blue-500'
                        : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials