// =============================================================================
// LEAGUE CONTENT DATA
// =============================================================================

export const urlForm = 'https://forms.gle/Dz7RZG1fUxsJUrzZ6'

export interface LeagueCategory {
  id: string
  name: string
  description: string
  requirements: string[]
}

export interface LeagueFeature {
  id: string
  title: string
  description: string
  icon: string
}

export interface LeagueValue {
  id: string
  title: string
  description: string
}

export interface LeagueRule {
  id: string
  title: string
  content: string
  subsections?: string[]
}

export type LeagueStandard = Record<CrossfitMovement, CategoryStandard>

export type CrossfitCategory = 'rx' | 'intermediate' | 'scaled'

export type CategoryStandard = Record<CrossfitCategory, string | boolean>

export type CrossfitMovement =
  | 'Toes To Bar'
  | 'Pull Up'
  | 'Chest To Bar'
  | 'Bar Muscle-Up'
  | 'Ring Muscle-Up'
  | 'Hand Stand Push Up'
  | 'Hand Stand Walk'
  | 'Rope Climb'
  | 'Legless Rope Climb'
  | 'Double Unders'
  | 'Wall Climb'
  | 'Clean & Jerk'
  | 'Snatch'
  | 'Dumbbell'
  | 'Kettlebell'
  | 'Sandbag'

export const leagueCategories: LeagueCategory[] = [
  {
    id: 'rx',
    name: 'RX (Avanzado)',
    description: 'Para atletas con experiencia avanzada en Cross Training',
    requirements: [
      'Movimientos complejos sin escalar',
      'Peso RX en todos los ejercicios',
      'Técnica depurada en movimientos gimnásticos',
      'Experiencia mínima de 2 años en Cross Training',
    ],
  },
  {
    id: 'intermedio',
    name: 'Intermedio',
    description: 'Para atletas con nivel medio en Cross Training',
    requirements: [
      'Movimientos básicos dominados',
      'Peso intermedio en ejercicios',
      'Técnica correcta en movimientos fundamentales',
      'Experiencia de 6 meses a 2 años',
    ],
  },
  {
    id: 'escalado',
    name: 'Escalado (Iniciación)',
    description: 'Para atletas que están comenzando en Cross Training',
    requirements: [
      'Movimientos escalados según capacidad',
      'Peso adaptado al nivel individual',
      'Enfoque en técnica y progresión',
      'Ideal para principiantes',
    ],
  },
]

export const leagueFeatures: LeagueFeature[] = [
  {
    id: 'continuous-competition',
    title: 'Competición Continua',
    description: 'Temporadas de 3 meses con enfrentamientos regulares, no solo un fin de semana al año.',
    icon: 'calendar_month',
  },
  {
    id: 'team-format',
    title: 'Formato de Equipos',
    description:
      'Equipos de 3 atletas (2 hombres + 1 mujer) para fomentar la igualdad y el trabajo en equipo.',
    icon: 'groups',
  },
  {
    id: 'online-presential',
    title: 'Online + Presencial',
    description: '5 jornadas online y 1 jornada presencial final para vivir la experiencia en comunidad.',
    icon: 'linked_camera',
  },
  {
    id: 'transparent-scoring',
    title: 'Puntuación Transparente',
    description: 'Sistema de puntos claro con revisión de vídeos por jueces acreditados.',
    icon: 'bar_chart',
  },
  {
    id: 'promotion-relegation',
    title: 'Ascensos y Descensos',
    description:
      'El ganador asciende de categoría y el último desciende, manteniendo la competitividad y haciendo el nivel más orgánico.',
    icon: 'crown',
  },
  {
    id: 'gamification',
    title: 'Gamificación',
    description: 'Badges digitales, logros individuales y seguimiento de progreso personal.',
    icon: 'fitness_center',
  },
]

export const leagueValues: LeagueValue[] = [
  {
    id: 'transparency',
    title: 'Transparencia',
    description: 'Resultados y normas claros, iguales para todos.',
  },
  {
    id: 'community',
    title: 'Comunidad',
    description: 'Más que competir, buscamos crear una tribu de atletas que se apoyen entre sí.',
  },
  {
    id: 'improvement',
    title: 'Superación',
    description: 'Cada WOD es una oportunidad para demostrar que siempre se puede dar un paso más.',
  },
  {
    id: 'equality',
    title: 'Igualdad',
    description: 'Hombres y mujeres compiten en equipos mixtos, con igualdad de protagonismo.',
  },
  {
    id: 'fair-play',
    title: 'Juego Limpio',
    description: 'El respeto a las reglas y a los rivales está por encima de la clasificación.',
  },
  {
    id: 'commitment',
    title: 'Compromiso',
    description: 'Inscribirse significa dar lo mejor de uno mismo en cada WOD y cumplir con los plazos.',
  },
  {
    id: 'fun',
    title: 'Diversión',
    description:
      'Competir no está reñido con pasarlo bien; la liga busca retos emocionantes y momentos compartidos.',
  },
  {
    id: 'growth',
    title: 'Crecimiento Continuo',
    description: 'No solo se trata de ganar, sino de mejorar en cada season y aprender del proceso.',
  },
  {
    id: 'accessibility',
    title: 'Accesibilidad',
    description: 'Un formato pensado para todos los niveles, desde escalado hasta RX.',
  },
  {
    id: 'passion',
    title: 'Pasión por el Cross Training',
    description: 'La motivación que nos une y que da sentido a la liga.',
  },
]

export const leagueRules: LeagueRule[] = [
  {
    id: 'what-is-league',
    title: '¿Qué es la Liga?',
    content:
      'La Liga de Cross Training Norte Madrid es una competición continua pensada para atletas amateurs de todos los niveles. A diferencia de las competiciones tradicionales de un solo fin de semana, la liga ofrece temporadas de 3 meses, con enfrentamientos regulares y posibilidad de ascender o descender de categoría, en formato semipresencial.',
  },
  {
    id: 'league-format',
    title: 'Formato de la Liga',
    content: '',
    subsections: [
      'Duración de la temporada: 3 meses (de octubre a diciembre / de enero a marzo / de abril a junio).',
      'Jornadas: un total de 6 jornadas. Las 5 primeras se realizarán de forma online, y la última de forma presencial en uno de los boxes afiliados.',
      'Publicación de WODs: cada domingo se publica un nuevo entrenamiento oficial en web e IG.',
      'Entrega de resultados: los equipos tienen hasta el miércoles de la semana siguiente (11 días en total) para grabar y enviar su vídeo.',
      'Corrección de vídeos: de miércoles a sábado el equipo de jueces revisa todos los envíos.',
      'Ranking: cada domingo se publica la clasificación actualizada junto al nuevo WOD.',
      'Sistema de puntos: 1º puesto → 1 punto, 2º puesto → 2 puntos, …, N-ésimo puesto → N puntos.',
      'Ganador de la season: el equipo con menos puntos acumulados al final de la temporada.',
    ],
  },
  {
    id: 'categories',
    title: 'Categorías',
    content:
      'La liga está dividida en tres niveles: RX (avanzado), Intermedio y Escalado (iniciación). Los equipos se inscriben en la categoría que corresponda según los estándares marcados por la competición.',
  },
  {
    id: 'teams',
    title: 'Equipos',
    content: '',
    subsections: [
      'Formato: equipos de 3 atletas (2 hombres + 1 mujer).',
      'Suplente: cada equipo puede registrar 1 atleta suplente que podrá competir en caso de baja.',
      'Requisitos: todos los atletas deben estar inscritos oficialmente en la plataforma de la liga.',
    ],
  },
  {
    id: 'promotion-relegation',
    title: 'Ascensos y Descensos',
    content: '',
    subsections: [
      'El equipo ganador de cada división asciende a la división superior.',
      'El último clasificado de cada división desciende a la división inferior.',
      'El premio por ascenso: inscripción gratuita en la siguiente temporada.',
      'El premio por ganar en categoría RX: Una cena romántica con Borja y Raúl.',
    ],
  },
  {
    id: 'video-submission',
    title: 'Envío de Resultados y Vídeos',
    content: '',
    subsections: [
      'Los equipos deben grabar el WOD completo en vídeo a través de la aplicación de la liga.',
      'Normativa para la grabación de video:',
      '• Tener actualizada la aplicación. Importante comprobar antes de grabar el WOD.',
      '• Estar conectado a internet. Necesario para la propia grabación en directo.',
      '• Modo No Molestar. Evitar que cualquier notificación interrumpa el proceso de grabación.',
      '• ¿Suficiente espacio en el móvil?',
      '• Plano fijo en el que se vea claramente a todos los atletas y repeticiones, continuo y en el que se vea el reloj al inicio y durante el WOD.',
      'Plazo máximo de entrega: miércoles a las 23:59h de la semana siguiente a la publicación del WOD.',
      'No se podrá repetir el WOD en caso de fallo en el vídeo si este se debe al no cumplimiento de las normas mencionadas. Se podrá repetir una sola vez el vídeo si el fallo es debido a causas externas.',
      'Revisión: De miércoles a sábado, los jueces acreditados por la organización revisan todos los vídeos. No Reps: repeticiones inválidas = penalización en tiempo o repeticiones.',
      'Publicación de resultados: cada domingo se publicará la clasificación oficial y el siguiente WOD.',
    ],
  },
  {
    id: 'scoring-system',
    title: 'Sistema de Puntuación',
    content: '',
    subsections: [
      'Ranking por cada WOD → puntos acumulados.',
      'Enfrentamientos directos ocasionales:',
      '• Ganador → +1 punto extra (bonificación).',
      '• Perdedor → +3 puntos (penalización).',
      'Clasificación final = suma total de puntos de la temporada.',
      'En caso de haber empate entre dos equipos al finalizar la temporada, se realizará un último WOD entre esos dos equipos en la última jornada, que es la marcada como presencial.',
    ],
  },
  {
    id: 'prizes',
    title: 'Premios',
    content: '',
    subsections: [
      '🥇 Ascenso de categoría + inscripción gratuita.',
      '🎁 Premios especiales de patrocinadores (material deportivo, suplementación, camisetas exclusivas).',
      '🏅 Badges digitales y logros que podrás mostrar en tu perfil.',
    ],
  },
  {
    id: 'presential-events',
    title: 'Eventos Presenciales',
    content: '',
    subsections: [
      'La última jornada se realizará de forma presencial en uno de los boxes afiliados de la competición.',
      'La fecha y lugar de realización será informada desde el inicio de la liga para organización propia de los equipos inscritos.',
      'Todos los equipos participarán en este evento el día marcado.',
      'Estos eventos servirán para disfrutar de la comunidad, entregar premios y vivir la experiencia en directo.',
    ],
  },
  {
    id: 'claims',
    title: 'Reclamaciones',
    content: '',
    subsections: [
      'Los equipos disponen de 72 horas tras la publicación de un ranking para presentar reclamaciones.',
      'Las reclamaciones se revisarán de manera interna y la decisión de la organización será definitiva.',
      'Si un equipo reclama y falla, pierde la posibilidad de reclamación en el resto de la liga. Si reclama y tiene razón, mantiene esa posibilidad.',
    ],
  },
]

export const leagueInfo = {
  name: 'TimeCup League',
  tagline: 'Compite todo el año, no solo un fin de semana',
  description:
    'Una liga online y presencial de Cross Training en formato competitivo, con seasons de 3 meses, categorías por nivel y equipos de 3 personas.',
  seasonDuration: '3 meses',
  teamSize: '3 atletas 👨👨👩',
  categories: leagueCategories.length,
  onlineJornadas: 5,
  presentialJornadas: 1,
  totalJornadas: 6,
}

export interface HowItWorksStep {
  id: string
  number: number
  title: string
  description: string
}

export interface HowItWorksTimelineDay {
  day: string
  activity: string
  isSpecial?: boolean
  borderColor?: string
  textColor?: string
}

export interface HowItWorks {
  title: string
  subtitle: string
  steps: HowItWorksStep[]
  timeline: {
    title: string
    week1: HowItWorksTimelineDay[]
    week2: HowItWorksTimelineDay[]
  }
}

export const howItWorksContent: HowItWorks = {
  title: '¿Cómo funciona?',
  subtitle: 'Un proceso simple y transparente que te permite competir desde tu box favorito.',
  steps: [
    {
      id: 'inscription',
      number: 1,
      title: 'Inscripción',
      description: 'Forma tu equipo de 3 atletas y elige tu categoría. El proceso es rápido y sencillo.',
    },
    {
      id: 'weekly-wod',
      number: 2,
      title: 'WOD cada dos semanas',
      description: 'Cada domingo se publica un nuevo WOD. Tienes 11 días para grabarlo y enviarlo.',
    },
    {
      id: 'recording',
      number: 3,
      title: 'Graba tu vídeo en la APP',
      description: 'Graba tu WOD siguiendo las normas establecidas. La app te guiará en el proceso.',
    },
    {
      id: 'results',
      number: 4,
      title: 'Revisión y publicación de resultados',
      description: 'Los jueces revisan los vídeos y se publica el ranking. ¡Ve subiendo posiciones!',
    },
  ],
  timeline: {
    title: 'Cronograma WOD',
    week1: [
      {
        day: 'Domingo',
        activity: 'Publicación WOD',
        isSpecial: true,
        borderColor: 'border-indigo-600',
        textColor: 'text-primary-500',
      },
      {
        day: 'Lunes',
        activity: 'Entrenamiento',
      },
      {
        day: 'Martes',
        activity: 'Entrenamiento',
      },
      {
        day: 'Miércoles',
        activity: 'Entrenamiento',
      },
      {
        day: 'Jueves',
        activity: 'Entrenamiento',
      },
      {
        day: 'Viernes',
        activity: 'Entrenamiento',
      },
      {
        day: 'Sábado',
        activity: 'Entrenamiento',
      },
    ],
    week2: [
      {
        day: 'Domingo',
        activity: 'Entrenamiento',
      },
      {
        day: 'Lunes',
        activity: 'Entrenamiento',
      },
      {
        day: 'Martes',
        activity: 'Entrenamiento',
      },
      {
        day: 'Miércoles',
        activity: 'Límite entrega vídeo',
        isSpecial: true,
        borderColor: 'border-primary-500',
        textColor: 'text-primary-500',
      },
      {
        day: 'Jueves',
        activity: 'Revisión',
      },
      {
        day: 'Viernes',
        activity: 'Revisión',
      },
      {
        day: 'Sábado',
        activity: 'Publicación resultados',
        isSpecial: true,
        borderColor: 'border-secondary-600',
      },
    ],
  },
}

export const leagueStandards: LeagueStandard = {
  'Toes To Bar': {
    rx: true,
    intermediate: true,
    scaled: 'Knees To Elbows',
  },
  'Pull Up': {
    rx: true,
    intermediate: true,
    scaled: 'Banded Pull Up',
  },
  'Chest To Bar': {
    rx: true,
    intermediate: true,
    scaled: false,
  },
  'Bar Muscle-Up': {
    rx: true,
    intermediate: 'Al menos un atleta',
    scaled: false,
  },
  'Ring Muscle-Up': {
    rx: true,
    intermediate: false,
    scaled: false,
  },
  'Hand Stand Push Up': {
    rx: true,
    intermediate: true,
    scaled: 'Pike Push Up',
  },
  'Hand Stand Walk': {
    rx: true,
    intermediate: false,
    scaled: false,
  },
  'Rope Climb': {
    rx: true,
    intermediate: true,
    scaled: 'Al menos un atleta',
  },
  'Legless Rope Climb': {
    rx: true,
    intermediate: 'Al menos un atleta',
    scaled: false,
  },
  'Double Unders': {
    rx: true,
    intermediate: true,
    scaled: 'Single Unders',
  },
  'Wall Climb': {
    rx: true,
    intermediate: true,
    scaled: true,
  },
  'Clean & Jerk': {
    rx: '90/60 Kg',
    intermediate: '70/45 Kg',
    scaled: '40/30 Kg',
  },
  Snatch: {
    rx: '70/45 Kg',
    intermediate: '50/35 Kg',
    scaled: '30/20 Kg',
  },
  Dumbbell: {
    rx: '25/17.5 Kg',
    intermediate: '22.5/15 kg',
    scaled: '15/10 Kg',
  },
  Kettlebell: {
    rx: '24/16 Kg',
    intermediate: '24/16 Kg',
    scaled: '16/12 Kg',
  },
  Sandbag: {
    rx: '75/50 Kg',
    intermediate: '60/40 Kg',
    scaled: '30/20 Kg',
  },
}
