import { combineReducers } from 'redux'
import { mainReducer } from './mainReducer'
import { itemsReducer } from './itemsReducer'
import { settingsReducer } from './settingsReducer'
import { movieReducer } from './movieReducer'

export const rootReducer = combineReducers({
	main: mainReducer,
	items: itemsReducer,
	settings: settingsReducer,
	movie: movieReducer,
})