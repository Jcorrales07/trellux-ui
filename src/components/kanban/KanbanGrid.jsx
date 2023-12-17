// Lo que hay que reparar aca es:
// 0. Tengo que rediseñar la estructura del drag n drop, el que tengo en el slice es el ejemplo del curso de react-beautiful-dnd
// 1. Si yo muevo una columna, que se actualice el estado y que se guarde la modificacion en la base de datos
// 2. Si yo muevo una tarea de columna, que se quede ahi.
// 3. Que el boton de agregar columna no se mueva
// 4. Que el boton de "Saev Changes" me guarde el estado, en mongo

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import KanbanColumn from './KanbanColumn'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import '../css/BoardGrid.css'
// Creo que si voy a usar REDUX
// Simulando el estado de las listas

const KanbanGrid = () => {
    const kanbanState = useSelector((state) => state.kanban)
    console.log('initial state', kanbanState)
    // console.log(kanbanState.columnOrder)
    // El setLists lo voy a usar cuando se agregue una nueva lista al estado de redux y asi se actualizan las listas
    const [lists, setLists] = useState(kanbanState)

    return (
        //h-[86.3vh]
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
                droppableId={'kanban-grid'}
                direction="horizontal"
                type="list"
            >
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        id="scrollbarRounded"
                        className="h-[86.3vh] w-full p-5 flex flex-row overflow-scroll scrollbar-track-slate-950 scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-thin scrollbar-w-1.5 scrollbar-corner-indigo-700 scrollbar-corner-rounded-full"
                    >
                        {lists.columnOrder.map((columnId, index) => {
                            // console.log('columnId', columnId)
                            const column = lists.columns[columnId]
                            const tasks = lists.columns[columnId].taskIds.map(
                                (taskId) => lists.tasks[taskId]
                            )

                            // console.log('column', column)
                            // console.log('tasks', tasks)
                            return (
                                <KanbanColumn
                                    key={column.id}
                                    columnId={column.title}
                                    column={column}
                                    tasks={tasks}
                                    index={index}
                                />
                            )
                        })}
                        <div>
                            {/* Para que este boton de agregar columna no se mueva, tengo que agarrar el width en donde estan las listas, para que se mantenga en su lugar */}
                            <KanbanColumn
                                key={'addColumn'}
                                columnId={'addColumn'}
                                column={null}
                                tasks={null}
                                index={lists.columnOrder.length}
                            />
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )

    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result

        if (!destination) {
            return
        }

        // Si es el mismo destino y el mismo indice
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        // Si muevo una lista en otro orden
        if (type === 'list') {
            const newListOrder = Array.from(lists.columnOrder)
            newListOrder.splice(source.index, 1)
            newListOrder.splice(destination.index, 0, draggableId)

            const newState = {
                ...lists,
                columnOrder: newListOrder,
            }

            setLists(newState)
            return
        }

        console.log('source', source)
        console.log('destination', destination)
        const columnStart = kanbanState.columns[source.droppableId]
        const columnFinish = kanbanState.columns[destination.droppableId]

        // Si muevo una tarea en la misma lista
        if (columnStart === columnFinish) {
            const newTaskIds = Array.from(columnStart.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...columnStart,
                taskIds: newTaskIds,
            }

            console.log('newColumn', newColumn)
            console.log('newColumn.title', newColumn.title.replace(' ', ''))

            //PROBLEMAS
            const newState = {
                ...kanbanState,
                columns: {
                    ...kanbanState.columns,
                    [newColumn.title.replace(' ', '')]: newColumn,
                },
            }

            console.log('newState', newState)

            setLists(newState)
            return
        }

        // Si muevo una tarea
        const startTaskIds = Array.from(columnStart.taskIds)
        startTaskIds.splice(source.index, 1)

        const newStart = {
            ...columnStart,
            taskIds: startTaskIds,
        }

        const finishTaskIds = Array.from(columnFinish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)

        const newFinish = {
            ...columnFinish,
            taskIds: finishTaskIds,
        }

        const newState = {
            ...kanbanState,
            columns: {
                ...kanbanState.columns,
                [newStart.title.replace(' ', '')]: newStart,
                [newFinish.title.replace(' ', '')]: newFinish,
            },
        }

        setLists(newState)
        //PROBLEMAS
    }
}

export default KanbanGrid
