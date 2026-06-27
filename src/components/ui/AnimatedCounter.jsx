// src/components/ui/AnimatedCounter.jsx
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const AnimatedCounter = ({ value, suffix = '', inView }) => {
  const [count, setCount] = React.useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inViewRef = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [value, inView])

  return (
    <motion.span ref={ref}>
      {count}{suffix}
    </motion.span>
  )
}

export default AnimatedCounter