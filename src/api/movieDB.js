import axios from "axios";
import defaultValues from '../../defaultValues'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: defaultValues.tmdb_key,
        language: 'es-MX'
    }
})

export default movieDB