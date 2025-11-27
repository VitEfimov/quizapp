
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { quizData } from '../data/questions'
import './Home.css'

function Home() {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        // Extract unique categories
        const uniqueCategories = [...new Set(quizData.map(q => q.category))]
        setCategories(uniqueCategories)
    }, [])

    const handleTopicSelect = (topic) => {
        navigate(`/quiz/${encodeURIComponent(topic)}`)
    }

    return (
        <div className="home-container">
            <div className="card">
                <h1>Select a Topic</h1>
                <p>Choose a category to start your quiz mastery journey.</p>

                <div className="topic-grid">
                    {categories.map(topic => (
                        <button
                            key={topic}
                            className="topic-btn"
                            onClick={() => handleTopicSelect(topic)}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                <div className="practice-section">
                    <p>Looking for more challenges?</p>
                    <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noopener noreferrer" className="practice-link">
                        Practice on HackerRank
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
