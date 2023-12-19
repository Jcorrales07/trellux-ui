// Lo que hay que reparar aca es:
// 0. Tengo que rediseñar la estructura del drag n drop, el que tengo en el slice es el ejemplo del curso de react-beautiful-dnd
// 1. Si yo muevo una columna, que se actualice el estado y que se guarde la modificacion en la base de datos
// 2. Si yo muevo una tarea de columna, que se quede ahi.
// 3. Que el boton de agregar columna no se mueva
// 4. Que el boton de "Saev Changes" me guarde el estado, en mongo

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// import { useSelector } from 'react-redux'
import KanbanColumn from './KanbanColumn'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import '../css/BoardGrid.css'
// Creo que si voy a usar REDUX
// Simulando el estado de las listas

import initialData from './initialData'

const KanbanGrid = () => {
    // const kanbanState = useSelector((state) => state.kanban) // state de prueba
    const kanbanState = initialData

    const [listState, setListState] = useState(kanbanState)

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
                        {listState.columnOrder.map((columnId, index) => {
                            const column = listState.columns[columnId]
                            const tasks = listState.columns[
                                columnId
                            ].taskIds.map((taskId) => listState.tasks[taskId])

                            console.log('tasks', tasks)

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
                                index={listState.columnOrder.length}
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

        // Orden de las listas (columnas)
        if (destination.droppableId === 'kanban-grid' && type === 'list') {
            console.log('Antiguo orden de las listas', listState.columnOrder)
            const newListOrder = Array.from(listState.columnOrder)
            
            newListOrder.splice(source.index, 1)
            console.log('eliminacion', newListOrder)

            newListOrder.splice(destination.index, 0, draggableId)
            console.log('insercion', newListOrder)

            console.log('Nuevo orden de las listas', newListOrder)

            const newState = {
                ...listState,
                columnOrder: newListOrder,
            }

            console.log('actualizacion del estado', newState)

            setListState(newState)
            return
        }

        // Orden de las tareas (cards)
        if (destination.droppableId === source.droppableId) {
            // console.log('entrooooooooooooooooooooooooooo')

            console.log(
                'tarea movida en la misma columna',
                destination.droppableId,
                source.droppableId,
                type
            )
            const columnModified = listState.columns[source.droppableId]
            const newTaskIdsArr = Array.from(columnModified.taskIds)

            newTaskIdsArr.splice(source.index, 1)
            newTaskIdsArr.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...columnModified,
                taskIds: newTaskIdsArr,
            }

            const newState = {
                ...listState,
                columns: {
                    ...listState.columns,
                    [source.droppableId]: newColumn,
                },
            }

            console.log(newState.columns)

            console.log(listState, newState)

            setListState(newState)

            return
        }
    }
}

export default KanbanGrid
