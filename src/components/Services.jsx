import React from 'react'
import { FaHeartbeat, FaLaptop, FaDumbbell, FaSpa, FaGraduationCap, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Rehabilitación de Lesiones",
      description: "Recuperación integral de lesiones deportivas y traumatológicas con técnicas especializadas y seguimiento personalizado.",
      icon: FaHeartbeat,
      price: "Desde $35.000",
      duration: "45-60 min",
      image: "/service-rehabilitation.jpg",
      features: [
        "Evaluación kinesiológica completa",
        "Plan de tratamiento personalizado",
        "Técnicas de terapia manual",
        "Ejercicios de rehabilitación"
      ]
    },
    {
      id: 2,
      title: "Planificación de Entrenamiento a Distancia",
      description: "Programas de entrenamiento personalizados que puedes realizar desde casa con seguimiento profesional continuo.",
      icon: FaLaptop,
      price: "Desde $25.000",
      duration: "Programa mensual",
      image: "/service-online.jpg",
      features: [
        "Evaluación virtual inicial",
        "Programa personalizado",
        "Videos explicativos",
        "Seguimiento semanal"
      ]
    },
    {
      id: 3,
      title: "Entrenamientos Personalizados",
      description: "Sesiones individuales adaptadas a tus objetivos específicos con la opción de agendar una clase completamente gratis.",
      icon: FaDumbbell,
      price: "Primera clase GRATIS",
      duration: "60 min",
      image: "/service-training.jpg",
      features: [
        "Evaluación física completa",
        "Programa de ejercicios específico",
        "Corrección de técnica",
        "Progresión gradual"
      ],
      highlight: true
    },
    {
      id: 4,
      title: "Recovery",
      description: "Sesiones de recuperación muscular con técnicas avanzadas para optimizar tu rendimiento y prevenir lesiones.",
      icon: FaSpa,
      price: "Desde $30.000",
      duration: "45 min",
      image: "/service-recovery.jpg",
      features: [
        "Masaje deportivo",
        "Liberación miofascial",
        "Técnicas de relajación",
        "Crioterapia y termoterapia"
      ]
    },
    {
      id: 5,
      title: "Talleres y Cursos de Capacitación",
      description: "Formación especializada para profesionales y entusiastas del deporte en prevención de lesiones y técnicas de recuperación.",
      icon: FaGraduationCap,
      price: "Consultar",
      duration: "Variable",
      image: "/service-workshops.jpg",
      features: [
        "Talleres grupales",
        "Capacitación profesional",
        "Certificación incluida",
        "Material didáctico"
      ]
    }
  ]

  const handleWhatsAppClick = (serviceName) => {
    const phoneNumber = "56912345678"
    const message = `Hola! Me interesa el servicio de ${serviceName}. ¿Podrías darme más información?`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleScheduleClick = () => {
    const calendarUrl = "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
    window.open(calendarUrl, '_blank')
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.slice(0, 3).map((service) => {
            const IconComponent = service.icon
            return (
              <div 
                key={service.id}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
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
                <div className="relative z-10">
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
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description.split('.')[0]}.
                  </p>
                  
                  {/* Price Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                    service.highlight 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  } font-medium text-sm shadow-md`}>
                    {service.price}
                  </div>

                  <button 
                    onClick={service.highlight ? handleScheduleClick : () => handleWhatsAppClick(service.title)}
                    className={`${service.highlight 
                      ? 'bg-black hover:bg-gray-800 text-white shadow-lg' 
                      : 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                    } font-medium py-4 px-8 rounded-2xl transition-all duration-300 text-sm tracking-wide w-full flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-xl`}
                  >
                    {service.highlight ? (
                      <>
                        <FaCalendarAlt />
                        Agenda gratis
                      </>
                    ) : (
                      <>
                        <FaWhatsapp />
                        WhatsApp
                      </>
                    )}
                  </button>
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

      </div>
    </section>
  )
}

export default Services
