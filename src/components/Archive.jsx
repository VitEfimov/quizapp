
import { useState, useEffect } from 'react'
import './Archive.css'

function Archive() {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        setHistory(savedHistory)
    }, [])

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString()
    }

    const formatDuration = (ms) => {
        const seconds = Math.floor(ms / 1000)
        const m = Math.floor(seconds / 60)
        const s = seconds % 60
        return `${m}m ${s}s`
    }

    return (
        <div className="archive-wrapper">
            <div className="card">
                <h1>Your Progress</h1>

                {history.length === 0 ? (
                    <p className="empty-state">No attempts yet. Go take a quiz!</p>
                ) : (
                    <div className="table-container">
                        <table className="archive-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Topic</th>
                                    <th>Score</th>
                                    <th>Percentage</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map(attempt => (
                                    <tr key={attempt.id}>
                                        <td>{formatDate(attempt.endTime)}</td>
                                        <td>{attempt.topic}</td>
                                        <td>{attempt.score} / {attempt.total}</td>
                                        <td>
                                            <span className={`badge ${attempt.percentage >= 70 ? 'success' : 'warning'}`}>
                                                {attempt.percentage}%
                                            </span>
                                        </td>
                                        <td>{formatDuration(attempt.duration)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Archive
