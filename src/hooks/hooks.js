// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollReveal = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  })

  return { ref, inView }
}

export const useCursorAnimation = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent);
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.2s ease;
      transform: translate(-50%, -50%);
    `
    document.body.appendChild(cursor)

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', updateCursor)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.body.removeChild(cursor)
    }
  }, [])
}