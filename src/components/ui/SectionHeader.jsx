import React from 'react'

const SectionHeader = ({
  label,
  title,
  description,
  titleClassName = 'mb-4',
  labelClassName = 'text-primary-300',
  className = '',
}) => (
  <div className={`text-center mb-16 ${className}`}>
    <div className="inline-block mb-4">
      <span className={`${labelClassName} text-sm font-medium tracking-wider uppercase`}>
        {label}
      </span>
    </div>
    <h2 className={`text-4xl md:text-5xl font-bold text-white ${titleClassName}`}>{title}</h2>
    {description && (
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
    )}
  </div>
)

export default SectionHeader
