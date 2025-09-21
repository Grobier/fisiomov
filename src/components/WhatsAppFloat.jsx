import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Show tooltip periodically if user hasn't interacted
    const tooltipTimer = setInterval(() => {
      if (!hasInteracted) {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 4000)
      }
    }, 10000) // Show every 10 seconds

    return () => {
      clearTimeout(timer)
      clearInterval(tooltipTimer)
    }
  }, [hasInteracted])

  const handleWhatsAppClick = () => {
    setHasInteracted(true)
    setShowTooltip(false)
    
    const phoneNumber = "56912345678"
    const message = "Hola! Vengo desde la página web de FISIOMOV y me interesa conocer más sobre sus servicios."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Track click event for analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'WhatsApp',
        event_label: 'Floating Button',
        value: 1
      })
    }
    
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', {
        content_name: 'WhatsApp Float Button'
      })
    }
    
    window.open(url, '_blank')
  }

  const closeTooltip = () => {
    setShowTooltip(false)
    setHasInteracted(true)
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs relative">
              <button
                onClick={closeTooltip}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={12} />
              </button>
              <div className="pr-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  ¡Hola! 👋
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  ¿Necesitas ayuda con tu recuperación? Escríbeme por WhatsApp y te respondo al instante.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                >
                  Escribir ahora
                </button>
              </div>
              {/* Arrow */}
              <div className="absolute bottom-0 right-6 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow group"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform duration-200" />
          
          {/* Pulse animation rings */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
        </button>

        {/* Online status indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse">
          <div className="w-full h-full bg-green-600 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Mobile optimization - show text on larger screens */}
      <div className="hidden lg:block fixed bottom-6 right-20 z-40">
        <div className={`bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <p className="text-sm font-medium">¿Necesitas ayuda?</p>
          <p className="text-xs opacity-90">Respuesta inmediata</p>
        </div>
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default WhatsAppFloat
