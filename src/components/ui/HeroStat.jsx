import React from 'react'
import BentoCard from './BentoCard'

const HeroStat = ({ value, label, highlight = false }) => (
  <BentoCard
    hover={false}
    className={`!p-4 text-center ${highlight ? 'border-primary-400/25' : ''}`}
  >
    <p
      className={`text-xl sm:text-2xl font-bold tracking-tight leading-none ${
        highlight ? 'text-gradient' : 'text-white'
      }`}
    >
      {value}
    </p>
    <p className="text-[11px] sm:text-xs text-gray-500 mt-2 leading-snug">{label}</p>
  </BentoCard>
)

export default HeroStat
