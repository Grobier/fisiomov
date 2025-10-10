import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollAnimations from './components/ScrollAnimations'
import Recovery from './components/Recovery'

function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </div>
  )
}

export default App
