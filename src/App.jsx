import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import Services from './components/Services'
import Benefits from './components/Benefits'
import ImpactSection from './components/ImpactSection'
import FreeResourcesSection from './components/FreeResourcesSection'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollAnimations from './components/ScrollAnimations'
import Recovery from './components/Recovery'
import FreeAccess from './components/FreeAccess'
import ServiceDetail from './components/ServiceDetail'
import StretchTherapistCourse from './components/StretchTherapistCourse'

function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <Hero />
      <ProblemSection />
      <Services />
      <Benefits />
      <ImpactSection />
      <FreeResourcesSection />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

function App() {
  return (
    <div className="App relative overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/recursos-gratuitos" element={<FreeAccess />} />
        <Route path="/stretch-therapist" element={<StretchTherapistCourse />} />
        <Route path="/stretching-asistido-profesional" element={<StretchTherapistCourse />} />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
      </Routes>
    </div>
  )
}

export default App
