import React from 'react'
import { SliderMain } from '../../../features/SliderMain/SliderMain.tsx'
import { useSelector } from 'react-redux'
import { sliderMainSelectors } from '../../../features/SliderMain/sliderMain-selectors.ts'

export const Hero = () => {
  const newMovies = useSelector(sliderMainSelectors)

  const filteredNewMovies = newMovies.filter((movie) => movie.backdrop?.url !== null)

  return (
    <article>
      <SliderMain items={filteredNewMovies} />
    </article>
  )
}
