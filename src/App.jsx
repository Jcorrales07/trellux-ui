import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {
    HomePage,
    Login,
    Register,
    Dashboard,
    KanbanBoard,
    ProtectedRoute,
} from './components'
import { useSelector } from 'react-redux'

const App = () => {
    const user = useSelector((state) => state.users.userLogged)
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute user={user} path={'/login'}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/board/:boardId"
                        element={
                            <ProtectedRoute user={user} path={'/login'}>
                                <KanbanBoard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
            <Toaster />
        </>
    )
}

export default App
