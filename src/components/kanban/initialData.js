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
        task5: {
            id: 'task5',
            content: 'Card 5',
        },
    },
    columns: {
        ToDo: {
            id: 'ToDo',
            title: 'To Do',
            taskIds: ['task1', 'task2', 'task3', 'task4', 'task5'],
        },
        InProgress: {
            id: 'InProgress',
            title: 'In Progress',
            taskIds: [],
        },
        Done: {
            id: 'Done',
            title: 'Done',
            taskIds: [],
        },
    },
    columnOrder: ['ToDo', 'InProgress', 'Done'],
}


export default initialState