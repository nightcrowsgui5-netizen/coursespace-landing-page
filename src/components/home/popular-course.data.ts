import type { Course } from '@/interfaces/course'

// Imagem/avaliação/preço vêm daqui; título e categoria são traduzidos por índice (i18n)
export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'TR-069',
    rating: 5,
    ratingCount: 12,
    price: 30,
    category: 'Redes',
  },
  {
    id: 2,
    cover: '/images/courses/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg',
    title: 'BGP',
    rating: 5,
    ratingCount: 18,
    price: 35,
    category: 'Redes',
  },
  {
    id: 3,
    cover: '/images/courses/annie-spratt-QckxruozjRg-unsplash.jpg',
    title: 'Informática para Concursos',
    rating: 5,
    ratingCount: 24,
    price: 25,
    category: 'Concursos',
  },
]
