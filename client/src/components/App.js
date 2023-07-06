import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar'

function App() {
    return (
        <Router>
            <Navbar />
            <h1>ArtsEnclave</h1>
        </Router>
    )
}

export default App