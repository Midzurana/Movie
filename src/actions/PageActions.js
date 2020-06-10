import axios from 'axios'
import { API_KEY, GET_DATA, ERROR_FETCH, SET_LOADING } from '../constants/constants';

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
