import React from 'react'
import SectionHeader from './ui/SectionHeader'
import { SERVICES } from '../data/portfolio'
import { scrollToSection } from '../utils/scrollToSection'

const About = () => (
  <section id="about" className="section-compact relative">
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeader
        compact
        label="Perfil"
        title="Idea → deploy, con resultados"
        description="2+ años construyendo productos reales. No solo UI: entrego sistemas completos."
      />

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="glass-glow rounded-xl p-4 text-center hover:border-primary-400/25 transition-colors"
          >
            <span className="text-2xl">{s.icon}</span>
            <p className="text-sm font-bold text-white mt-2">{s.title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.line}</p>
          </div>
        ))}
      </div>

      <div className="glass-glow rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
          <strong className="text-white">Full Stack</strong> en Instituto Cervantes. Experiencia en{' '}
          <strong className="text-white">Linkiame</strong>, clientes con sistema en producción y deploy en
          Vercel, Forge y Neon.
        </p>
        <button
          type="button"
          onClick={() => scrollToSection('#contact')}
          className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-primary-500/20 text-primary-300 text-sm font-semibold border border-primary-400/30 hover:bg-primary-500/30 transition-all whitespace-nowrap"
        >
          Contactar →
        </button>
      </div>
    </div>
  </section>
)

export default About
