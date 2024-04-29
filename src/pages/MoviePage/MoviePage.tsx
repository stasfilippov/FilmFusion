import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../utils/redux-utils.ts'
import { fetchMovieById } from './movie-slice.ts'
import { useSelector } from 'react-redux'
import { currentMovieSelector } from './currentMovie-selector.ts'

export const MoviePage: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(Number(id)))
    }
  }, [dispatch, id])

  const currentMovie = useSelector(currentMovieSelector)

  return (
    <section>
      <div className={'relative rounded-xl overflow-hidden mb-4'}>
        <img src={currentMovie.backdrop?.url || '#'} alt="movieBanner" />
        <div className={'absolute bottom-8 left-8 z-10'}>
          <div className={'font-bold text-3xl mb-1'}>{currentMovie.name}</div>
          <div className={'flex gap-2'}>
            <span className={'bg-slate-400/40 px-2 rounded font-bold'}>{currentMovie.rating?.kp}</span>
            <span className={'font-bold text-lg'}>{currentMovie.year}</span>
          </div>
        </div>
      </div>
      <div className={'flex gap-2 mb-4'}>
        <span className={'font-bold'}>Жанр:</span>
        <ul>
          {currentMovie.genres?.map((g, index) => {
            return (
              <li className={'inline mr-2'} key={index}>
                {g.name},
              </li>
            )
          })}
        </ul>
      </div>
      <span className={' mb-2 bg-slate-400/40 px-2 rounded font-bold inline-block'}>{currentMovie.ageRating}+</span>
      <p className={'mb-4 text-lg'}>{currentMovie.description}</p>
      <a
        href={currentMovie.watchability?.items?.length ? currentMovie.watchability.items[0].url : '#'}
        className={'px-3 py-2 bg-blue-700 rounded font-bold text-xl hover:bg-blue-800 hover:transition-all'}>
        Смотреть
      </a>
    </section>
  )
}
