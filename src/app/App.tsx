import './App.css'
import { Layout } from '../layout/Layout.tsx'
import { Home } from '../pages/Home/Home.tsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MoviePage } from '../pages/MoviePage/MoviePage.tsx'

export const PATH = {
  HOME: '/home',
  MOVIE: '/movie',
  ERROR: '/error',
} as const
export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.HOME} />} />

        <Route path={PATH.HOME} element={<Home />} />

        <Route path={`/movie/:id`} element={<MoviePage />} />

        {/*<Route path={'/*'} element={<Error404/>}/>*/}
      </Routes>
    </Layout>
  )
}
