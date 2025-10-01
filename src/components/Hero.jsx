import React from 'react'
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Reemplazar con tu número de WhatsApp
    const phoneNumber = "56963352063" // Formato: código país + número sin +
    const message = "Hola! Quiero dejar de entrenar con dolor. ¿Cuándo podemos empezar?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleScheduleClick = () => {
    // Reemplazar con tu enlace de Google Calendar
    const calendarUrl = "https://calendar.app.google/ofAAA1auXWNjXKh59"
    window.open(calendarUrl, '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      {/* Content */}
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
              Tu dolor no es{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">normal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
              Y no tienes por qué acostumbrarte
            </h2>
          </div>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Rehabilitación y entrenamiento personalizado para que vuelvas a hacer lo que te gusta: entrenar, correr o simplemente levantarte sin quejarte.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button 
              onClick={handleScheduleClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-12 rounded-2xl transition-all duration-300 text-lg tracking-wide transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserva tu sesión hoy
            </button>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-12 rounded-2xl transition-all duration-300 text-lg tracking-wide flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp />
              Escríbeme ahora
            </button>
          </div>

          {/* Minimal Trust Indicator */}
          <div className="text-center">
            <p className="text-gray-400 text-sm tracking-wide">500+ personas que dejaron de vivir con dolor en Santiago</p>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
