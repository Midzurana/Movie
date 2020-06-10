const initialState = {
    isLoading: true,
    error: '',
    lang: 'en-US',
}

export function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LANG':
            return { ...state, lang: action.payload }

        default:
            return state
    }
}