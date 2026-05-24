import React from 'react'

const Footer = () => (
    <footer className="py-6 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Milagros Belén Pedrasa. 
            {' '}Desarrollado con <span className="text-primary-400">React</span> y <span className="text-primary-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
)

export default Footer

