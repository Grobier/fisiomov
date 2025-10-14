import React, { useState } from 'react'
import { FaWhatsapp, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { subscribeToNewsletter } from '../services/firebase'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await subscribeToNewsletter(email)
      setIsSubscribed(true)
      setEmail('')
      
      // Track successful subscription
      if (typeof gtag !== 'undefined') {
        gtag('event', 'subscribe', {
          event_category: 'Newsletter',
          event_label: 'Footer Signup'
        })
      }
    } catch (error) {
      console.error('Error al suscribir:', error)
      alert(error.message || 'Error al suscribirse. Por favor, intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "56963352063"
    const message = "Hola! Me interesa agendar una consulta con FISIOMOVEE. ¿Podrías ayudarme?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleScheduleClick = () => {
    const calendarUrl = "https://calendar.app.google/ofAAA1auXWNjXKh59"
    window.open(calendarUrl, '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+56963352063', '_self')
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Teléfono",
      info: "+56 9 6335 2063",
      action: handleCallClick,
      color: "bg-blue-500"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "Respuesta inmediata",
      action: handleWhatsAppClick,
      color: "bg-green-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicación",
      info: "Santiago, Chile",
      action: () => window.open('https://maps.google.com/?q=Santiago+Chile', '_blank'),
      color: "bg-red-500"
    },
    {
      icon: FaClock,
      title: "Horarios",
      info: "Lun-Vie 8:00-20:00",
      action: null,
      color: "bg-purple-500"
    }
  ]

  const scheduleOptions = [
    {
      title: "Consulta Inicial Gratis",
      duration: "30 min",
      description: "Evaluación completa y plan de tratamiento personalizado",
      price: "GRATIS",
      highlight: true
    },
    {
      title: "Sesión de Rehabilitación",
      duration: "45-60 min",
      description: "Tratamiento especializado para tu lesión específica",
      price: "Desde $35.000"
    },
    {
      title: "Entrenamiento Personalizado",
      duration: "60 min",
      description: "Programa de ejercicios adaptado a tus objetivos",
      price: "Desde $40.000"
    }
  ]

  return (
    <section id="contacto" className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="mr-2">🚀</span>
            ¡Comienza hoy!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Tu{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">transformación</span>
            {' '}empieza aquí
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ¿Listo para cambiar tu vida? Solo falta dar el primer paso 💪
          </p>
        </div>

        {/* Modern CTA Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Schedule Card */}
            <div className="group relative bg-gradient-to-br from-black to-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white bg-opacity-5 rounded-full group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaCalendarAlt className="text-white text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Clase Gratuita
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Evaluación completa + primera sesión sin costo. Descubre tu potencial real.
                </p>
                
                <div className="flex items-center mb-6 text-green-400">
                  <span className="mr-2">✓</span>
                  <span className="text-sm">Evaluación profesional</span>
                </div>
                <div className="flex items-center mb-6 text-green-400">
                  <span className="mr-2">✓</span>
                  <span className="text-sm">Plan personalizado</span>
                </div>
                <div className="flex items-center mb-8 text-green-400">
                  <span className="mr-2">✓</span>
                  <span className="text-sm">Sin compromiso</span>
                </div>
                
                <button 
                  onClick={handleScheduleClick}
                  className="bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>🎯</span>
                  Agendar Ahora
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white bg-opacity-10 rounded-full group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white bg-opacity-5 rounded-full group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Consulta Rápida
                </h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  ¿Tienes dudas? Escríbeme por WhatsApp y te respondo al instante.
                </p>
                
                <div className="flex items-center mb-6 text-green-100">
                  <span className="mr-2">⚡</span>
                  <span className="text-sm">Respuesta inmediata</span>
                </div>
                <div className="flex items-center mb-6 text-green-100">
                  <span className="mr-2">💬</span>
                  <span className="text-sm">Asesoría personalizada</span>
                </div>
                <div className="flex items-center mb-8 text-green-100">
                  <span className="mr-2">📱</span>
                  <span className="text-sm">Disponible 24/7</span>
                </div>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FaWhatsapp />
                  Escribir Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact

