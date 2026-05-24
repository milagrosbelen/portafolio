import React from 'react'
import { STATS } from '../data/portfolio'

const StatsBar = () => (
  <section className="relative z-10 -mt-8 pb-4">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-xl px-4 py-4 text-center border-primary-400/10 hover:border-primary-400/30 transition-colors"
          >
            <p className="text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
            <p className="text-[11px] md:text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default StatsBar
