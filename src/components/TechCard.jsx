import React from 'react'

const TechCard = ({ icon: Icon, name, colorClass = 'text-primary-400' }) => (
    <div className="group relative glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 min-h-[120px] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400/10 to-accent-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className={`text-4xl md:text-5xl ${colorClass} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
        <Icon />
      </div>
      <h3 className="text-white font-medium text-sm md:text-base group-hover:text-primary-200 transition-colors duration-300 relative z-10">
        {name}
      </h3>
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
    </div>
)

export default TechCard
