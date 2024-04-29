import { useEffect } from 'react'
import { SliderMain } from '../../features/SliderMain/SliderMain.tsx'
import { useAppDispatch } from '../../utils/redux-utils.ts'
import SliderArticle from './SliderArticle.tsx'
import {fetchNewMovies} from '../../api/moviesData-slice.ts';

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNewMovies())
  }, [])

  return (
    <div>
      <article>
        <SliderMain />
      </article>
      <article>
        <h3>Новинки</h3>
        <SliderArticle />
      </article>
      <article>
        <h3>Драмы</h3>
        <SliderArticle />
      </article>
      <article>
        <h3>Комедии</h3>
        <SliderArticle />
      </article>
      <article>
        <h3>Ужасы</h3>
        <SliderArticle />
      </article>
    </div>
  )
}
