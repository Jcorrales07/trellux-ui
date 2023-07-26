import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    tasks: {
        task1: {
            id: 'task1',
            content: 'Card 1',
        },
        task2: {
            id: 'task2',
            content: 'Card 2',
        },
        task3: {
            id: 'task3',
            content: 'Card 3',
        },
        task4: {
            id: 'task4',
            content: 'Card 4',
        },
    },
    columns: {
        ToDo: {
            id: uuidv4(),
            title: 'To Do',
            taskIds: ['task1', 'task2', 'task3', 'task4'],
        },
        InProgress: {
            id: uuidv4(),
            title: 'In Progress',
            taskIds: [],
        },
        Done: {
            id: uuidv4(),
            title: 'Done',
            taskIds: [],
        },
    },
    columnOrder: ['ToDo', 'InProgress', 'Done'],
}

// [e.target.value]: {} // para agarrar el nombre que se le puso a la columna

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        addList: (state, action) => {
            state.columns[action.payload] = {
                id: uuidv4(),
                title: action.payload,
                taskIds: [],
            }
            state.columnOrder.push(action.payload)
        }
    },
})

export const { addList } = kanbanSlice.actions

export default kanbanSlice.reducer

// {
//     taskName: {
//         id: '',
//         content: '',
//     },
//     columnName: {
//         id: '',
//         title: '',
//         taskIds: [],
//     }
// }
