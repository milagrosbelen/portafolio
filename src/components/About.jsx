import React from 'react'
import SectionHeader from './ui/SectionHeader'
import BentoCard from './ui/BentoCard'
import { SERVICES } from '../data/portfolio'
import { scrollToSection } from '../utils/scrollToSection'

const About = () => (
  <section id="about" className="section-compact relative">
    <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
      <SectionHeader
        compact
        label="Perfil"
        title="Idea → deploy"
        description="Productos reales, no solo maquetas."
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {SERVICES.map((s) => (
          <BentoCard key={s.id} className="!p-5 text-center">
            <span className="text-3xl block mb-3">{s.icon}</span>
            <p className="text-base font-bold text-white">{s.title}</p>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{s.line}</p>
          </BentoCard>
        ))}
      </div>

      <BentoCard className="!p-6 md:!p-7 flex flex-col md:flex-row md:items-center gap-6">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-1">
          <strong className="text-white">Full Stack</strong> · Instituto Cervantes ·{' '}
          <strong className="text-white">Linkiame</strong> · deploy en Vercel, Laravel Forge, Render y Neon.
        </p>
        <button
          type="button"
          onClick={() => scrollToSection('#contact')}
          className="btn-primary !w-full md:!w-auto flex-shrink-0"
        >
          Contactar
        </button>
      </BentoCard>
    </div>
  </section>
)

export default About
