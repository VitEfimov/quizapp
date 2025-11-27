
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { quizData } from '../data/questions'
import { shuffleArray } from '../utils/shuffle'
import './Quiz.css'

function Quiz() {
    const { topic } = useParams()
    const navigate = useNavigate()

    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [loading, setLoading] = useState(true)
    const [startTime] = useState(Date.now())
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isAnswerChecked, setIsAnswerChecked] = useState(false)

    useEffect(() => {
        const topicQuestions = quizData.filter(q => q.category === decodeURIComponent(topic))

        if (topicQuestions.length === 0) {
            alert('Topic not found!')
            navigate('/')
            return
        }

        // Shuffle questions and options for each question
        // Select up to 20 questions
        const shuffledQuestions = shuffleArray(topicQuestions).slice(0, 20).map(q => ({
            ...q,
            options: shuffleArray(q.options)
        }))

        setQuestions(shuffledQuestions)
        setLoading(false)
    }, [topic, navigate])

    const handleOptionClick = (option) => {
        if (isAnswerChecked) return
        setSelectedAnswer(option)
        setIsAnswerChecked(true)

        if (option === questions[currentQuestionIndex].answer) {
            setScore(prev => prev + 1)
        }
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedAnswer(null)
            setIsAnswerChecked(false)
        } else {
            // Finish Quiz
            const endTime = Date.now()
            navigate('/result', {
                state: {
                    topic,
                    score: isAnswerChecked && selectedAnswer === questions[currentQuestionIndex].answer ? score : score,
                    total: questions.length,
                    startTime,
                    endTime
                }
            })
        }
    }

    if (loading) return <div className="loading">Loading...</div>

    const currentQuestion = questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex) / questions.length) * 100

    return (
        <div className="quiz-wrapper">
            <div className="card">
                <div className="quiz-header">
                    <h2>{topic} Mastery</h2>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="score-board">
                        Question {currentQuestionIndex + 1} / {questions.length}
                    </div>
                </div>

                <div className="question-section">
                    <h3 className="question-text">{currentQuestion.question}</h3>

                    <div className="options-list">
                        {currentQuestion.options.map((option, index) => {
                            let btnClass = "option-btn"
                            if (isAnswerChecked) {
                                if (option === currentQuestion.answer) {
                                    btnClass += " correct"
                                } else if (option === selectedAnswer) {
                                    btnClass += " wrong"
                                } else {
                                    btnClass += " disabled"
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    className={btnClass}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={isAnswerChecked}
                                >
                                    {option}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="controls">
                    <button
                        className="btn btn-primary"
                        onClick={handleNext}
                        disabled={!isAnswerChecked}
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quiz
