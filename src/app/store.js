import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../slices/users.slice'
import boardsReducer from '../slices/boards.slice'

const store = configureStore({
    reducer: {
        users: usersReducer,    
        boards: boardsReducer
    },
})

export default store