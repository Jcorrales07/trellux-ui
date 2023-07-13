import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ user, path }) => {
    if (!user) {
        return <Navigate to={path} />
    }
    return <Outlet />
}

export default ProtectedRoute
