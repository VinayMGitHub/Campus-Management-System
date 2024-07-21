import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Student from './pages/Student';

import SideNav from './components/SideNav';
import StickyLabel from './components/StickyLabel';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <StickyLabel toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <SideNav isSidebarOpen={isSidebarOpen} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/student" element={<Student />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
