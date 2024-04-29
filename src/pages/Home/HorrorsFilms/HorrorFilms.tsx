import React from 'react'
import Genre from '../../../components/Genre/Genre.tsx'
import { SliderGenre } from '../../../features/SliderGenre/SliderGenre.tsx'
import { useSelector } from 'react-redux'
import { horrorsFilmsSelector } from './horrorsFilms-selector.ts'
import { Title } from '../../../components/Title/Title.tsx'

export const HorrorFilms = () => {
  const horrorFilms = useSelector(horrorsFilmsSelector)

  const filteredHorrorMovies = horrorFilms.filter((movie) => movie.poster?.url !== null)

  return (
    <Genre>
      <Title title={'Ужасы'} />
      <SliderGenre items={filteredHorrorMovies} />
    </Genre>
  )
}
