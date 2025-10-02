import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "56963352063"
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

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float-container fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
        {/* Main WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-float bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow group"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp size={24} className="sm:text-2xl group-hover:scale-110 transition-transform duration-200" />
          
          {/* Pulse animation rings */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping pointer-events-none" style={{ animationDelay: '1s' }}></div>
        </button>

        {/* Online status indicator */}
        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full animate-pulse pointer-events-none">
          <div className="w-full h-full bg-green-600 rounded-full animate-ping pointer-events-none"></div>
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
        
        /* Mobile-specific fixes */
        @media (max-width: 768px) {
          .whatsapp-float {
            z-index: 9999 !important;
            position: fixed !important;
            bottom: 16px !important;
            right: 16px !important;
            width: 56px !important;
            height: 56px !important;
            min-width: 56px !important;
            min-height: 56px !important;
          }
          
          .animate-ping,
          .animate-bounce {
            pointer-events: none !important;
            z-index: -1 !important;
          }
          
          /* Ensure button is not clipped by viewport */
          .whatsapp-float-container {
            position: fixed !important;
            bottom: 16px !important;
            right: 16px !important;
            z-index: 9999 !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </>
  )
}

export default WhatsAppFloat
