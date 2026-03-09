import React from 'react'
import SectionHeader from './ui/SectionHeader'

const About = () => (
  <section id="about" className="section-padding bg-dark-900/50 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <SectionHeader label="Sobre mí" title="Construyendo el futuro digital" titleClassName="mb-8" className="mb-8" />
        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Desarrolladora frontend con más de <strong className="text-white">2 años de experiencia</strong> 
              {' '}autodidacta y actualmente cursando <strong className="text-white">Desarrollo Web y Aplicaciones Digitales</strong> 
              {' '}en el Instituto Cervantes.
            </p>
            <p>
              Especializada en crear interfaces modernas, funcionales y visualmente atractivas. 
              Apasionada por el código limpio, las mejores prácticas y el aprendizaje continuo.
            </p>
            <p className="text-primary-300 font-medium">
              Buscando oportunidades para crecer profesionalmente y aportar valor a proyectos innovadores.
            </p>
        </div>
      </div>
    </div>
  </section>
)

export default About

