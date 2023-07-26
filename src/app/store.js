import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../slices/users.slice'
import boardsReducer from '../slices/boards.slice'
import kanbanReducer from '../slices/kanban.slice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        boards: boardsReducer,
        kanban: kanbanReducer,
    },
})

export default store
