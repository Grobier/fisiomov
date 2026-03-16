import React, { useState } from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null)

  const testimonials = [
    {
      id: 1,
      name: 'Fran',
      age: 30,
      sport: 'Atleta',
      text: 'El servicio de Recovery fue clave para recuperarme mas rapido y volver a entrenar sin dolor.',
      result: 'Recuperacion muscular optima',
      beforeAfter: {
        before: 'Dolor y tension muscular constante',
        after: 'Entrenamiento sin molestias y mejor rendimiento',
      },
      videoUrl: 'https://www.youtube.com/embed/gF3dE9EvVIk',
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      age: 35,
      sport: 'Futbol',
      text: 'No solo mejore fisicamente. Tambien recupere la confianza para volver a la cancha sin miedo.',
      result: 'Volvio al futbol competitivo',
      beforeAfter: {
        before: 'Dolor constante al caminar',
        after: 'Juega 90 minutos sin molestias',
      },
      videoUrl: 'https://www.youtube.com/embed/example2',
    },
    {
      id: 3,
      name: 'Cristobal',
      age: 28,
      sport: 'Evaluacion',
      text: 'La evaluacion me ayudo a entender exactamente que estaba pasando y como empezar a mejorar.',
      result: 'Claridad total y plan de accion',
      beforeAfter: {
        before: 'Dudas sobre su condicion fisica',
        after: 'Plan claro y ejecutable',
      },
      videoUrl: 'https://www.youtube.com/embed/7NhPS78RI50',
    },
  ]

  return (
    <section
      id="testimonios"
      className="section-padding bg-fixed bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.08),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]"
    >
      <div className="container-max">
        <div className="mb-10 text-center">
          <span className="section-eyebrow">Historias reales</span>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Resultados que se sienten en la vida diaria.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Casos reales de recuperacion, confianza y regreso al movimiento.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mesh-card p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                {playingVideo === testimonial.id ? (
                  <div className="relative aspect-video overflow-hidden rounded-[24px] bg-slate-800">
                    <iframe
                      width="100%"
                      height="100%"
                      src={testimonial.videoUrl}
                      title={`Testimonio de ${testimonial.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                ) : (
                  <div
                    className="group relative aspect-video cursor-pointer overflow-hidden rounded-[24px] bg-slate-800"
                    onClick={() => setPlayingVideo(testimonial.id)}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${testimonial.videoUrl}?autoplay=0&controls=0&showinfo=0&rel=0&modestbranding=1`}
                      title={`Testimonio de ${testimonial.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="pointer-events-none h-full w-full"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700">
                        <FaPlay className="ml-1 text-xl text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 rounded-2xl bg-white/90 px-3 py-2 text-slate-950">
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs opacity-90">{testimonial.sport}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm text-yellow-400" />
                ))}
              </div>

              <blockquote className="mb-4 text-center text-sm leading-7 text-slate-700">"{testimonial.text}"</blockquote>

              <div className="mb-4 text-center">
                <div className="text-base font-semibold text-slate-950">{testimonial.name}</div>
                <div className="mb-1 text-xs text-slate-500">
                  {testimonial.sport} · {testimonial.age} anos
                </div>
                <div className="text-xs font-medium text-green-600">{testimonial.result}</div>
              </div>

              <div className="border-t border-slate-200/80 pt-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="mb-1 font-medium text-red-600">Antes:</div>
                    <div className="text-slate-600">{testimonial.beforeAfter.before}</div>
                  </div>
                  <div>
                    <div className="mb-1 font-medium text-green-600">Despues:</div>
                    <div className="text-slate-600">{testimonial.beforeAfter.after}</div>
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
