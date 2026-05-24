import React from 'react'
import SectionHeader from './ui/SectionHeader'
import { PROCESS } from '../data/portfolio'

const Process = () => (
  <section id="process" className="section-padding bg-dark-900/50 relative">
    <div className="container mx-auto px-6">
      <SectionHeader
        label="Cómo trabajo"
        title="Proceso claro, resultados concretos"
        description="Así es como llevo un proyecto de la idea al deploy. Sin sorpresas, con comunicación constante."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {PROCESS.map((item, index) => (
          <article key={item.step} className="relative group">
            {index < PROCESS.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary-400/40 to-transparent" />
            )}
            <div className="glass rounded-2xl p-6 h-full hover:border-primary-400/30 transition-colors">
              <span className="inline-block text-3xl font-bold text-gradient opacity-80">{item.step}</span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Process
