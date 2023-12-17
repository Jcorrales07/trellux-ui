import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import usersReducer from '../slices/users.slice'
import boardsReducer from '../slices/boards.slice'
import kanbanReducer from '../slices/kanban.slice'


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    kanban: kanbanReducer,
}));

const store = configureStore({
    reducer: persistedReducer,
})

const persistor = persistStore(store)

export { store, persistor }
