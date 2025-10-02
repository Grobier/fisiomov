import React from 'react'
import { FaRunning, FaShieldAlt, FaClock, FaTrophy, FaHeart, FaDumbbell } from 'react-icons/fa'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Recuperación Rápida",
      description: "Acelera tu proceso de rehabilitación con tratamientos personalizados y seguimiento continuo de tu progreso.",
      icon: FaClock,
      gradient: "from-blue-500 to-blue-600",
      stats: "50% más rápido",
      emoji: "⚡"
    },
    {
      id: 2,
      title: "Prevención de Recaídas",
      description: "Fortalece tu cuerpo y aprende técnicas que te ayudarán a evitar futuras lesiones y mantener tu salud a largo plazo.",
      icon: FaShieldAlt,
      gradient: "from-blue-500 to-blue-600",
      stats: "80% menos recaídas",
      emoji: "🛡️"
    },
    {
      id: 3,
      title: "Mejora del Rendimiento",
      description: "Optimiza tu capacidad física y deportiva con programas diseñados para potenciar tu rendimiento al máximo.",
      icon: FaTrophy,
      gradient: "from-blue-500 to-blue-600",
      stats: "40% mejor rendimiento",
      emoji: "🏆"
    },
    {
      id: 4,
      title: "Confianza al Entrenar",
      description: "Recupera la seguridad en ti mismo y vuelve a disfrutar del deporte sin miedo a lesionarte nuevamente.",
      icon: FaHeart,
      gradient: "from-blue-500 to-blue-600",
      stats: "90% más confianza",
      emoji: "💪"
    }
  ]

  return (
    <section id="beneficios" className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-4 tracking-tight">
            Beneficios
          </h2>
        </div>

        {/* Modern Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            
            return (
              <div 
                key={benefit.id}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gray-50 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Emoji & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{benefit.emoji}</div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-white text-lg" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {benefit.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${benefit.gradient} text-white text-xs font-medium shadow-md`}>
                    {benefit.stats}
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
