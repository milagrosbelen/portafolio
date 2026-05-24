import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { scrollToSection } from '../utils/scrollToSection'
import { SOCIAL_LINKS } from '../data/links'
import { STATS } from '../data/portfolio'

const heroSocialLinks = SOCIAL_LINKS.filter((l) => l.name !== 'WhatsApp')
const whatsappLink = SOCIAL_LINKS.find((l) => l.name === 'WhatsApp')?.href

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-[92vh] flex items-center section-padding pt-28 pb-8 overflow-hidden"
  >
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
        <div className="text-center lg:text-left space-y-5 order-2 lg:order-1">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="text-primary-300 text-xs font-semibold tracking-widest uppercase">
              Full Stack Developer
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2.5 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            <span className="text-white">Milagros </span>
            <span className="text-gradient">Belén Pedrasa</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
            Sistemas web completos en producción —{' '}
            <span className="text-gray-200">UI, backend y base de datos</span>.
          </p>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass rounded-lg px-3 py-2 text-center min-w-[72px] border-primary-400/10"
              >
                <p className="text-sm font-bold text-gradient leading-none">{s.value}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1">
            <button
              type="button"
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl text-sm font-semibold hover:scale-[1.02] shadow-lg shadow-primary-500/30 transition-all"
            >
              Ver proyectos
            </button>
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold border border-emerald-500/40 text-emerald-300 bg-emerald-500/10 hover:scale-[1.02] transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            )}
          </div>

          <div className="flex items-center gap-5 justify-center lg:justify-start pt-1">
            {heroSocialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-300 transition-colors"
                aria-label={link.name}
              >
                {link.name === 'GitHub' ? (
                  <FaGithub className="w-5 h-5" />
                ) : (
                  <FaLinkedin className="w-5 h-5" />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center order-1 lg:order-2">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-500/20 rounded-full blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary-400/40 shadow-2xl shadow-primary-500/20 ring-2 ring-white/5">
              <img
                src="/img/CV-IMG.jpg"
                alt="Milagros Belén Pedrasa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
