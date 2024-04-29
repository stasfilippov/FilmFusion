import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import img from '../../assets/logo.jpg'
import {useSelector} from 'react-redux';
import {sliderMainSelectors} from './sliderMain-selectors.ts';

export function SliderMain() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }

  const newMovies = useSelector(sliderMainSelectors)



  return (
    <div className="slider-container h-702">
      <Slider {...settings} className={'h-full'}>
          <div>
            {/*<img src={newMovies[0].poster?.url!} alt="picture" />*/}
          </div>
      </Slider>
    </div>
  )
}
