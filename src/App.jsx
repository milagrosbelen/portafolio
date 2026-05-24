import React from 'react'
import PageBackground from './components/PageBackground'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <PageBackground />
      <div className="relative min-h-screen">
        <Header />
        <ScrollToTop />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
