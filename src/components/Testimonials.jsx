import React, { useState } from 'react'
import { FaQuoteLeft, FaStar, FaPlay } from 'react-icons/fa'

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null)

  const testimonials = [
    {
      id: 1,
      name: "Fran",
      age: 30,
      sport: "Atleta",
      injury: "Recuperación muscular",
      image: "/testimonial-fran.jpg",
      rating: 5,
      text: "El servicio de Recovery de FISIOMOV ha sido fundamental en mi proceso de recuperación. Las sesiones con masaje, pistola de percusión y sauna me han ayudado a recuperarme más rápido y entrenar sin dolor.",
      result: "Recuperación muscular óptima",
      beforeAfter: {
        before: "Dolor y tensión muscular constante",
        after: "Entrenamiento sin molestias y mejor rendimiento"
      },
      videoUrl: "https://www.youtube.com/embed/gF3dE9EvVIk"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      age: 35,
      sport: "Fútbol",
      injury: "Desgarro muscular",
      image: "/testimonial-carlos.jpg",
      rating: 5,
      text: "El tratamiento fue excepcional. Tuve un desgarro en el isquiotibial y pensé que no volvería a jugar fútbol. El kinesiólogo de FISIOMOV no solo me recuperó físicamente, sino que me dio la confianza para volver a la cancha sin miedo.",
      result: "Regresó al fútbol competitivo",
      beforeAfter: {
        before: "Dolor constante al caminar",
        after: "Juega 90 minutos sin molestias"
      },
      videoUrl: "https://www.youtube.com/embed/example2"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      age: 42,
      sport: "Fitness",
      injury: "Dolor lumbar crónico",
      image: "/testimonial-ana.jpg",
      rating: 5,
      text: "Llevaba años con dolor lumbar que limitaba todas mis actividades. Los ejercicios personalizados y las técnicas de FISIOMOV me cambiaron la vida. Ahora puedo entrenar sin dolor y he mejorado mi postura completamente.",
      result: "Eliminó el dolor lumbar crónico",
      beforeAfter: {
        before: "Dolor diario nivel 7/10",
        after: "Sin dolor, entrena 5 días a la semana"
      },
      videoUrl: "https://www.youtube.com/embed/example3"
    },
    {
      id: 4,
      name: "Diego Silva",
      age: 24,
      sport: "Ciclismo",
      injury: "Tendinitis rotuliana",
      image: "/testimonial-diego.jpg",
      rating: 5,
      text: "La tendinitis me tenía alejado de la bicicleta por meses. El programa de rehabilitación fue progresivo y muy efectivo. Ahora no solo puedo pedalear sin dolor, sino que mi rendimiento ha mejorado significativamente.",
      result: "Mejoró su rendimiento en ciclismo",
      beforeAfter: {
        before: "No podía pedalear más de 30 minutos",
        after: "Completó 100km sin molestias"
      },
      videoUrl: "https://www.youtube.com/embed/example4"
    },
    {
      id: 5,
      name: "Patricia López",
      age: 38,
      sport: "Yoga/Pilates",
      injury: "Lesión de hombro",
      image: "/testimonial-patricia.jpg",
      rating: 5,
      text: "Mi lesión de hombro me impedía hacer las posturas que más amaba en yoga. El enfoque integral de FISIOMOV, combinando terapia manual con ejercicios específicos, me devolvió la movilidad completa. Ahora soy instructora de yoga sin limitaciones.",
      result: "Recuperó movilidad completa del hombro",
      beforeAfter: {
        before: "Movilidad limitada a 90 grados",
        after: "Movilidad completa, es instructora de yoga"
      },
      videoUrl: "https://www.youtube.com/embed/example5"
    },
    {
      id: 6,
      name: "Roberto Martínez",
      age: 28,
      sport: "Crossfit",
      injury: "Lesión de muñeca",
      image: "/testimonial-roberto.jpg",
      rating: 5,
      text: "Mi lesión de muñeca me tenía fuera del box por meses. El tratamiento de FISIOMOV fue integral: rehabilitación específica, ejercicios de fortalecimiento y técnicas de prevención. Ahora no solo puedo hacer todos los movimientos, sino que mi técnica mejoró significativamente.",
      result: "Regresó al Crossfit con mejor técnica",
      beforeAfter: {
        before: "No podía hacer flexiones ni dominadas",
        after: "Completa WODs sin dolor, técnica mejorada"
      },
      videoUrl: "https://www.youtube.com/embed/example6"
    }
  ]

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-700 to-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="mr-2">⭐</span>
            Historias reales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">pacientes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Casos reales de transformación y recuperación 💪
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Video Section */}
              <div className="mb-6">
                {playingVideo === testimonial.id ? (
                  <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={testimonial.videoUrl}
                      title={`Testimonio de ${testimonial.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ) : (
                  <div 
                    className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video group cursor-pointer" 
                    onClick={() => setPlayingVideo(testimonial.id)}
                  >
                    <img 
                      src={testimonial.image}
                      alt={`Video testimonio ${testimonial.name}`}
                      className="w-full h-full object-cover opacity-60"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Fallback background */}
                    <div className="hidden w-full h-full bg-slate-800 items-center justify-center">
                      <div className="text-white text-center">
                        <FaPlay className="text-4xl mx-auto mb-4" />
                        <p className="text-lg">Video Testimonio</p>
                      </div>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-slate-700 bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                    
                    {/* Patient info overlay */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs opacity-80">{testimonial.sport}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-center mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </blockquote>

              {/* Patient Info */}
              <div className="text-center mb-4">
                <div className="font-semibold text-gray-900 text-base">{testimonial.name}</div>
                <div className="text-gray-600 text-xs mb-1">{testimonial.sport} • {testimonial.age} años</div>
                <div className="text-green-600 font-medium text-xs">{testimonial.result}</div>
              </div>

              {/* Before/After */}
              <div className="pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-red-600 font-medium mb-1">Antes:</div>
                    <div className="text-gray-600">{testimonial.beforeAfter.before}</div>
                  </div>
                  <div>
                    <div className="text-green-600 font-medium mb-1">Después:</div>
                    <div className="text-gray-600">{testimonial.beforeAfter.after}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
