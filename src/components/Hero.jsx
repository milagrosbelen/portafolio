import React from 'react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { scrollToSection } from '../utils/scrollToSection'
import { SOCIAL_LINKS } from '../data/links'

const heroSocialLinks = SOCIAL_LINKS.filter((l) => l.name !== 'WhatsApp')

const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900/95 to-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.15),rgba(168,85,247,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center md:justify-end order-1 md:order-2 animate-float">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/40 via-accent-400/30 to-primary-500/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-accent-500/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-300/50 shadow-2xl shadow-primary-500/50 ring-4 ring-primary-400/20">
                <img
                  src="/img/CV-IMG.jpg"
                  alt="Milagros Belén Pedrasa"
                  className="w-full h-full object-cover scale-105 transition-transform duration-300 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-400/25 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 -right-12 w-20 h-20 bg-primary-300/20 rounded-full blur-xl"></div>
            </div>
          </div>
          <div className="text-center md:text-left space-y-6 animate-slide-up order-2 md:order-1">
            <div className="inline-block">
              <span className="text-primary-300 text-sm font-medium tracking-wider uppercase">
                Desarrolladora Frontend
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Milagros</span>
              <br />
              <span className="text-gradient">Belén Pedrasa</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
              Creando experiencias digitales excepcionales con código limpio y diseño moderno.
            </p>

            <div className="flex items-center gap-6 justify-center md:justify-start">
              {heroSocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-300 hover:text-primary-300 transition-colors"
                >
                  {link.name === 'GitHub' ? (
                    <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  ) : (
                    <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  )}
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-primary-500/40"
              >
                Ver Proyectos
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 border border-primary-400/30 hover:border-primary-400 text-gray-200 hover:text-white rounded-lg font-medium transition-all hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-primary-500/10"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-400 hover:text-primary-300 transition-colors"
          aria-label="Scroll down"
        >
          <HiArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
)

export default Hero

