import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { scrollToSection } from '../utils/scrollToSection'
import { SOCIAL_LINKS } from '../data/links'
import { STATS } from '../data/portfolio'
import HeroStat from './ui/HeroStat'

const heroSocialLinks = SOCIAL_LINKS.filter((l) => l.name !== 'WhatsApp')
const whatsappLink = SOCIAL_LINKS.find((l) => l.name === 'WhatsApp')?.href

const Hero = () => (
  <section id="hero" className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
    <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        {/* Foto — grande, flotante, brillo gradiente */}
        <div className="flex justify-center lg:justify-end lg:flex-1 lg:order-2 mb-10 lg:mb-0">
          <div className="relative animate-float">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-96 xl:h-96">
              {/* Glow principal */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/50 via-accent-400/35 to-primary-500/45 blur-3xl animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-300/35 to-accent-500/25 blur-2xl" />

              {/* Anillo gradiente + foto */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary-400 via-accent-400/80 to-primary-600 shadow-[0_0_60px_-10px_rgba(236,72,153,0.65),0_25px_50px_-12px_rgba(168,85,247,0.35)] ring-4 ring-primary-400/25 ring-offset-4 ring-offset-[#08080c]">
                <div className="relative h-full w-full rounded-full overflow-hidden border-[3px] border-primary-300/40 shadow-2xl shadow-primary-500/40">
                  <img
                    src="/img/CV-IMG.jpg"
                    alt="Milagros Belén Pedrasa"
                    className="h-full w-full object-cover scale-105 transition-transform duration-500 hover:scale-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-500/15 via-transparent to-primary-400/5" />
                </div>
              </div>

              {/* Orbes de luz */}
              <div className="absolute -top-8 -right-8 h-36 w-36 rounded-full bg-primary-400/35 blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-accent-400/30 blur-3xl" />
              <div className="absolute top-1/2 -right-14 h-24 w-24 rounded-full bg-primary-300/25 blur-2xl" />
            </div>
          </div>
        </div>

        {/* Contenido — columnas con ritmo vertical claro */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-[1.15] lg:order-1 max-w-xl mx-auto lg:mx-0 w-full">
          {/* Rol + disponible */}
          <div className="flex flex-col items-center lg:items-start gap-3 mb-8 w-full">
            <span className="pill-badge text-primary-300 bg-primary-500/10 border border-primary-400/20">
              Full Stack Developer
            </span>
            <span className="pill-badge text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para proyectos
            </span>
          </div>

          {/* Nombre */}
          <h1 className="mb-6 w-full">
            <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15]">
              Milagros
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gradient tracking-tight leading-[1.15] mt-1">
              Belén Pedrasa
            </span>
          </h1>

          {/* Propuesta de valor — una línea clara */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-md">
            Sistemas web en{' '}
            <span className="text-white font-medium">producción</span>
            <span className="text-gray-500"> — UI, backend y base de datos.</span>
          </p>

          {/* Métricas — grid 2×2 con espacio */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md lg:max-w-lg mb-10">
            {STATS.map((s, i) => (
              <HeroStat key={s.label} value={s.value} label={s.label} highlight={i === 0} />
            ))}
          </div>

          {/* CTAs — apilados en mobile, destacados */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md lg:max-w-none mb-8">
            <button type="button" onClick={() => scrollToSection('#projects')} className="btn-primary">
              Ver proyectos
            </button>
            {whatsappLink && (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            )}
          </div>

          {/* Redes — separadas del resto */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06] w-full max-w-xs lg:max-w-none justify-center lg:justify-start">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 mr-1 hidden sm:inline">
              Redes
            </span>
            {heroSocialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label={link.name}
              >
                {link.name === 'GitHub' ? <FaGithub className="w-5 h-5" /> : <FaLinkedin className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
