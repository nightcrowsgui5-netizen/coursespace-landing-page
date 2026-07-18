export type Lang = 'pt' | 'en'

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
]

export const defaultLang: Lang = 'pt'

// Marca / nome do site (não é traduzido)
export const brand = {
  first: 'Mauro',
  second: 'Alexandre',
  full: 'MauroAlexandre',
}

interface HeroExp {
  label: string
  value: string
}
interface TitleDesc {
  title: string
  description: string
}
interface CourseText {
  title: string
  category: string
}
interface MentorText {
  category: string
  description: string
}
interface TestimonialText {
  title: string
  content: string
  professional: string
}

export interface Translation {
  meta: { title: string }
  nav: { home: string; courses: string; testimonial: string; mentor: string }
  auth: { signIn: string; signUp: string }
  hero: {
    improve: string
    your: string
    skill: string
    withDifferentWay: string
    description: string
    getStarted: string
    watchVideo: string
    certificate: string
    certificateDesc: string
    exps: HeroExp[]
  }
  feature: {
    make: string
    learning: string
    enjoyable: string
    description: string
    cardTitle: string
    skillUiux: string
    skillMobile: string
    skillWeb: string
    cardBottomTop: string
    cardBottomSub: string
    items: TitleDesc[]
  }
  popularCourses: { title: string; perCourse: string; courses: CourseText[] }
  mentors: { title: string; list: MentorText[] }
  testimonialSection: { pre: string; highlight: string; post: string; list: TestimonialText[] }
  newsletter: { title: string; subtitle: string; placeholder: string; button: string }
  footer: {
    description: string
    courseTitle: string
    menuTitle: string
    aboutTitle: string
    courseMenu: string[]
    companyMenu: string[]
  }
}

const pt: Translation = {
  meta: { title: 'MauroAlexandre' },
  nav: { home: 'Início', courses: 'Cursos', testimonial: 'Depoimentos', mentor: 'Mentores' },
  auth: { signIn: 'Entrar', signUp: 'Cadastrar' },
  hero: {
    improve: 'Melhore',
    your: 'suas',
    skill: 'Habilidades',
    withDifferentWay: 'de um Jeito Diferente',
    description:
      'Faça um curso online e desenvolva suas habilidades de um jeito diferente. Você define seu próprio horário de estudo de acordo com o seu ritmo, estudando com conforto e absorvendo o conteúdo com facilidade.',
    getStarted: 'Começar Agora',
    watchVideo: 'Assistir Vídeo',
    certificate: 'Certificado',
    certificateDesc: 'Há certificados para todos os cursos.',
    exps: [
      { label: 'Alunos', value: '10K+' },
      { label: 'Cursos de Qualidade', value: '20+' },
      { label: 'Mentores Experientes', value: '10+' },
    ],
  },
  feature: {
    make: 'Torne seu',
    learning: 'Aprendizado',
    enjoyable: 'Prazeroso',
    description:
      'Organize sua forma de aprender do jeito que preferir, aproveitando os benefícios que oferecemos para que você curta cada aula que preparamos.',
    cardTitle: 'Progresso do curso',
    skillUiux: 'UI/UX Design',
    skillMobile: 'Desenvolvimento Mobile',
    skillWeb: 'Desenvolvimento Web',
    cardBottomTop: 'Concluído',
    cardBottomSub: 'Desempenho',
    items: [
      { title: 'Fácil Acesso', description: 'Estude de qualquer lugar e a qualquer hora, direto do seu dispositivo.' },
      { title: 'Custo Mais Acessível', description: 'Preços justos para você aprender sem pesar no bolso.' },
      { title: 'Horário de Estudo Flexível', description: 'Você escolhe quando estudar, no ritmo que funciona para você.' },
      { title: 'Consultoria com Mentor', description: 'Tire dúvidas e receba orientação de mentores experientes.' },
    ],
  },
  popularCourses: {
    title: 'Cursos Mais Populares',
    perCourse: '/ curso',
    courses: [
      { title: 'Desenvolvimento Android do Zero ao Avançado', category: 'Iniciante' },
      { title: 'Guia Completo de UI/UX', category: 'Intermediário' },
      { title: 'Fundamentos de Modelagem de Dados', category: 'Iniciante' },
      { title: 'Guia Completo de Docker e Kubernetes', category: 'Intermediário' },
      { title: 'React Moderno com MUI e Redux', category: 'Intermediário' },
      { title: 'Bootcamp de Hacking Ético do Zero à Maestria', category: 'Iniciante' },
      { title: 'Adobe Lightroom para Iniciantes: Edição de Fotos', category: 'Iniciante' },
    ],
  },
  mentors: {
    title: 'Nossos Mentores Especialistas',
    list: [
      { category: 'UI/UX Design', description: 'Especialista em design de interfaces e experiência do usuário, com anos de prática em produtos digitais.' },
      { category: 'Machine Learning', description: 'Atua com inteligência artificial e aprendizado de máquina em projetos de grande escala.' },
      { category: 'Desenvolvimento Android', description: 'Desenvolvedor mobile focado em aplicativos Android de alta performance.' },
      { category: 'Desenvolvimento Fullstack', description: 'Domina o desenvolvimento completo, do front-end ao back-end de aplicações web.' },
    ],
  },
  testimonialSection: {
    pre: 'O que nossos',
    highlight: 'Alunos',
    post: 'dizem',
    list: [
      { title: 'Materiais de aprendizado detalhados', content: 'As aulas trazem um material bem detalhado sobre a criação de UI/UX Design, desde protótipos de baixa e alta fidelidade até testes com usuários.', professional: 'UI/UX Engineer' },
      { title: 'Melhor curso online de qualidade!', content: 'Conteúdo bem estruturado e didático, com projetos práticos que realmente ajudaram a aplicar o que aprendi no dia a dia.', professional: 'Engenheiro de Software' },
      { title: 'Aulas muito completas', content: 'Material completo e professores atenciosos. Consegui evoluir bastante e me sinto muito mais confiante na área.', professional: 'Designer Fullstack' },
      { title: 'Ótima qualidade!', content: 'Uma experiência de aprendizado excelente, com suporte de mentores e uma comunidade sempre disposta a ajudar.', professional: 'Especialista em SEO' },
      { title: 'Materiais de aprendizado detalhados', content: 'As aulas trazem um material bem detalhado sobre a criação de UI/UX Design, desde protótipos até os testes finais.', professional: 'Desenvolvedor Back-End' },
    ],
  },
  newsletter: {
    title: 'Assine a Nossa Newsletter',
    subtitle: 'Assine nossa newsletter para receber novidades sobre os nossos cursos.',
    placeholder: 'Digite seu endereço de e-mail',
    button: 'Assinar',
  },
  footer: {
    description: 'A MauroAlexandre é uma plataforma de ensino online que atua desde 2018 até hoje.',
    courseTitle: 'Cursos',
    menuTitle: 'Menu',
    aboutTitle: 'Sobre',
    courseMenu: ['UI/UX Design', 'Desenvolvimento Mobile', 'Machine Learning', 'Desenvolvimento Web'],
    companyMenu: ['Fale Conosco', 'Política de Privacidade', 'Termos e Condições', 'FAQ'],
  },
}

const en: Translation = {
  meta: { title: 'MauroAlexandre' },
  nav: { home: 'Home', courses: 'Courses', testimonial: 'Testimonial', mentor: 'Mentor' },
  auth: { signIn: 'Sign In', signUp: 'Sign Up' },
  hero: {
    improve: 'Improve',
    your: 'your',
    skill: 'Skill',
    withDifferentWay: 'with Different Way',
    description:
      "Let's take an online course to improve your skills in a different way, you can set your own study time according to your learning speed. So you can study comfortably and absorb the material easily.",
    getStarted: 'Get Started',
    watchVideo: 'Watch Video',
    certificate: 'Certificate',
    certificateDesc: 'There are certificates for all courses.',
    exps: [
      { label: 'Students', value: '10K+' },
      { label: 'Quality Course', value: '20+' },
      { label: 'Experience Mentors', value: '10+' },
    ],
  },
  feature: {
    make: 'Make your',
    learning: 'Learning',
    enjoyable: 'Enjoyable',
    description:
      'Set the way of learning according to your wishes with some of the benefits that you get from us, so you can enjoy the lessons that we provide.',
    cardTitle: 'Course progress',
    skillUiux: 'UI/UX Design',
    skillMobile: 'Mobile Development',
    skillWeb: 'Web Development',
    cardBottomTop: 'Completed',
    cardBottomSub: 'Performance',
    items: [
      { title: 'Easy Accessible', description: 'Study from anywhere, anytime, right from your device.' },
      { title: 'More Affordable Cost', description: 'Fair prices so you can learn without breaking the bank.' },
      { title: 'Flexible Study Time', description: 'You choose when to study, at the pace that works for you.' },
      { title: 'Consultation With Mentor', description: 'Ask questions and get guidance from experienced mentors.' },
    ],
  },
  popularCourses: {
    title: 'Most Popular Courses',
    perCourse: '/ course',
    courses: [
      { title: 'Android Development from Zero to Hero', category: 'Beginner' },
      { title: 'UI/UX Complete Guide', category: 'Intermediate' },
      { title: 'Mastering Data Modeling Fundamentals', category: 'Beginner' },
      { title: 'The Complete Guide Docker and Kubernetes', category: 'Intermediate' },
      { title: 'Modern React with MUI & Redux', category: 'Intermediate' },
      { title: 'Ethical Hacking Bootcamp Zero to Mastery', category: 'Beginner' },
      { title: 'Adobe Lightroom For Beginners: Complete Photo Editing', category: 'Beginner' },
    ],
  },
  mentors: {
    title: 'Our Expert Mentors',
    list: [
      { category: 'UI/UX Design', description: 'Specialist in interface design and user experience, with years of practice on digital products.' },
      { category: 'Machine Learning', description: 'Works with artificial intelligence and machine learning on large-scale projects.' },
      { category: 'Android Development', description: 'Mobile developer focused on high-performance Android applications.' },
      { category: 'Fullstack Development', description: 'Masters end-to-end development, from front-end to back-end of web applications.' },
    ],
  },
  testimonialSection: {
    pre: 'What our',
    highlight: 'Students',
    post: 'Say',
    list: [
      { title: 'Detailed learning materials', content: 'Classes provide very detailed material on making UI/UX Design, from low and high fidelity prototypes to user testing.', professional: 'UI/UX Engineer' },
      { title: 'Best Quality Online Course!', content: 'Well-structured and clear content, with hands-on projects that really helped me apply what I learned every day.', professional: 'Software Engineer' },
      { title: 'Very complete class', content: 'Complete material and attentive teachers. I improved a lot and feel much more confident in the field.', professional: 'FullStack Designer' },
      { title: 'Great Quality!', content: 'An excellent learning experience, with mentor support and a community always ready to help.', professional: 'SEO Expert' },
      { title: 'Detailed learning materials', content: 'Classes provide very detailed material on making UI/UX Design, from prototypes to the final tests.', professional: 'Back-End Developer' },
    ],
  },
  newsletter: {
    title: 'Subscribe to Our News Letter',
    subtitle: 'Subscribe to our newsletter to get information about our courses.',
    placeholder: 'Enter your Email Address',
    button: 'Subscribe',
  },
  footer: {
    description: 'MauroAlexandre is an online learning platform that has been operating since 2018 until now.',
    courseTitle: 'Course',
    menuTitle: 'Menu',
    aboutTitle: 'About',
    courseMenu: ['UI/UX Design', 'Mobile Development', 'Machine Learning', 'Web Development'],
    companyMenu: ['Contact Us', 'Privacy & Policy', 'Term & Condition', 'FAQ'],
  },
}

export const translations: Record<Lang, Translation> = { pt, en }
