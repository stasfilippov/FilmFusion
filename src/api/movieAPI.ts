import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  withCredentials: true,
  headers: {
    'X-API-KEY': '7H3RGW4-70K4045-J0H2QZX-Q2Y9A9K',
  },
})

//api
export const movieAPI = {
  getNewMovies() {
    return instance.get('/movie?year=2024')
  },
  getDramsMovies() {
    return instance.get('/movie?genres.name=драма')
  },
  getComedyMovies() {
    return instance.get('/movie?genres.name=комедия')
  },
  getHorrorMovies() {
    return instance.get('/movie?genres.name=ужасы')
  },
}
