import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'https://api.kinopoisk.dev/v1.4',
	withCredentials: true,
	headers: {
		'X-API-KEY': '7H3RGW4-70K4045-J0H2QZX-Q2Y9A9K'
	}
})


//api
export const movieAPI = {
	getMovies() {
		return instance.get('')
	}
}
