import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Star, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Recovery = () => {
  const navigate = useNavigate();
  
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
      case 'masaje':
        message = "Hola! Quiero reservar una sesión de Masaje Manual ($27.000). ¿Cuándo podemos agendar?"
        break;
      case 'pistola':
        message = "Hola! Quiero reservar una sesión de Pistola de Percusión ($17.000). ¿Cuándo podemos agendar?"
        break;
      case 'sauna':
        message = "Hola! Quiero reservar una sesión de Sauna ($20.000). ¿Cuándo podemos agendar?"
        break;
      case 'pack':
        message = "Hola! Quiero reservar el Pack 3 Servicios ($64.000 - Masaje + Pistola + Sauna). ¿Cuándo podemos agendar?"
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
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver
            </button>
            <h1 className="text-2xl font-bold text-gray-900">FISIOMOVE RECOVERY</h1>
            <div className="w-20"></div> {/* Spacer */}
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

          {/* Services and Cyberday Pack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {[
              {
                title: "🔥 CYBERDAY ESPECIAL",
                price: "$20.000",
                originalPrice: "$64.000",
                duration: "60 min",
                description: "¡Ahorras $44.000! Oferta válida solo por Cyberday",
                features: [
                  "Masaje Manual (20 min)",
                  "Pistola de Percusión (20 min)",
                  "Sauna (20 min)",
                  "¡No volverá a estar así de bajo!"
                ],
                highlight: true
              },
              {
                title: "Masaje Manual",
                price: "$27.000",
                duration: "30 min",
                description: "Masaje terapéutico profesional para aliviar tensiones y mejorar la circulación",
                features: [
                  "Técnicas de masaje especializadas",
                  "Evaluación inicial personalizada", 
                  "Tratamiento de puntos específicos",
                  "Relajación profunda"
                ]
              },
              {
                title: "Pistola de Percusión",
                price: "$17.000",
                duration: "20 min",
                description: "Terapia de percusión para liberar puntos de tensión y mejorar la movilidad",
                features: [
                  "Tecnología de percusión avanzada",
                  "Múltiples velocidades y cabezales",
                  "Alivio inmediato de tensión",
                  "Tratamiento de músculos específicos"
                ]
              },
              {
                title: "Sauna",
                price: "$20.000",
                duration: "20 min",
                description: "Sauna para relajación muscular y desintoxicación",
                features: [
                  "Sauna infrarroja de última generación",
                  "Ambiente controlado y seguro",
                  "Potencia tu entrenamiento",
                  "Desintoxicación natural"
                ]
              },
              {
                title: "Pack 3 Servicios",
                price: "$64.000",
                duration: "70 min",
                description: "¿Quieres los 3 servicios? Masaje Manual + Pistola de Percusión + Sauna",
                features: [
                  "Masaje Manual ($27.000)",
                  "Pistola de Percusión ($17.000)",
                  "Sauna ($20.000)",
                  "¡Atención! Acabando el Cyberday, el valor sube"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`border rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow flex flex-col ${
                  service.highlight 
                    ? service.packStyle
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 border-orange-400'
                      : 'bg-gradient-to-br from-red-500 to-pink-500 border-red-400'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-center mb-3">
                  <h4 className={`text-lg font-bold mb-2 ${
                    service.highlight ? 'text-white' : 'text-gray-900'
                  }`}>{service.title}</h4>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className={`text-2xl font-bold ${
                      service.highlight ? 'text-white' : 'text-blue-600'
                    }`}>{service.price}</div>
                    {service.originalPrice && (
                      <div className={`text-sm line-through ${
                        service.highlight ? 'text-white/80' : 'text-gray-500'
                      }`}>{service.originalPrice}</div>
                    )}
                  </div>
                  <div className={`flex items-center justify-center text-sm ${
                    service.highlight ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <p className={`mb-3 text-center text-sm ${
                  service.highlight ? 'text-white/90' : 'text-gray-600'
                }`}>{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-xs ${
                      service.highlight ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      <Check className={`w-3 h-3 mr-2 flex-shrink-0 ${
                        service.highlight ? 'text-white' : 'text-green-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (service.title === "🔥 CYBERDAY ESPECIAL") {
                      handleWhatsAppClick('cyberday')
                    } else if (service.title === "Masaje Manual") {
                      handleWhatsAppClick('masaje')
                    } else if (service.title === "Pistola de Percusión") {
                      handleWhatsAppClick('pistola')
                    } else if (service.title === "Sauna") {
                      handleWhatsAppClick('sauna')
                    } else if (service.title === "Pack 3 Servicios") {
                      handleWhatsAppClick('pack')
                    } else {
                      handleWhatsAppClick('default')
                    }
                  }}
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 mt-auto ${
                    service.highlight
                      ? 'bg-white text-red-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {service.highlight 
                    ? service.packStyle 
                      ? '¡Reservar Ahora!' 
                      : '¡Aprovechar Oferta!'
                    : 'Reservar Preventa'
                  }
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
    </div>
  );
};

export default Recovery;
