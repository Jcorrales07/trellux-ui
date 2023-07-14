import { createSlice } from '@reduxjs/toolkit'

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        userBoards: [],
        bgPhotosBoards: [],
        selectedBoard: {},
    },
    reducers: {
        setBoards: (state, action) => {
            state.userBoards = action.payload
        },

        setPhotos: (state, action) => {
            state.bgPhotosBoards = action.payload
        },

        addNewBoard: (state, action) => {
            state.userBoards.push(action.payload)
        },

        setBoard: (state, action) => {
            state.selectedBoard = state.userBoards.find(
                (board) => board.id === action.payload
            )
            console.log('selsl', state.selectedBoard)
        },

        deleteBoard: (state, action) => {
            let selectedBoard = state.userBoards.findIndex(
                (board) => board.id === action.payload
            )

            state.userBoards.splice(selectedBoard, 1)
        },

        updateBoard: (state, action) => {
            const { id, title } = action.payload
            const board = state.userBoards.find((board) => board.id === id)
            const index = state.userBoards.findIndex((board) => board.id === id)
            state.userBoards[index] = { ...board, title }
        },
    },
})

// export de las functions (actions)
export const {
    addNewBoard,
    deleteBoard,
    setBoard,
    setBoards,
    setPhotos,
    updateBoard,
} = boardsSlice.actions

export default boardsSlice.reducer
