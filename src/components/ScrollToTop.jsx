import React, { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-8 right-8 md:right-12 z-50 group group/btn"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-accent-500/20 backdrop-blur-xl border border-white/10 group-hover:border-primary-400/40 shadow-lg shadow-primary-500/20 group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all duration-300 group-hover:scale-110 group-active:scale-95 animate-nudge-up group-hover:animate-none">
        <HiArrowUp className="w-6 h-6 md:w-7 md:h-7 text-primary-200 group-hover:text-white transition-colors duration-300" />
      </span>
    </button>
  )
}

export default ScrollToTop
