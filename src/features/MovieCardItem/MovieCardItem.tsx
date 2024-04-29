import React from 'react'
import { components } from '../../../.temp/types.ts'
import { Link } from 'react-router-dom'

type MovieCardItemPropsType = {
  item: components['schemas']['MovieDtoV1_4']
}
export const MovieCardItem: React.FC<MovieCardItemPropsType> = ({ item }) => {
  return (
    <div className={'relative mx-3 rounded-xl overflow-hidden hover:scale-105 transition-all'}>
      <Link to={`/movie/${item.id}`}>
        <img src={item.poster?.url || '#'} alt="moviePicture" />
        <div className={'absolute bottom-3 left-3 bg-slate-400/80 px-2 rounded'}>
          <h5 className={'font-bold text-base'}>{item.name}</h5>
          <span>{item.year}</span>
        </div>
      </Link>
    </div>
  )
}
