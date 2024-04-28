import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../assets/logo.jpg'

export function SliderMain() {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false
	};
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div>
					<img src={img} alt=""/>
				</div>
				<div>
					<img src={img} alt=""/>
				</div>
				<div>
					<img src={img} alt=""/>
				</div>
				<div>
					<img src={img} alt=""/>
				</div>
			</Slider>
		</div>
	);
}

