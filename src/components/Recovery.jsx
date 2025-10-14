import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Star, ArrowLeft, X, Maximize2, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Recovery = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleBackClick = () => {
    navigate('/');
  };

  const handleWhatsAppClick = (serviceName) => {
    const phoneNumber = "56963352063"
    let message = ""
    
    switch(serviceName) {
      case 'cyberday':
        message = "Hola! Quiero aprovechar la oferta CYBERDAY ESPECIAL de $20.000 (Masaje + Pistola + Sauna). ¿Cuándo podemos agendar?"
        break;
      case 'basico':
        message = "Hola! Quiero contratar el Plan Recovery Básico ($39.990/mes - 4 sesiones). ¿Cuándo podemos agendar?"
        break;
      case 'plus':
        message = "Hola! Quiero contratar el Plan Recovery Plus ($59.990/mes - 8 sesiones). ¿Cuándo podemos agendar?"
        break;
      case 'ilimitado':
        message = "Hola! Quiero contratar el Plan Recovery Ilimitado ($79.990/mes - Acceso libre al sauna + masaje mensual + punción seca gratis). ¿Cuándo podemos agendar?"
        break;
      case 'sauna_unica':
        message = "Hola! Quiero reservar una sesión única de Sauna ($20.000 - 20 min). ¿Cuándo podemos agendar?"
        break;
      case 'recovery_unico':
        message = "Hola! Quiero reservar una sesión única de Recovery ($33.000 - Masaje Manual + Pistola de Percusión + Sauna - 60 min). ¿Cuándo podemos agendar?"
        break;
      default:
        message = "Hola! Quiero reservar una sesión. ¿Cuándo podemos agendar?"
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackClick}
              className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Home className="w-5 h-5" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center flex-1 mx-4">FISIOMOVE RECOVERY</h1>
            <div className="w-10"></div> {/* Spacer */}
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Línea gradiente superior */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"
          ></motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Recupera tu cuerpo después de entrenar
          </motion.h1>
          
          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto space-y-2"
          >
            <p>Masaje manual, pistola de percusión y sauna en una sola sesión.</p>
            <p>Relaja tus músculos y mejora tu rendimiento.</p>
          </motion.div>
          
          {/* Botón CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={() => handleWhatsAppClick('default')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
          >
            Reserva tu sesión
          </motion.button>

          {/* Texto de oferta */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-sm text-gray-600"
          >
            Oferta válida hasta el <span className="text-blue-600 font-semibold">11 de octubre</span>
          </motion.p>
        </div>
      </motion.section>

      {/* Video Testimonial Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
                    <p className="text-lg text-gray-600">
                      Mira cómo nuestros servicios han transformado la recuperación de nuestros clientes
                    </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Video container */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/ZCMvj5FOS44?rel=0&modestbranding=1&showinfo=0"
                        title="Testimonio Recovery - FISIOMOVEE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
            </div>

            {/* Video overlay info */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                        <span className="text-sm font-medium">Testimonio Recovery</span>
              </div>
            </div>
          </motion.div>

          {/* Call to action después del video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-gray-600 mb-4">
              ¿Quieres experimentar los mismos resultados?
            </p>
            <button
              onClick={() => handleWhatsAppClick('default')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reserva tu sesión ahora
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Instagram Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testimonios Reales de Instagram
            </h2>
            <p className="text-lg text-gray-600">
              Lo que nuestros clientes dicen sobre nuestros servicios
            </p>
          </motion.div>

          {/* Instagram Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src="images/testimonials/testimonio0.png"
                  alt="Testimonio de cliente en Instagram"
                  className="w-full h-auto object-cover"
                />
                {/* Botón para ampliar imagen */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  title="Ver imagen completa"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              
              {/* Testimonio Info */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cliente Satisfecha</h4>
                    <p className="text-sm text-gray-500">Servicio: Sauna + Masaje</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "Hola Lore, espero estés bien. Quiero darte las gracias por la atención de hoy, quede como nueva luego del sauna, estaba un poco asustada pero me acompañaste bkn, además complementado con el masaje de cuerpo entero, me dejaste wow!!! 🤩 Mil gracias porque el servicio que das Lore, que además siempre aprendo algo nuevo de ti. ✨"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500">5.0 ⭐</span>
                </div>
              </div>
            </motion.div>

            {/* Placeholder para futuros testimonios */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[400px] hover:border-blue-400 transition-colors duration-300"
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Más testimonios próximamente</h3>
                <p className="text-sm text-gray-500">Seguimos recibiendo feedback positivo de nuestros clientes</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[400px] hover:border-blue-400 transition-colors duration-300"
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Más testimonios próximamente</h3>
                <p className="text-sm text-gray-500">Seguimos recibiendo feedback positivo de nuestros clientes</p>
              </div>
            </motion.div>
          </div>

          {/* Call to action después de testimonios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6 text-lg">
              ¿Quieres ser el próximo en compartir tu experiencia?
            </p>
            <button
              onClick={() => handleWhatsAppClick('default')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reserva tu sesión ahora
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h3>
            <p className="text-xl text-gray-600">Elige el servicio que mejor se adapte a tus necesidades</p>
          </motion.div>

          {/* Cyberday Special Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/30 to-blue-700/30 backdrop-blur-sm text-gray-900 rounded-xl p-6 mb-12 shadow-lg border border-blue-200/50"
          >
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-blue-200">
                🔥 CYBERDAY ESPECIAL
              </div>
              <h3 className="text-2xl font-bold mb-2">Masaje Manual + Pistola de Percusión + Sauna</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-4xl font-bold">$20.000</div>
                <div className="text-xl line-through opacity-75">$64.000</div>
              </div>
              <p className="text-lg mb-4">¡Ahorras $44.000! Oferta válida solo por Cyberday</p>
              <button
                onClick={() => handleWhatsAppClick('cyberday')}
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ¡Aprovechar Oferta!
              </button>
            </div>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
            {[
              {
                title: "Sauna Única",
                subtitle: "Solo Sauna",
                price: "$20.000",
                duration: "20 min",
                description: "Sesión única de sauna para recuperación",
                features: [
                  "Sauna de 20 minutos",
                  "Sesión única",
                  "Recuperación inmediata"
                ],
                buttonText: "Reservar Sesión",
                buttonAction: 'sauna_unica'
              },
              {
                title: "CYBERDAY ESPECIAL",
                subtitle: "Sauna + Masaje + Pistola",
                price: "$20.000",
                originalPrice: "$33.000",
                duration: "60 min",
                description: "¡Ahorras $13.000! Oferta válida solo por Cyberday",
                features: [
                  "Masaje Manual (20 min)",
                  "Pistola de Percusión (20 min)",
                  "Sauna (20 min)"
                ],
                specialMessage: "¡No volverá a estar así de bajo!",
                highlight: true,
                buttonText: "¡Aprovechar Oferta!",
                buttonAction: 'cyberday'
              },
              {
                title: "Recovery Único",
                subtitle: "Masaje + Pistola + Sauna",
                price: "$33.000",
                duration: "60 min",
                description: "Sesión única completa: Masaje Manual + Pistola de Percusión + Sauna",
                features: [
                  "Masaje Manual (20 min)",
                  "Pistola de Percusión (20 min)",
                  "Sauna (20 min)",
                  "Recuperación total"
                ],
                buttonText: "Reservar Sesión",
                buttonAction: 'recovery_unico'
              },
              {
                title: "Sauna Básico",
                subtitle: "Solo Sauna",
                price: "$39.990",
                duration: "4 sesiones/mes",
                description: "Relaja tu cuerpo después de entrenar",
                features: [
                  "1 sesión de sauna semanal (4 al mes)",
                  "20 min cada una",
                  "Ahorra $40.000",
                  "**Valor por sesión: $9.997**"
                ],
                buttonText: "Reservar Plan",
                buttonAction: 'basico'
              },
              {
                title: "Sauna Plus",
                subtitle: "Solo Sauna",
                price: "$59.990",
                duration: "8 sesiones/mes",
                description: "Duplica tu recuperación y rinde más",
                features: [
                  "2 sesiones de sauna semanales (8 al mes)",
                  "20 min cada una",
                  "Ahorra $100.000",
                  "**Valor por sesión: $7.498**"
                ],
                buttonText: "Reservar Plan",
                buttonAction: 'plus'
              },
              {
                title: "Recovery Ilimitado",
                subtitle: "Sauna + Masaje + Punción Seca",
                price: "$79.990",
                duration: "Ilimitado",
                description: "Acceso libre al sauna post entrenamiento",
                features: [
                  "Acceso libre al sauna",
                  "1 masaje de descarga mensual",
                  "1 sesión de punción seca gratis",
                  "Ahorro potencial +$200.000",
                  "**Valor por sesión: $2.649**"
                ],
                buttonText: "Reservar Plan",
                buttonAction: 'ilimitado',
                mostPopular: true
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col relative ${
                  service.highlight 
                    ? service.packStyle
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 border-orange-400'
                      : 'bg-gradient-to-br from-red-500 to-pink-500 border-red-400'
                    : service.mostPopular
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-blue-400'
                      : 'bg-white border-gray-200'
                }`}
              >
                {/* Cinta Cyberday */}
                {service.highlight && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform rotate-12 z-10">
                    🔥 CYBERDAY
                  </div>
                )}
                
                {/* Cinta Más Popular */}
                {service.mostPopular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 z-10">
                    ⭐ MÁS POPULAR
                  </div>
                )}
                <div className="text-center mb-4">
                  <h4 className={`text-lg font-bold mb-1 ${
                    service.highlight || service.mostPopular ? 'text-white' : 'text-gray-900'
                  }`}>{service.title}</h4>
                  {service.subtitle && (
                    <p className={`text-sm font-medium mb-2 ${
                      service.highlight ? 'text-white/80' : service.mostPopular ? 'text-white/90' : 'text-blue-600'
                    }`}>{service.subtitle}</p>
                  )}
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className={`text-2xl font-bold ${
                      service.highlight || service.mostPopular ? 'text-white' : 'text-blue-600'
                    }`}>{service.price}</div>
                    {service.originalPrice && (
                      <div className={`text-sm line-through ${
                        service.highlight ? 'text-white/80' : 'text-gray-500'
                      }`}>{service.originalPrice}</div>
                    )}
                  </div>
                  <div className={`flex items-center justify-center text-sm ${
                    service.highlight || service.mostPopular ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <p className={`mb-3 text-center text-sm ${
                  service.highlight || service.mostPopular ? 'text-white/90' : 'text-gray-600'
                }`}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-xs ${
                      service.highlight || service.mostPopular ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      <Check className={`w-3 h-3 mr-2 flex-shrink-0 ${
                        service.highlight || service.mostPopular ? 'text-white' : 'text-green-500'
                      }`} />
                      <span dangerouslySetInnerHTML={{ 
                        __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
                
                {/* Mensaje especial destacado para Cyberday */}
                {service.specialMessage && (
                  <li className={`flex items-center text-xs mt-3 mb-4 ${
                    service.highlight ? 'text-yellow-200' : 'text-gray-700'
                  }`}>
                    <Star className={`w-3 h-3 mr-2 flex-shrink-0 ${
                      service.highlight ? 'text-yellow-300' : 'text-yellow-500'
                    }`} />
                    <span className="font-semibold text-xs">{service.specialMessage}</span>
                  </li>
                )}
                <button
                  onClick={() => handleWhatsAppClick(service.buttonAction)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${service.mostPopular ? 'mt-6' : 'mt-auto'} whitespace-nowrap ${
                    service.highlight
                      ? 'bg-white text-red-600 hover:bg-gray-100'
                      : service.mostPopular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {service.buttonText}
                </button>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para recuperar tu cuerpo?</h3>
          <p className="text-xl mb-8">
            No esperes más. Reserva tu sesión y comienza a sentir la diferencia desde hoy.
          </p>
          <button
            onClick={() => handleWhatsAppClick('default')}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Reservar Mi Sesión
          </button>
        </div>
      </motion.section>

      {/* Modal para imagen ampliada */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Testimonio Completo - Instagram
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Imagen ampliada */}
            <div className="p-4">
              <img
                src="images/testimonials/testimonio0.png"
                alt="Testimonio de cliente en Instagram - Vista completa"
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            
            {/* Footer del modal */}
            <div className="p-4 bg-gray-50 border-t text-center">
              <p className="text-sm text-gray-600">
                Haz clic fuera del modal para cerrar
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Recovery;
