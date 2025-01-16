import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

import todoReducer from './todo-redux'

const reducers = {
	todo: todoReducer
}

const persistConfig = {
	key: 'todoApp',
	storage: AsyncStorage
}

// Adding redux persist to cache user data and will automatically load every time user starts the app
const persistedReducer = persistReducer(persistConfig, combineReducers(Object.assign({}, reducers)))
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export default {store, persistor}
