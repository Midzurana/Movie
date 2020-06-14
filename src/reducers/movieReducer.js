import { GET_DETAILED_MOVIE, SET_MOVIE_LOADING } from '../constants/constants'

const initialState = {
    item: {},
    isLoading: true,
}

export function movieReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DETAILED_MOVIE:
          return { ...state, item: action.item }

        case SET_MOVIE_LOADING: 
            return { ...state, isLoading: action.isLoading }
    default:
        return state;
    }
}