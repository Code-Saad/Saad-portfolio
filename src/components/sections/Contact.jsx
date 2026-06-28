// src/components/sections/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'codewithsaad@gmail.com', href: 'mailto:codewithsaad786@gmail.com.com' },
    { icon: FaPhone, label: 'Phone', value: '+923191515848', href: 'tel:+923191515848' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kamra, Attock', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Muhammad Saad', href: 'https://www.linkedin.com/in/muhammad-saad-1500112b6/' },
    { icon: FaGithub, label: 'GitHub', value: 'Code-Saad', href: 'https://www.linkedin.com/in/muhammad-saad-1500112b6/' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 5000)
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
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Get In Touch
          </motion.h2>

          <div className="row g-4">
            <motion.div variants={itemVariants} className="col-lg-12">
              <div className="glass p-6 rounded-2xl h-100">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="d-flex align-items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      target={info.icon === FaEnvelope || info.icon === FaPhone ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <info.icon className="text-purple-400" size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{info.label}</div>
                        <div className="text-sm text-gray-200">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* <motion.div variants={itemVariants} className="col-lg-8">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Send Me a Message
                </h3>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl mb-4 d-flex align-items-center gap-2"
                  >
                    <FaCheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-100 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-100 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-100 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your Message"
                        className="w-100 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <motion.button
                        type="submit"
                        className="w-100 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25 d-flex align-items-center justify-content-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="spinner-border spinner-border-sm" />
                        ) : (
                          <>
                            <FaPaperPlane size={20} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact