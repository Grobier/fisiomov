import { FaDumbbell, FaHeartbeat, FaLaptop, FaSpa } from 'react-icons/fa'

const services = [
  {
    id: 1,
    slug: 'kinesiologia',
    title: 'Kinesiologia',
    subtitle: 'KINESIOLOGIA Y REHABILITACION',
    description:
      'Tratamiento personalizado para entender tu dolor desde una mirada multifactorial y ayudarte a volver a moverte con seguridad.',
    icon: FaHeartbeat,
    price: '',
    duration: '45-60 min',
    videoUrl: '',
    detailedPricing: [
      { name: 'Pack 10 sesiones - Domicilio', price: '', duration: '10 sesiones completas' },
      { name: 'Pack 10 sesiones - Kutral', price: '', duration: '10 sesiones completas', badge: '5 cupos' },
    ],
    pricingNote: 'Incluye analisis biomecanico, pauta y asesoramiento completo.',
    features: [
      { title: 'Menos dependencia del dolor', description: 'Dejas de esperar a que pase solo y empiezas a entender que hacer.' },
      { title: 'Vuelves a moverte con confianza', description: 'Sabes que puedes hacer y como progresar sin miedo.' },
      { title: 'Mirada integral', description: 'Considera factores fisicos, emocionales y de entorno.' },
      { title: 'Movimiento con proposito', description: 'El foco esta en que recuperes funcion real.' },
    ],
    includes: [
      'Evaluacion completa: cuerpo, contexto y movimiento',
      'Ejercicio terapeutico aplicado a tu caso',
      'Explicacion clara para que entiendas tu cuerpo',
      'Plan serio para moverte mejor',
    ],
    ctaWhatsapp: 'Escribeme por WhatsApp',
    ctaLabel: 'Evaluar mi dolor',
  },
  {
    id: 2,
    slug: 'planificacion',
    title: 'Planificacion de entrenamiento',
    subtitle: 'PLANIFICACION A DISTANCIA',
    description:
      'Para quienes quieren entrenar solos pero con una planificacion profesional, seguimiento y progresiones claras.',
    icon: FaLaptop,
    price: '',
    duration: 'Programa mensual',
    videoUrl: '',
    pricingNote: 'Incluye ejercicios, progresiones, videos demostrativos y soporte por mensaje.',
    planOverview: {
      title: 'Planes de entrenamiento online',
      intro: [
        'En nuestros programas no solo entrenas. Te acompano en tu proceso para que avances de forma segura, progresiva y con resultados reales.',
        'Cada plan esta diseñado segun tu nivel, objetivos y estilo de vida, incorporando no solo entrenamiento, sino tambien seguimiento y recuperacion.',
      ],
      closing:
        'Nuestro enfoque no es solo que entrenes, sino que progreses, te sientas mejor y puedas sostener resultados en el tiempo.',
    },
    planTiers: [
      {
        name: 'Plan Inicio',
        audience: 'Para comenzar de forma guiada y segura',
        regularPrice: '$39.990',
        preferredPrice: '$35.000',
        includes: [
          {
            title: 'Planificacion de entrenamiento mensual personalizada',
            description:
              'Se diseña un programa de entrenamiento adaptado a tu objetivo, nivel y disponibilidad. No es una rutina generica, es especifica para ti.',
          },
          {
            title: 'Adaptacion a tu nivel y condicion',
            description:
              'Se consideran tus capacidades actuales para evitar lesiones y asegurar un progreso adecuado.',
          },
          {
            title: 'Ajustes basicos 1 vez al mes',
            description:
              'Se realizan modificaciones en tu planificacion 1 vez al mes, en caso de ser necesario, para mantener el avance.',
          },
          {
            title: 'Feedback 1 vez al mes',
            description:
              'Recibes retroalimentacion mensual sobre tu proceso y tu plan, en caso de ser necesario.',
          },
        ],
      },
      {
        name: 'Plan Progreso',
        audience: 'Para avanzar de forma constante y evitar estancamientos',
        regularPrice: '$54.990',
        preferredPrice: '$50.000',
        includes: [
          {
            title: 'Planificacion de entrenamiento mensual personalizada',
            description: 'Programa adaptado completamente a tus objetivos y evolucion.',
          },
          {
            title: 'Ajustes cada 2 semanas',
            description:
              'Se revisa tu progreso y se realizan cambios cada 2 semanas en caso de ser necesario, para optimizar resultados y evitar estancamientos.',
          },
          {
            title: 'Seguimiento basico',
            description:
              'Se monitorea tu avance, cumplimiento y sensaciones en el entrenamiento en caso de ser necesario.',
          },
          {
            title: 'Resolucion de dudas prioritaria',
            description:
              'Tendras mayor rapidez y profundidad en las respuestas a tus consultas.',
          },
          {
            title: '1 sesion mensual de recuperacion',
            description:
              'Acceso a una sesion de recuperacion (presoterapia), orientada a mejorar la circulacion, disminuir la fatiga y favorecer la recuperacion muscular.',
          },
        ],
      },
      {
        name: 'Plan Rendimiento',
        audience: 'Para lograr resultados reales y cuidar tu cuerpo al maximo',
        regularPrice: '$69.990',
        preferredPrice: '$60.000',
        includes: [
          {
            title: 'Planificacion totalmente personalizada',
            description:
              'Programa detallado segun objetivos especificos, con progresiones claras y estructuradas.',
          },
          {
            title: 'Ajustes semanales',
            description:
              'Se realizan modificaciones semanales en base a tu rendimiento, en caso de ser necesario, optimizando cada etapa del proceso.',
          },
          {
            title: 'Seguimiento completo',
            description:
              'Analisis de tu progreso, sensaciones y desempeno en caso de ser necesario para asegurar resultados.',
          },
          {
            title: 'Comunicacion directa',
            description:
              'Acceso mas cercano para resolver dudas, ajustar el plan y acompanarte en el proceso.',
          },
          {
            title: '2 sesiones mensuales de recuperacion',
            description:
              'Acceso a sesiones de recuperacion (presoterapia) para mejorar el rendimiento y reducir la fatiga acumulada.',
          },
          {
            title: 'Acceso a sauna (1 vez por mes)',
            description:
              'Espacio orientado a la recuperacion fisica y mental, ayudando a disminuir tensiones y mejorar el bienestar general.',
          },
        ],
      },
    ],
    features: [
      { title: 'Hecho para ti', description: 'No es una rutina generica ni un PDF olvidado.' },
      { title: 'Seguimiento real', description: 'Hay una persona revisando tu progreso y ajustando.' },
      { title: 'Adaptable', description: 'El plan cambia cuando tu cuerpo lo necesita.' },
      { title: 'Entrena donde quieras', description: 'Casa, gimnasio o aire libre.' },
    ],
    includes: [
      'Rutina personalizada',
      'Videos explicativos',
      'Contacto directo para dudas',
      'Ajustes mensuales segun progreso',
    ],
    ctaWhatsapp: 'Quiero mi plan',
    ctaLabel: 'Entrenar a distancia',
  },
  {
    id: 3,
    slug: 'entrenamiento',
    title: 'Entrenamiento personalizado',
    subtitle: 'ENTRENAMIENTO EN SEDE',
    description: 'Entrenamiento guiado en formato individual o reducido, adaptado a tus objetivos y nivel fisico.',
    icon: FaDumbbell,
    price: 'Primera clase gratis',
    duration: '60 min · En sede Kutral',
    videoUrl: '',
    highlight: true,
    detailedPricing: [
      { name: 'Plan 1:1 - Individual', price: '', duration: 'por sesion · 3x a 5x/sem' },
      { name: 'Plan 1:2 - Dupla', price: '', duration: 'por sesion c/u · 3x a 5x/sem' },
      { name: 'Plan 1:3 - Trio', price: '', duration: 'por sesion c/u · 3x a 5x/sem' },
    ],
    pricingNote: 'El precio por sesion disminuye a mayor frecuencia semanal. Primera clase gratis.',
    trainingModes: [
      { mode: '1:1', name: 'Individual', description: 'Atencion 100% en ti' },
      { mode: '1:2', name: 'Dupla', description: 'Para entrenar en pareja' },
      { mode: '1:3', name: 'Trio', description: 'Grupo reducido, sin perder calidad' },
    ],
    features: [
      { title: 'Trabajo personalizado', description: 'Cada sesion responde a tu objetivo y estado actual.' },
      { title: 'Basado en evidencia', description: 'Sin mitos. Solo decisiones con criterio.' },
      { title: 'Rehab mas entrenamiento', description: 'Trabajas lo que duele mientras mejoras rendimiento.' },
      { title: 'Resultados aplicables', description: 'Fuerza y capacidad que sirven en la vida real.' },
    ],
    includes: [
      'Sesion personalizada',
      'Trabajo especifico sobre tus limitaciones',
      'Preparacion progresiva antes de cargar mas',
      'Fuerza util para tu deporte o vida diaria',
    ],
    ctaWhatsapp: 'Escribeme por WhatsApp',
    ctaCalendar: true,
    ctaLabel: 'Quiero entrenar mejor',
  },
  {
    id: 4,
    slug: 'recovery',
    title: 'Recovery',
    subtitle: 'RECOVERY',
    description: 'Estrategias de recuperacion para bajar carga, mejorar sensaciones y volver a rendir mejor.',
    icon: FaSpa,
    price: '',
    duration: '45 min',
    externalRoute: '/recovery',
    features: [],
    includes: [],
    ctaLabel: 'Recuperarme',
  },
]

export default services
