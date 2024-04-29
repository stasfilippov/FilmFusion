import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import img from '../../assets/logo.jpg'
import { components } from '../../../.temp/types.ts'
import React from 'react'

type SliderMainPropsType = {
  items: components['schemas']['MovieDtoV1_4'][]
}
export const SliderMain: React.FC<SliderMainPropsType> = ({ items }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }

  return (
    <div className="slider-container h-576 mb-5">
      <Slider {...settings} className={'h-full'}>
        {items.map((el) => {
          return (
            <div className={'relative rounded-xl overflow-hidden'}>
              <img src={el.backdrop?.url || '#'} alt="moviePicture" />
              <div className={'absolute bottom-8 left-8 z-10'}>
                <h3 className={'font-bold text-3xl mb-1'}>{el.name}</h3>
                <div className={'flex gap-3'}>
                  <span className={'bg-slate-400/40 px-2 rounded font-bold'}>{el.rating?.kp}</span>
                  <span>{el.year}</span>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
