/**
 * This is only for testing purposes
 */

import { createStore } from 'redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

import todoReducer from './todo-redux'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  todoListData: todoReducer
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	})
}

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store
