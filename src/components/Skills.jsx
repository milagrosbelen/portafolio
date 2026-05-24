import React from 'react'
import SectionHeader from './ui/SectionHeader'
import { STACK_GROUPS } from '../data/portfolio'

const Skills = () => (
  <section id="skills" className="section-compact relative">
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeader
        compact
        label="Stack"
        title="Tecnologías en producción"
        description="Lo que uso día a día en proyectos reales."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STACK_GROUPS.map((group) => (
          <div
            key={group.id}
            className={`glass-glow rounded-2xl p-4 bg-gradient-to-br ${group.color} border-white/[0.06] hover:border-primary-400/20 transition-all group`}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary-300/90 mb-3">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-1.5 rounded-lg bg-black/30 border border-white/[0.06] px-2 py-1.5 group-hover:border-primary-400/20 transition-colors"
                  title={item.name}
                >
                  <span className="text-[10px] font-bold text-primary-400 w-5 text-center">
                    {item.abbr}
                  </span>
                  <span className="text-[11px] text-gray-300 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
