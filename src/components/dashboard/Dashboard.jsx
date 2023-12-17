// Problema #1: Al recargar la página, se pierde la informacion del usuario logueado, se queda como que si fuera una sesion nueva
// Es un problema serio porque pasa en el kanban tambien, y se pierde la informacion de los tableros.
// En conclusion, se pierde el estado de la aplicacion al recargar la pagina.

import React from 'react'
import Sidebar from './Sidebar'
import Boards from '../board/Boards'
import NavbarBoard from '../board/NavbarBoard'

import { useSelector } from 'react-redux'

const Dashboard = () => {
    const user = useSelector((state) => state.users.userLogged)
    

    return (
        <>
            <NavbarBoard />
            <div className="relative flex flex-row max-w-screen-xl m-auto ">
                <Sidebar />
                <Boards />
            </div>
        </>
    )
}

export default Dashboard
