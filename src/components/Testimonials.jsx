import React, { useState, useEffect } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "María González",
      age: 28,
      sport: "Runner",
      injury: "Lesión de rodilla",
      image: "/testimonial-maria.jpg",
      rating: 5,
      text: "Después de 6 meses sin poder correr por una lesión de rodilla, FISIOMOV me ayudó a recuperarme completamente. No solo volví a correr, sino que ahora lo hago mejor que antes. El enfoque personalizado y el seguimiento constante fueron clave en mi recuperación.",
      result: "Volvió a correr en 8 semanas",
      beforeAfter: {
        before: "No podía correr más de 5 minutos",
        after: "Completó su primera maratón post-lesión"
      },
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Reemplazar con video real
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
      }
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
      }
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
      }
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
      }
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000)
    return () => clearInterval(interval)
  }, [])

  const currentTest = testimonials[currentTestimonial]

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

        {/* Testimonials with Video */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Side */}
            <div className="relative">
              {!showVideo ? (
                <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video group cursor-pointer" onClick={() => setShowVideo(true)}>
                  <img 
                    src={currentTest.image}
                    alt={`Video testimonio ${currentTest.name}`}
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
                    <div className="w-20 h-20 bg-slate-700 bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </div>
                  
                  {/* Patient info overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-light text-lg">{currentTest.name}</p>
                    <p className="text-sm opacity-80">{currentTest.sport}</p>
                  </div>
                </div>
              ) : (
                <div className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentTest.videoUrl}
                    title={`Testimonio de ${currentTest.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="text-center lg:text-left">
              <div className="bg-slate-800 text-white p-8 rounded-lg">
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6 tracking-tight">
                  "{currentTest.text.split('.')[0]}."
                </blockquote>
                
                <div className="text-slate-300 text-sm tracking-wide mb-6">
                  — {currentTest.name}, {currentTest.sport}
                </div>

                <div className="border-t border-slate-600 pt-6">
                  <div className="text-slate-300 text-sm mb-2">Resultado:</div>
                  <div className="text-white font-medium">{currentTest.result}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index)
                  setShowVideo(false)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-slate-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
