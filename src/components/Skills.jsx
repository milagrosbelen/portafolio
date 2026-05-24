import React from 'react'
import SectionHeader from './ui/SectionHeader'
import BentoCard from './ui/BentoCard'
import { STACK_GROUPS } from '../data/portfolio'

const Skills = () => (
  <section id="skills" className="section-compact relative">
    <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
      <SectionHeader compact label="Stack" title="Tecnologías" description="En uso en proyectos reales — incluye deploy y cloud." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK_GROUPS.map((group) => (
          <BentoCard
            key={group.id}
            className={`!p-5 bg-gradient-to-br ${group.color}`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-300 mb-4">
              {group.title}
            </p>
            <div className="flex flex-col gap-2">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl bg-black/25 border border-white/[0.05] px-3 py-2.5"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-500/15 text-[10px] font-bold text-primary-300">
                    {item.abbr}
                  </span>
                  <span className="text-sm text-gray-200 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
