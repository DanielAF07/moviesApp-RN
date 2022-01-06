import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import movieDB from '../api/movieDB'

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState([])
    const [popular, setPopular] = useState([])
    const [moviesState, setMoviesState] = useState({})
    const [error, setError] = useState(false)


    const getNowPlaying = async () => {
        try {
            const res = await movieDB.get('/now_playing')
            const movies = res.data.results
            setNowPlaying(movies)
            setIsLoading(false)
            console.log(`Done ${Platform.OS}`);
        } catch (err) {
            setIsLoading(false)
            setError(err)
        }
    }

    const getPopular = async () => {
        try {
            const res = await movieDB.get('/popular')
            const movies = res.data.results
            setPopular(movies)
            setIsLoading(false)
            console.log(`Done ${Platform.OS}`);
        } catch (err) {
            setIsLoading(false)
            setError(err)
        }
    }

    const getMovies = async () => {
        try {
            const nowPlayingPromise = movieDB.get('/now_playing')
            const popularPromise = movieDB.get('/popular')
            const topRatedPromise = movieDB.get('/top_rated')
            const upcomingPromise = movieDB.get('/upcoming')

            const responses = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])

            setMoviesState({
                nowPlaying: responses[0].data.results,
                popular: responses[1].data.results,
                topRated: responses[2].data.results,
                upcoming: responses[3].data.results
            })
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            setError(err)
        }
    }

    useEffect(() => {
        getMovies()
    }, []);

    return {
        ...moviesState,
        isLoading,
        error
    }
};

export default useMovies;