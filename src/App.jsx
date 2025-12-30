
import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Archive from './components/Archive'
import Cheatsheets from './components/Cheatsheets'
import './App.css'

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/" className="logo">DEV QUIZ</Link>
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/cheatsheets" className={location.pathname === '/cheatsheets' ? 'active' : ''}>Cheatsheets</Link>
          <Link to="/archive" className={location.pathname === '/archive' ? 'active' : ''}>Archive</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:topic" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/cheatsheets" element={<Cheatsheets />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
