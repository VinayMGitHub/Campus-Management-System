import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';


import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Header from './Header';
import SideNav from './components/SideNav';

function App() {
  
  return(
    <>
      <SideNav/>
      {/* <h1>test</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </>
  );
  
}

export default App
