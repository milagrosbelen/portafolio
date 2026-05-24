import React from 'react'
import SectionHeader from './ui/SectionHeader'
import { SERVICES } from '../data/portfolio'
import { scrollToSection } from '../utils/scrollToSection'

const Services = () => (
  <section id="services" className="section-padding bg-dark-950 relative">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Qué hago"
        title="Soluciones para cada contexto"
        description="Ya sea que busques contratar en tu empresa o necesites un sistema para tu negocio, acá está lo que entrego."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className={`group rounded-2xl border bg-gradient-to-br ${service.accent} ${service.border} p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300`}
          >
            <span className="text-3xl" aria-hidden="true">
              {service.icon}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                {service.subtitle}
              </p>
              <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>
            <ul className="space-y-2">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <button
          type="button"
          onClick={() => scrollToSection('#projects')}
          className="px-6 py-3 rounded-xl bg-primary-500/20 text-primary-300 border border-primary-400/30 hover:bg-primary-500/30 transition-all font-medium text-sm"
        >
          Ver casos reales
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('#contact')}
          className="px-6 py-3 rounded-xl glass hover:bg-white/10 text-gray-300 hover:text-white transition-all font-medium text-sm"
        >
          Consultame sin compromiso
        </button>
      </div>
    </div>
  </section>
)

export default Services
