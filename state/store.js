import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import todoReducer from './todo-redux'

const persistConfig = {
	key: 'todoApp',
	storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, todoReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export default {store, persistor}
