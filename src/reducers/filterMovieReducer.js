const initialState = {
    input: ''
}

export function filterMovieReducer(state = initialState, action) {
    if (action.type === 'FIND_MOVIE') {
        return action.payload
    }
    return state
}