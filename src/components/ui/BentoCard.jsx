import React from 'react'

const accentMap = {
  primary: 'from-primary-500/15 via-transparent to-accent-500/5',
  accent: 'from-accent-500/15 via-transparent to-primary-500/5',
  emerald: 'from-emerald-500/10 via-transparent to-transparent',
  neutral: 'from-white/[0.06] via-transparent to-transparent',
}

const BentoCard = ({
  children,
  className = '',
  accent = 'primary',
  hover = true,
  as: Component = 'div',
  ...props
}) => (
  <Component
    className={`
      relative overflow-hidden rounded-2xl
      bg-[#111118]/90 backdrop-blur-xl
      border border-white/[0.07]
      shadow-[0_4px_30px_-6px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.07)]
      ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/20 hover:shadow-[0_16px_48px_-12px_rgba(236,72,153,0.18),inset_0_1px_0_0_rgba(255,255,255,0.1)]' : ''}
      ${className}
    `}
    {...props}
  >
    <div
      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentMap[accent] || accentMap.primary}`}
      aria-hidden="true"
    />
    <div className="relative z-10">{children}</div>
  </Component>
)

export default BentoCard
