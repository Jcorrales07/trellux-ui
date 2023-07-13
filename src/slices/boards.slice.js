import { createSlice } from '@reduxjs/toolkit'

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        userBoards: [],
    },
    reducers: {
        setBoards: (state, action) => {
            state.userBoards = action.payload
        },

        addNewBoard: (state, action) => {
            state.userBoards.push(action.payload)
        },

        getBoard: (state, action) => {
            let selectedBoard = state.userBoards.find(
                (board) => board.id === action.payload
            )
            return selectedBoard
        },

        deleteBoard: (state, action) => {
            let selectedBoard = state.userBoards.findIndex(
                (board) => board.id === action.payload
            )

            state.userBoards.splice(selectedBoard, 1)
        },

        updateBoard: (state, action) => {
            const { id, name, description } = action.payload
            const index = state.userBoards.findIndex((board) => board.id === id)
            state.userBoards[index] = { id, name, description }
        },
    },
})

// export de las functions (actions)
export const { addNewBoard, deleteBoard, getBoard, setBoards, updateBoard } =
    boardsSlice.actions

export default boardsSlice.reducer
