import React, { useState } from 'react'
import { FaHeartbeat, FaLaptop, FaDumbbell, FaSpa, FaGraduationCap, FaWhatsapp, FaCalendarAlt, FaTimes, FaClock, FaTag, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      id: 1,
      title: "Rehabilitación de Lesiones",
      description: "Rehabilitación física basada en ciencias que va al origen real del dolor con enfoque multifactorial y evidencia científica.",
      icon: FaHeartbeat,
      price: "",
      duration: "45-60 min",
      image: "/service-rehabilitation.jpg",
      features: [
        "Enfoque multifactorial del dolor",
        "Tratamiento basado en evidencia científica",
        "Ejercicio terapéutico personalizado",
        "Evaluación física, emocional y biomecánica"
      ],
      detailedPricing: [
        { name: "Sesión individual", price: "", duration: "60 min" },
        { name: "Pack 4 sesiones", price: "", duration: "60 min c/u" },
        { name: "Pack 10 sesiones (Domicilio)", price: "", duration: "60 min c/u" },
        { name: "Pack 10 sesiones (Kutral)", price: "", duration: "60 min c/u" }
      ],
      includes: [
        "Evaluación multifactorial completa",
        "Ejercicio terapéutico como herramienta principal",
        "Enfoque en factores físicos, emocionales y del entorno",
        "Tratamiento personalizado con propósito"
      ]
    },
    {
      id: 2,
      title: "Planificación de Entrenamiento a Distancia",
      description: "Programas de entrenamiento personalizados que puedes realizar desde casa con seguimiento profesional continuo.",
      icon: FaLaptop,
      price: "",
      duration: "Programa mensual",
      image: "/service-online.jpg",
      features: [
        "Evaluación virtual inicial",
        "Programa personalizado",
        "Videos explicativos",
        "Seguimiento semanal"
      ],
      detailedPricing: [
        { name: "Plan mensual", price: "", duration: "30 días" },
        { name: "Plan trimestral", price: "", duration: "90 días" },
        { name: "Plan semestral", price: "", duration: "180 días" }
      ],
      includes: [
        "Rutina personalizada semanal",
        "Videos demostrativos",
        "Chat directo con el profesional",
        "Ajustes mensuales del programa"
      ]
    },
    {
      id: 3,
      title: "Entrenamientos Personalizados",
      description: "Combina kinesiología y entrenamiento en una sesión integral: calentamiento, rehabilitación, fuerza general y bloque metabólico personalizado.",
      icon: FaDumbbell,
      price: "Primera clase GRATIS",
      duration: "60 min",
      image: "/service-training.jpg",
      features: [
        "Bloque de calentamiento y preparación",
        "Rehabilitación de lesiones o molestias",
        "Entrenamiento de fuerza personalizado",
        "Bloque metabólico de alta intensidad"
      ],
      highlight: true,
      detailedPricing: [
        { name: "Primera clase", price: "GRATIS", duration: "60 min" },
        { name: "Sesión individual", price: "", duration: "60 min" },
        { name: "Plan mensual", price: "", duration: "4-12 sesiones" }
      ],
      trainingModes: [
        { mode: "1:1", name: "Individual", description: "Entrenamiento completamente personalizado" },
        { mode: "1:2", name: "Dupla", description: "Entrenamiento en pareja" },
        { mode: "1:3", name: "Trío", description: "Entrenamiento en grupo pequeño" }
      ],
      includes: [
        "Enfoque 100% personalizado basado en ciencia",
        "Activación y preparación articular",
        "Trabajo específico sobre lesiones/molestias",
        "Entrenamiento de fuerza y potencia",
        "Estímulo metabólico de alta intensidad"
      ]
    },
    {
      id: 4,
      title: "Recovery",
      description: "Sesiones de recuperación muscular con masaje terapéutico, pistola de percusión y sauna para optimizar tu rendimiento.",
      icon: FaSpa,
      price: "",
      duration: "45 min",
      image: "/service-recovery.jpg",
      features: [
        "Masaje terapéutico especializado",
        "Pistola de percusión profesional",
        "Sesiones de sauna",
        "Recuperación muscular integral"
      ],
      detailedPricing: [
        { name: "Sesión completa", price: "", duration: "45 min" },
        { name: "Solo masaje", price: "", duration: "30 min" },
        { name: "Solo sauna", price: "", duration: "20 min" },
        { name: "Pack 5 sesiones", price: "", duration: "45 min c/u" }
      ],
      includes: [
        "Masaje terapéutico especializado",
        "Terapia con pistola de percusión",
        "Acceso a sauna infrarroja",
        "Asesoría en recuperación"
      ]
    },
    {
      id: 5,
      title: "Talleres y Cursos de Capacitación",
      description: "Formación especializada para profesionales y entusiastas del deporte en prevención de lesiones y técnicas de recuperación.",
      icon: FaGraduationCap,
      price: "",
      duration: "Variable",
      image: "/service-workshops.jpg",
      features: [
        "Talleres grupales",
        "Capacitación profesional",
        "Certificación incluida",
        "Material didáctico"
      ],
      detailedPricing: [
        { name: "Taller grupal", price: "", duration: "3 horas" },
        { name: "Curso básico", price: "", duration: "8 horas" },
        { name: "Curso avanzado", price: "", duration: "16 horas" },
        { name: "Certificación profesional", price: "", duration: "32 horas" }
      ],
      includes: [
        "Material didáctico completo",
        "Certificado de participación",
        "Acceso a recursos online",
        "Seguimiento post-curso"
      ]
    }
  ]

  const handleWhatsAppClick = (serviceName) => {
    const phoneNumber = "56963352063"
    const message = `Hola! Me interesa el servicio de ${serviceName}. ¿Podrías darme más información?`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
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
    <section id="servicios" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="mr-2">⚡</span>
            Nuestros servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Soluciones{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">personalizadas</span>
            {' '}para ti
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Desde rehabilitación hasta entrenamiento de alto rendimiento 🏃‍♂️
          </p>
        </div>

        {/* Services Grid - Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div 
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col ${
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
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-green-100 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${
                    service.highlight 
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                      : 'bg-gradient-to-br from-gray-600 to-gray-800'
                  } rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {service.description.split('.')[0]}.
                  </p>
                  
                  <div className="mt-auto">
                    {/* Price Badge - Solo para servicios que no son highlight */}
                    {!service.highlight && (
                      <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                        service.highlight 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      } font-medium text-sm shadow-md`}>
                        {service.price}
                      </div>
                    )}

                    <button 
                      onClick={service.highlight ? handleScheduleClick : () => handleWhatsAppClick(service.title)}
                      className={`${service.highlight 
                        ? 'bg-black hover:bg-gray-800 text-white shadow-lg' 
                        : 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                      } font-medium py-4 px-6 rounded-2xl transition-all duration-300 text-sm tracking-wide w-full flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-xl`}
                    >
                      {service.highlight ? (
                        <>
                          <FaCalendarAlt />
                          Reservar
                        </>
                      ) : (
                        <>
                          <FaWhatsapp />
                          WhatsApp
                        </>
                      )}
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
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <FaWhatsapp />
                    Consultar por WhatsApp
                  </button>
                  {selectedService.highlight && (
                    <button 
                      onClick={() => {
                        handleScheduleClick()
                        closeModal()
                      }}
                      className="flex-1 bg-black hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <FaCalendarAlt />
                      Agendar Gratis
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
