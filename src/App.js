
import './index.css';
import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Experience from './pages/Experience';
import Contact from './pages/Contact';





function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full bg-teal-400">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} /> 
                    <Route exact path="/experience" element={<Experience/>}/>
                    <Route exact path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </div>

);
}

export default App;