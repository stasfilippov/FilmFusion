import React from 'react'
import Genre from '../../../components/Genre/Genre.tsx'
import { useSelector } from 'react-redux'
import { dramsFilmsSelector } from './dramsFilms-selector.ts'
import { SliderGenre } from '../../../features/SliderGenre/SliderGenre.tsx'
import { Title } from '../../../components/Title/Title.tsx'

export const DramsFilms = () => {
  const dramsFilms = useSelector(dramsFilmsSelector)

  const filteredDramsMovies = dramsFilms.filter((movie) => movie.poster?.url !== null)

  return (
    <Genre>
      <Title title={'Драмы'} />
      <SliderGenre items={filteredDramsMovies} />
    </Genre>
  )
}
