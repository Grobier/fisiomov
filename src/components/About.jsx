import React from 'react'
import { FaGraduationCap, FaAward, FaUsers, FaClock, FaHeart, FaLinkedin, FaInstagram } from 'react-icons/fa'

const About = () => {
  const credentials = [
    {
      title: "Kinesiólogo Titulado",
      institution: "Universidad de Chile",
      year: "2018",
      icon: FaGraduationCap
    },
    {
      title: "Especialización en Deporte",
      institution: "Instituto Nacional del Deporte",
      year: "2020",
      icon: FaAward
    },
    {
      title: "Certificación Recovery",
      institution: "International Recovery Institute",
      year: "2021",
      icon: FaAward
    },
    {
      title: "Curso Terapia Manual",
      institution: "Escuela de Osteopatía",
      year: "2022",
      icon: FaAward
    }
  ]

  const stats = [
    {
      number: "500+",
      label: "Pacientes atendidos",
      icon: FaUsers
    },
    {
      number: "5+",
      label: "Años de experiencia",
      icon: FaClock
    },
    {
      number: "95%",
      label: "Tasa de éxito",
      icon: FaHeart
    },
    {
      number: "24/7",
      label: "Soporte disponible",
      icon: FaClock
    }
  ]

  const philosophy = [
    {
      title: "Enfoque Personalizado",
      description: "Cada persona es única, por eso cada tratamiento es diseñado específicamente para tus necesidades y objetivos.",
      icon: "🎯"
    },
    {
      title: "Educación del Paciente",
      description: "Te enseño no solo a recuperarte, sino a entender tu cuerpo para prevenir futuras lesiones.",
      icon: "📚"
    },
    {
      title: "Seguimiento Continuo",
      description: "Mi compromiso contigo no termina en la consulta. Te acompaño en todo tu proceso de recuperación.",
      icon: "🤝"
    },
    {
      title: "Innovación Constante",
      description: "Me mantengo actualizado con las últimas técnicas y tecnologías en fisioterapia y rehabilitación.",
      icon: "🚀"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="mr-2">👨‍⚕️</span>
            Conoce al experto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Tu{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">kinesiólogo</span>
            {' '}de confianza
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experiencia, pasión y resultados comprobados ✨
          </p>
        </div>

        {/* Modern About Content */}
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                [Tu Nombre]
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Kinesiólogo especializado en rehabilitación deportiva con más de 5 años transformando vidas a través del movimiento y la recuperación integral.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">500+</span>
                </div>
                <div className="text-sm font-medium text-gray-900">Pacientes</div>
                <div className="text-xs text-gray-500">Recuperados</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">5+</span>
                </div>
                <div className="text-sm font-medium text-gray-900">Años</div>
                <div className="text-xs text-gray-500">Experiencia</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
                <div className="text-sm font-medium text-gray-900">Satisfacción</div>
                <div className="text-xs text-gray-500">Garantizada</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">24/7</span>
                </div>
                <div className="text-sm font-medium text-gray-900">Disponible</div>
                <div className="text-xs text-gray-500">Para ti</div>
              </div>
            </div>
          </div>

          {/* Credentials Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Título Profesional</h4>
              <p className="text-gray-600 text-sm">Kinesiólogo Universidad de Chile</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Especialización</h4>
              <p className="text-gray-600 text-sm">Rehabilitación Deportiva</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl">📜</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certificaciones</h4>
              <p className="text-gray-600 text-sm">Terapia Manual Avanzada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
