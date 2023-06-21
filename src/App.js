import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='userDetails' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
