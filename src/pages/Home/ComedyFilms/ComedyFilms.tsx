import React from 'react'
import Genre from '../../../components/Genre/Genre.tsx'
import { SliderGenre } from '../../../features/SliderGenre/SliderGenre.tsx'
import { useSelector } from 'react-redux'
import { comedyFilmsSelector } from './comedyFilms-selector.ts'
import { Title } from '../../../components/Title/Title.tsx'

export const ComedyFilms = () => {
  const comedyFilms = useSelector(comedyFilmsSelector)

  const filteredComedyMovies = comedyFilms.filter((movie) => movie.poster?.url !== null)

  return (
    <Genre>
      <Title title={'Комедии'} />
      <SliderGenre items={filteredComedyMovies} />
    </Genre>
  )
}
