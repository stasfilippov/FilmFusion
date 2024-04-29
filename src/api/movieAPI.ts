import axios from 'axios'
import {components, operations} from '../../.temp/types'

const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  // withCredentials: ,
  headers: {
    'X-API-KEY': '7H3RGW4-70K4045-J0H2QZX-Q2Y9A9K',
  },
})

//api
export const movieAPI = {
  getMovieById(id: number) {
    return instance.get<components["schemas"]["MovieDtoV1_4"]>(`/movie/${id}`)
  },
  getNewMovies() {
    return instance.get<components["schemas"]["MovieDocsResponseDtoV1_4"]>('/movie?year=2024')
  },
  getMoviesByGenre(genre: string) {
    return instance.get<components["schemas"]["MovieDocsResponseDtoV1_4"]>(`/movie?genres.name=${genre}`)
  }
}
