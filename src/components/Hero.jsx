import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56963352063"
    const message = "Hola! Quiero dejar de entrenar con dolor. ¿Cuándo podemos empezar?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleScheduleClick = () => {
    const calendarUrl = "https://calendar.app.google/ofAAA1auXWNjXKh59"
    window.open(calendarUrl, '_blank')
  }

  return (
    <section className="relative isolate overflow-hidden min-h-[92vh] bg-white">
      <AnimatedBlobs />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-24 pb-32 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-28">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 col-span-7 flex flex-col items-start text-left mt-20"
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            {"Tu dolor no es "}
            <Typewriter word="normal" speed={80} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl font-medium text-gray-700"
          >
            Y no tienes por qué acostumbrarte
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 max-w-2xl text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Rehabilitación y entrenamiento personalizado para que vuelvas a hacer lo que te gusta:
            entrenar, correr o simplemente levantarte sin quejarte.
          </motion.p>

          {/* CTAs */}
          <div className="mt-12 mb-12 flex w-full max-w-xl flex-col sm:flex-row gap-3 relative">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleClick}
              className="relative overflow-hidden group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] bg-left px-6 py-3 text-white text-base font-semibold shadow-lg shadow-blue-600/30 hover:bg-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-[background-position] duration-700 ease-out"
            >
              Reserva tu sesión hoy
              <ChevronRight className="ml-1 size-5 transition-transform group-hover:translate-x-0.5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
            >
              <MessageCircle className="mr-2 size-5" /> Escríbeme ahora
            </motion.button>
          </div>

        </motion.div>

        {/* Visual (imagen o video) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="z-10 col-span-5 mt-12 lg:mt-0"
        >
          <VisualCard />
        </motion.div>
      </div>

      {/* Indicador scroll */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.4 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="flex items-center gap-2 text-sm">
          Desliza
          <ChevronRight className="size-4 rotate-90" />
        </div>
      </motion.div>
    </section>
  );
}

function Typewriter({ word, speed = 80 }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i >= word.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [word, speed]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span
        className="drop-shadow-md text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        className="ml-1 inline-block w-[2px] h-[1em] translate-y-[2px] bg-blue-600"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}

function AnimatedBlobs() {
  return (
    <>
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
    </>
  );
}


function VisualCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03, rotate: [0, 1, -1, 0] }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl"
    >
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600&auto=format&fit=crop"
        alt="Fisioterapeuta guiando un ejercicio de movilidad"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

      {/* Tarjeta flotante de confianza */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <Phone className="size-5" />
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">1:1 contigo</p>
            <p className="text-gray-600">Plan a tu medida, seguimiento semanal</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero