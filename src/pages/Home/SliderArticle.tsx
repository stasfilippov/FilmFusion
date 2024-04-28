import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../assets/logo2.png'


function MultipleItems() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	};
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div>
					<h3>1</h3>
					<img src={img} alt=""/>
				</div>
				<div>
					<h3>2</h3>
					<img src={img} alt=""/>

				</div>
				<div>
					<h3>3</h3>
					<img src={img} alt=""/>

				</div>
				<div>
					<h3>4</h3>
					<img src={img} alt=""/>

				</div>
				<div>
					<h3>5</h3>
					<img src={img} alt=""/>

				</div>
				<div>
					<h3>6</h3>
				</div>
				<div>
					<h3>7</h3>
				</div>
				<div>
					<h3>8</h3>
				</div>
				<div>
					<h3>9</h3>
				</div>
			</Slider>
		</div>
	);
}

export default MultipleItems;

