import React from 'react';
import { HomePage, Login, Register, Dashboard } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KanbanBoard from './components/kanban/KanbanBoard';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/board/:boardId" element={<KanbanBoard/>} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
