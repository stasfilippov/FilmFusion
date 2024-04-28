import React from 'react'
import {SliderMain} from './SliderMain.tsx';
import SliderArticle from './SliderArticle.tsx';

export const Home = () => {
	return (
		<div>
			<article>
				<SliderMain/>
			</article>
			<article>
				<h3>Новинки</h3>
				<SliderArticle/>
			</article>
			<article>
				<h3>Драмы</h3>
				<SliderArticle/>
			</article>
			<article>
				<h3>Комедии</h3>
				<SliderArticle/>
			</article>
			<article>
				<h3>Ужасы</h3>
				<SliderArticle/>
			</article>
		</div>
	)
}
