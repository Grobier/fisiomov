import React, { useState } from 'react'
import { FaHeartbeat, FaLaptop, FaDumbbell, FaSpa, FaGraduationCap, FaWhatsapp, FaCalendarAlt, FaTimes, FaClock, FaTag, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      id: 1,
      title: "Rehabilitación",
      description: "Tu dolor no es normal, aunque lleves años convenciéndote de que sí. Aquí no te enchufo máquinas ni te vendo milagros: trabajamos contigo, en serio, para que vuelvas a moverte como antes (o mejor).",
      icon: FaHeartbeat,
      price: "",
      duration: "45-60 min",
      image: "/service-rehabilitation.jpg",
      features: [
        "Dejás de ser esclavo del dolor",
        "Entrenás sin miedo a romperte",
        "Sabés exactamente qué te pasa",
        "Te movés como querés, cuando querés"
      ],
      detailedPricing: [
        { name: "Sesión individual", price: "", duration: "60 min" },
        { name: "Pack 4 sesiones", price: "", duration: "60 min c/u" },
        { name: "Pack 10 sesiones (Domicilio)", price: "", duration: "60 min c/u" },
        { name: "Pack 10 sesiones (Kutral)", price: "", duration: "60 min c/u" }
      ],
      includes: [
        "Evaluación completa: cuerpo, mente y movimiento",
        "Ejercicio terapéutico real, no parloteo sin acción",
        "Te enseño a entender tu cuerpo para que no dependas de nadie",
        "Tratamiento serio con propósito claro: que te muevas mejor"
      ]
    },
    {
      id: 2,
      title: "Planificación a Distancia",
      description: "No importa si no puedes venir. Entrenas donde quieras, pero con un plan hecho para ti. Sin PDFs olvidados ni plantillas de Instagram. Aquí tienes un seguimiento de verdad, con ajustes y ojo clínico detrás.",
      icon: FaLaptop,
      price: "",
      duration: "Programa mensual",
      image: "/service-online.jpg",
      features: [
        "No más PDFs que nunca abrís",
        "Seguimiento real, no automatizado",
        "Cambios cuando tu cuerpo grita",
        "Entrenás donde quieras, como corresponde"
      ],
      detailedPricing: [
        { name: "Plan mensual", price: "", duration: "30 días" },
        { name: "Plan trimestral", price: "", duration: "90 días" },
        { name: "Plan semestral", price: "", duration: "180 días" }
      ],
      includes: [
        "Rutina hecha para vos, no para Instagram",
        "Videos que realmente explican, no decoran",
        "Hablas conmigo directamente, no con un algoritmo",
        "Cambios mensuales porque tu cuerpo evoluciona"
      ]
    },
    {
      id: 3,
      title: "Entrenamiento Personalizado",
      description: "No entrenes como un número en una lista. Aquí no hay rutinas de cajón ni clases masivas. Es entrenamiento real, a tu medida, para que consigas resultados sin romperte en el camino.",
      icon: FaDumbbell,
      price: "Primera clase GRATIS",
      duration: "60 min",
      image: "/service-training.jpg",
      features: [
        "No sos un número más en la lista",
        "Rehabilitación y entrenamiento juntos",
        "Resultados que ves, no promesas vacías",
        "Calidad real, no producción en masa"
      ],
      highlight: true,
      detailedPricing: [
        { name: "Primera clase", price: "GRATIS", duration: "60 min" },
        { name: "Sesión individual", price: "", duration: "60 min" },
        { name: "Plan mensual", price: "", duration: "4-12 sesiones" }
      ],
      trainingModes: [
        { mode: "1:1", name: "Individual", description: "Atención 100% en ti" },
        { mode: "1:2", name: "Dupla", description: "Para entrenar en pareja" },
        { mode: "1:3", name: "Trío", description: "Grupo reducido, sin perder calidad" }
      ],
      includes: [
        "Sesión tuya, basada en ciencia, no en influencers",
        "Preparación real antes de cargar peso",
        "Trabajo específico en lo que te duele",
        "Fuerza que usás en la vida real",
        "Intensidad que te saca de la mediocridad"
      ]
    },
    {
      id: 4,
      title: "Recovery",
      description: "¿Cansado, cargado, sin energía? No hace falta esperar a lesionarte para cuidarte. Sesiones de recuperación activa: masaje, descarga y técnicas que devuelven vida a tus músculos para rendir más y mejor.",
      icon: FaSpa,
      price: "",
      duration: "45 min",
      image: "/service-recovery.jpg",
      features: [
        "Recuperás rápido, no esperás a lesionarte",
        "Prevenís antes de que sea tarde",
        "Te sentís liviano, no cargado",
        "Rendís más, no acumulás fatiga"
      ],
      detailedPricing: [
        { name: "Sesión completa", price: "", duration: "45 min" },
        { name: "Solo masaje", price: "", duration: "30 min" },
        { name: "Solo sauna", price: "", duration: "20 min" },
        { name: "Pack 5 sesiones", price: "", duration: "45 min c/u" }
      ],
      includes: [
        "Masaje que realmente descontractura",
        "Pistola de percusión que funciona",
        "Sauna infrarroja para recuperación real",
        "Consejos que aplicás, no que olvidás"
      ]
    }
  ]

  const handleWhatsAppClick = (serviceName) => {
    const phoneNumber = "56963352063" // Formato: código país + número sin +
    const message = `Hola! Me interesa el servicio de ${serviceName}. ¿Podrías darme más información?`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Debug: log the URL to console
    console.log('WhatsApp URL:', url)
    console.log('Service name:', serviceName)
    
    // Try to open WhatsApp
    try {
      window.open(url, '_blank')
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
      // Fallback: try direct link
      window.location.href = url
    }
  }

  const handleScheduleClick = () => {
    const calendarUrl = "https://calendar.app.google/ofAAA1auXWNjXKh59"
    window.open(calendarUrl, '_blank')
  }

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section id="servicios" className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
            <span className="mr-2">⚡</span>
            Cómo trabajo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            ¿Sigues entrenando con{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">dolor</span>
            {' '}o dejaste todo tirado?
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Aquí no hay atajos ni promesas vacías. Solo trabajo real para que te muevas mejor, entrenes sin miedo y rindas como querés.
          </p>
        </div>

        {/* Services Grid - Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div 
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col ${
                  service.highlight ? 'ring-2 ring-green-400 ring-opacity-50' : ''
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50' 
                    : 'bg-gradient-to-br from-gray-50 to-white'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ¡GRATIS! 🎉
                  </div>
                )}
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-green-100 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${
                    service.highlight 
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                      : 'bg-gradient-to-br from-gray-600 to-gray-800'
                  } rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-gray-800 transition-colors text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {service.description.split('.')[0]}.
                  </p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleServiceClick(service)
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-2xl transition-all duration-300 text-sm tracking-wide w-full flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-xl"
                    >
                      Ver más
                    </button>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute -inset-0.5 ${
                  service.highlight 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-600'
                } rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
              </div>
            )
          })}
        </div>

        {/* Cierre Final */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-center shadow-2xl mt-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ya sabés lo que necesitás. <br className="hidden md:block"/>
            Ahora solo falta que lo hagas.
          </h3>
          <p className="text-gray-300 text-base mb-6 max-w-2xl mx-auto">
            No vas a cambiar nada esperando el momento perfecto. Ese momento no existe. 
            <br/>Escribime ahora y empezamos.
          </p>
          <button 
            onClick={() => handleWhatsAppClick('un servicio')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-base flex items-center justify-center gap-3 mx-auto shadow-xl transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            Hablemos por WhatsApp
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${
                      selectedService.highlight 
                        ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-800'
                    } rounded-2xl flex items-center justify-center shadow-lg`}>
                      <selectedService.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                      <p className="text-gray-600 text-sm">{selectedService.duration}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FaTimes className="text-gray-500 text-xl" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-6">
                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedService.description}</p>
                </div>

                {/* Pricing Options */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaTag className="text-green-500" />
                    Opciones de Precios
                  </h4>
                  <div className="grid gap-4">
                    {selectedService.detailedPricing.map((option, index) => (
                      <div key={index} className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-gray-900">{option.name}</h5>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <FaClock />
                              <span>{option.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-green-600">{option.price}</div>
                            {option.discount && (
                              <div className="text-sm text-green-500 font-medium">{option.discount}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    ¿Qué incluye?
                  </h4>
                  <div className="grid gap-3">
                    {selectedService.includes.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheckCircle className="text-green-500 text-sm" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training Modes - Solo para Entrenamientos Personalizados */}
                {selectedService.trainingModes && (
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaDumbbell className="text-green-500" />
                      Modalidades de Entrenamiento
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedService.trainingModes.map((mode, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 text-center">
                          <div className="text-2xl font-bold text-green-600 mb-2">{mode.mode}</div>
                          <div className="text-lg font-semibold text-gray-900 mb-1">{mode.name}</div>
                          <div className="text-sm text-gray-600">{mode.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      handleWhatsAppClick(selectedService.title)
                      closeModal()
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm"
                  >
                    <FaWhatsapp />
                    {selectedService.id === 1 && 'Escríbeme por WhatsApp'}
                    {selectedService.id === 2 && 'Quiero mi plan'}
                    {selectedService.id === 3 && 'Escríbeme por WhatsApp'}
                    {selectedService.id === 4 && 'Agenda tu Recovery'}
                  </button>
                  {selectedService.highlight && (
                    <button 
                      onClick={() => {
                        handleScheduleClick()
                        closeModal()
                      }}
                      className="flex-1 bg-black hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm"
                    >
                      <FaCalendarAlt />
                      Reserva tu cupo (Gratis)
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Services
