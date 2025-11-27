
import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './Result.css'

function Result() {
    const location = useLocation()
    const navigate = useNavigate()
    const { state } = location

    useEffect(() => {
        if (!state) {
            navigate('/')
            return
        }

        // Save to localStorage
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        const newAttempt = {
            id: Date.now(),
            topic: state.topic,
            score: state.score,
            total: state.total,
            percentage: Math.round((state.score / state.total) * 100),
            startTime: state.startTime,
            endTime: state.endTime,
            duration: state.endTime - state.startTime
        }

        // Check if this attempt is already saved (to prevent duplicates on refresh)
        const lastAttempt = history[0]
        if (!lastAttempt || lastAttempt.startTime !== newAttempt.startTime) {
            history.unshift(newAttempt)
            localStorage.setItem('quizHistory', JSON.stringify(history))
        }

    }, [state, navigate])

    if (!state) return null

    const percentage = Math.round((state.score / state.total) * 100)
    const durationSeconds = Math.floor((state.endTime - state.startTime) / 1000)
    const minutes = Math.floor(durationSeconds / 60)
    const seconds = durationSeconds % 60

    return (
        <div className="result-wrapper">
            <div className="card result-card">
                <h1>Quiz Completed!</h1>
                <div className="score-circle">
                    <span className="score-text">{percentage}%</span>
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="label">Topic</span>
                        <span className="value">{state.topic}</span>
                    </div>
                    <div className="stat-item">
                        <span className="label">Score</span>
                        <span className="value">{state.score} / {state.total}</span>
                    </div>
                    <div className="stat-item">
                        <span className="label">Time</span>
                        <span className="value">{minutes}m {seconds}s</span>
                    </div>
                </div>

                <div className="resources-section">
                    <h3>Keep Learning</h3>
                    <a href={`https://www.google.com/search?q=${state.topic}+online+compiler`} target="_blank" rel="noopener noreferrer" className="resource-link">
                        💻 Open Online {state.topic} Compiler
                    </a>
                    <a href={`https://www.w3schools.com/${state.topic.toLowerCase()}/`} target="_blank" rel="noopener noreferrer" className="resource-link">
                        📚 {state.topic} Tutorials (W3Schools)
                    </a>
                </div>

                <div className="actions">
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                    <Link to="/archive" className="btn btn-primary">View Archive</Link>
                </div>
            </div>
        </div>
    )
}

export default Result
