import React from 'react'
import { FaRunning, FaShieldAlt, FaClock, FaTrophy, FaHeart, FaDumbbell } from 'react-icons/fa'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Mejora tu Movilidad",
      description: "Recupera y aumenta tu rango de movimiento con técnicas especializadas que te permitirán moverte sin restricciones.",
      icon: FaRunning,
      gradient: "from-blue-400 to-cyan-500",
      stats: "95% mejora",
      emoji: "🏃‍♂️"
    },
    {
      id: 2,
      title: "Recuperación Rápida",
      description: "Acelera tu proceso de rehabilitación con tratamientos personalizados y seguimiento continuo de tu progreso.",
      icon: FaClock,
      gradient: "from-green-400 to-emerald-500",
      stats: "50% más rápido",
      emoji: "⚡"
    },
    {
      id: 3,
      title: "Prevención de Recaídas",
      description: "Fortalece tu cuerpo y aprende técnicas que te ayudarán a evitar futuras lesiones y mantener tu salud a largo plazo.",
      icon: FaShieldAlt,
      gradient: "from-purple-400 to-pink-500",
      stats: "80% menos recaídas",
      emoji: "🛡️"
    },
    {
      id: 4,
      title: "Mejora del Rendimiento",
      description: "Optimiza tu capacidad física y deportiva con programas diseñados para potenciar tu rendimiento al máximo.",
      icon: FaTrophy,
      gradient: "from-yellow-400 to-orange-500",
      stats: "40% mejor rendimiento",
      emoji: "🏆"
    },
    {
      id: 5,
      title: "Confianza al Entrenar",
      description: "Recupera la seguridad en ti mismo y vuelve a disfrutar del deporte sin miedo a lesionarte nuevamente.",
      icon: FaHeart,
      gradient: "from-red-400 to-pink-500",
      stats: "90% más confianza",
      emoji: "💪"
    },
    {
      id: 6,
      title: "Flexibilidad Mejorada",
      description: "Aumenta tu flexibilidad y elasticidad muscular para movimientos más fluidos y naturales.",
      icon: FaRunning,
      gradient: "from-indigo-400 to-purple-500",
      stats: "85% más flexible",
      emoji: "🤸‍♂️"
    },
    {
      id: 7,
      title: "Fuerza Funcional",
      description: "Desarrolla fuerza específica para tus actividades diarias y deportivas favoritas.",
      icon: FaDumbbell,
      gradient: "from-slate-400 to-slate-600",
      stats: "70% más fuerte",
      emoji: "💪"
    },
    {
      id: 8,
      title: "Equilibrio y Coordinación",
      description: "Mejora tu equilibrio y coordinación para movimientos más precisos y seguros.",
      icon: FaHeart,
      gradient: "from-teal-400 to-blue-500",
      stats: "90% mejor equilibrio",
      emoji: "⚖️"
    }
  ]

  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-4 tracking-tight">
            Beneficios
          </h2>
        </div>

        {/* Modern Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.slice(0, 8).map((benefit, index) => {
            const IconComponent = benefit.icon
            
            return (
              <div 
                key={benefit.id}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gray-50 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                
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

        {/* Call to Action Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-slate-700">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-10 rounded-2xl mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Listo para transformar tu cuerpo?
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Únete a cientos de personas que ya han experimentado estos increíbles beneficios
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <span>🚀</span>
                Comenzar Ahora
              </button>
              <button 
                onClick={() => document.querySelector('#testimonios').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Ver Testimonios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
