import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children, user, path }) => {
    if (!user) {
        return <Navigate to={path} />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute
