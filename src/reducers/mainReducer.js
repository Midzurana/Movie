import { GET_DATA, ERROR_FETCH, SET_LOADING, SEARCH_MOVIE } from '../constants/constants'

const initialState = {
    isLoading: true,
    error: '',
    items: [],
    lang: 'en-US',
    page: 1,
}

export const mainReducer = (state = initialState, action) => {
  switch(action.type) {
	case GET_DATA:
      return { ...state, items: action.data}

    case SET_LOADING:
      return {...state, isLoading: action.isLoading}

    case ERROR_FETCH:
      return {...state, error: action.message}

    case SEARCH_MOVIE:
      return { ...state, items: action.data}

    default: 
        return state
  }
}
