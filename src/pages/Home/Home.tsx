import { useEffect } from 'react'
import { useAppDispatch } from '../../utils/redux-utils.ts'
import { Hero } from './Hero/Hero.tsx'
import { DramsFilms } from './DramsFilms/DramsFilms.tsx'
import { ComedyFilms } from './ComedyFilms/ComedyFilms.tsx'
import { HorrorFilms } from './HorrorsFilms/HorrorFilms.tsx'
import { fetchComedyMovies, fetchDramsMovies, fetchHorrorMovies, fetchNewMovies } from './moviesData-slice.ts'
import { appSelectorStatus } from '../../app/app-selectors.ts'
import { useSelector } from 'react-redux'
import { Loader } from '../../components/Loader/Loader.tsx'

export const Home = () => {
  const dispatch = useAppDispatch()
  const appStatus = useSelector(appSelectorStatus)

  useEffect(() => {
    dispatch(fetchNewMovies())
    dispatch(fetchDramsMovies())
    dispatch(fetchComedyMovies())
    dispatch(fetchHorrorMovies())
  }, [dispatch])
  return (
    <>
      {appStatus === 'loading' && <Loader />}
      <div>
        <Hero />
        <DramsFilms />
        <ComedyFilms />
        <HorrorFilms />
      </div>
    </>
  )
}
