import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
