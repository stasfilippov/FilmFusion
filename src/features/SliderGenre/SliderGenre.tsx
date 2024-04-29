import React from 'react'
import Slider from 'react-slick'
import { MovieCardItem } from '../MovieCardItem/MovieCardItem.tsx'
import { components } from '../../../.temp/types.ts'

type SliderGenrePropsType = {
  items: components['schemas']['MovieDtoV1_4'][]
}
export const SliderGenre: React.FC<SliderGenrePropsType> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((el) => {
          return <MovieCardItem item={el} key={el.id} />
        })}
      </Slider>
    </div>
  )
}
