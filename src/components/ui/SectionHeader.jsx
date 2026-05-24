import React from 'react'

const SectionHeader = ({
  label,
  title,
  description,
  titleClassName = 'mb-2',
  labelClassName = 'text-primary-300',
  className = '',
  compact = false,
}) => (
  <div className={`text-center ${compact ? 'mb-8' : 'mb-10'} ${className}`}>
    <span className={`${labelClassName} text-xs font-semibold tracking-widest uppercase`}>
      {label}
    </span>
    <h2
      className={`font-bold text-white mt-2 ${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} ${titleClassName}`}
    >
      {title}
    </h2>
    {description && (
      <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-2">{description}</p>
    )}
  </div>
)

export default SectionHeader
