import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, user, path }) => {
    if (!user) {
        return <Navigate to={path} />
    }
    return children
}

export default ProtectedRoute
