import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        userLogged: null,
    },
    reducers: {
        // aca van las funciones que modifican el state
        // (state, action) => { ... }
        // action trae payload y type
        // state es el state actual

        setUserLogged: (state, action) => {
            state.userLogged = action.payload
        },

        deleteUserLogged: (state, action) => {
            state.userLogged = null
        },
    },
})

// export de las functions (actions)
export const { setUserLogged, deleteUserLogged } = usersSlice.actions

export default usersSlice.reducer
