import './style.css'
import { quizData } from './data.js'

// State
let currentQuestionIndex = 0;
let questions = [...quizData];
let score = 0;

// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentNumSpan = document.getElementById('current-question-num');
const totalNumSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

// Initialize
function init() {
    shuffleQuestions();
    totalNumSpan.textContent = questions.length;
    loadQuestion();

    // Event Listeners
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    shuffleBtn.addEventListener('click', () => {
        shuffleQuestions();
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    });
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Update text
    questionText.textContent = currentQuestion.question;

    // Update UI counters
    currentNumSpan.textContent = currentQuestionIndex + 1;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Generate Options
    generateOptions(currentQuestion);

    // Update button states
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = true; // Disable next until an option is selected (optional, or allow skip)

    updateNextButtonText();
}

function generateOptions(currentQuestion) {
    optionsContainer.innerHTML = '';

    // Use options from data
    const options = [...currentQuestion.options];

    // Shuffle options
    shuffleArray(options);

    options.forEach(optionText => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = optionText;
        btn.addEventListener('click', () => handleOptionClick(btn, optionText, currentQuestion.answer));
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(selectedBtn, selectedAnswer, correctAnswer) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        // Highlight correct answer
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    nextBtn.disabled = false;
}

function updateNextButtonText() {
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerHTML = `
      Restart
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/><path d="M3 3v9h9"/></svg>
    `;
    } else {
        nextBtn.innerHTML = `
      Next
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    `;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Restart
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function shuffleQuestions() {
    shuffleArray(questions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the app
init();
