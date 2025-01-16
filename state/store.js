import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

import todoReducer from './todo-redux'

// Put redux reducers into one object to ease future pain
const reducers = {
	todo: todoReducer
}

// Configuration for redux persist
const persistConfig = {
	key: 'todoApp',
	storage: AsyncStorage
}

// Adding redux persist to cache user data and will automatically load every time user starts the app
const persistedReducer = persistReducer(persistConfig, combineReducers(Object.assign({}, reducers)))
const store = createStore(persistedReducer)

// Needed to send persistor for PersistGate during first time render
const persistor = persistStore(store)

export default {store, persistor}
