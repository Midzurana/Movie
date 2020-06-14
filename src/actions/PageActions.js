import axios from 'axios'
import { API_KEY, GET_DATA, ERROR_FETCH, SET_LOADING, SEARCH_MOVIE, GET_DETAILED_MOVIE, SET_MOVIE_LOADING } from '../constants/constants';

export function setLanguage(lang) {
    return {
        type: 'SET_LANG',
        payload: lang,
    }
}

export const getData = (data) => {
    return {
        type: GET_DATA,
        data
    }
}

export const getError = (message) => {
    return {
        type: ERROR_FETCH,
        error: message
    }
}

export const updateLoading = (loading) => {
    return {
        type: SET_LOADING,
        isLoading: loading
    }
}

export const getDataBySearch = (data) => {
    return {
        type: SEARCH_MOVIE,
        data
    }
}

export const receiveDetailedFilm = (data) => {
    return {
        type: GET_DETAILED_MOVIE,
        item: data
    }
}

export const setMovieLoading = (isLoading) => {
    return {
        type: SET_MOVIE_LOADING,
        isLoading
    }
}


export const fetchData = (page, language, type) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`https://api.themoviedb.org/3/list/${page}?api_key=${API_KEY}&language=${language}`);
            dispatch(getData(result.data.items))
        } catch (error) {   
            dispatch(getError(error.errorMessage))
        } finally {
            dispatch(updateLoading(false))
        }
    }
}

export const searchMovie = (language, value) => {
    return async (dispatch) => {
        try {
            const searchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f0e12567411c47f3551a9cc089007ef8&language=${language}}&query=${value}&include_adult=false`);
            dispatch(getDataBySearch(searchResult.data.results))
        } catch (error) {   
            dispatch(getError(error.errorMessage))
        } finally {
            dispatch(updateLoading(false))
        }
    }
}

export function fetchDetailedFilm(id, page = 1) {
    const urls = [
        {
            name: 'details',
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        },
        {
            name: 'recomendations',
            url: `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=${page}`
        },
        {
            name: 'similar',
            url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`
        }
    ];
    return async (dispatch) => {
        const result = {};
        for await (const item of urls) {
            const { data } = await axios.get(item.url);
            result[item.name] = data;
        }
        dispatch(receiveDetailedFilm(result));
        dispatch(setMovieLoading(false));
    };
}