import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollAnimations from './components/ScrollAnimations'

function App() {
  return (
    <div className="App">
      <ScrollAnimations />
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
