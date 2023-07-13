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
                        element={<ProtectedRoute user={user} path={'/login'} />}
                    >
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/board/:boardId"
                            element={<KanbanBoard />}
                        />
                    </Route>
                </Routes>
            </Router>
            <Toaster />
        </>
    )
}

export default App
