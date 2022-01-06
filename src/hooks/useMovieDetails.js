import { useEffect, useState } from "react";
import movieDB from '../api/movieDB'
const useMovieDetails = (movieId) => {
    const [state, setState] = useState({
        isLoading: true,
        movieFull: undefined,
        cast: [],
        error: false
    })

    useEffect(() => {
        getMovieDetails()
    }, []);

    const getMovieDetails = async () => {
        try {

            const moviePromise = movieDB.get(`/${movieId}`)
            const castPromise = movieDB.get(`/${movieId}/credits`)
            
            const responses = await Promise.all([moviePromise, castPromise]);
            
            setState({
                movieFull: responses[0].data,
                cast: responses[1].data.cast,
                isLoading: false,
                error: false
            })
        } catch (err) {
            setState({
                ...state,
                error: true,
                isLoading: false
            })
        }
    }
    
    return {
        ...state
    }
};

export default useMovieDetails;