const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const quizContainer = document.querySelector('.quiz-container');
const quizSection = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const endScreen = document.getElementById('end-screen');
const finalScoreElement = document.getElementById('final-score');

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    endScreen.classList.add('hide');
    quizSection.classList.remove('hide');
    quizSection.classList.remove('animate__fadeOut');
    quizSection.classList.add('animate__fadeIn');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    scoreElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });
    if (correct) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    } else {
        scoreElement.innerText = `Score: ${score}`;
    }
    scoreElement.classList.remove('hide');

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showFinalScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.style.backgroundColor = '#28a745';
        element.style.color = '#fff';
    } else {
        element.style.backgroundColor = '#dc3545';
        element.style.color = '#fff';
    }
}

function clearStatusClass(element) {
    element.style.backgroundColor = '#f0f4f8';
    element.style.color = '#333';
}

function showFinalScore() {
    quizSection.classList.add('animate__fadeOut');
    quizSection.classList.remove('animate__fadeIn');
    setTimeout(() => {
        quizSection.classList.add('hide');
        endScreen.classList.remove('hide');
        endScreen.classList.add('animate__fadeIn');
        finalScoreElement.innerText = score;
    }, 500);
}

const questions = [
    {
        question: 'What is the Preamble to the Constitution?',
        answers: [
            { text: 'An introduction to the Constitution', correct: true },
            { text: 'The main body of the Constitution', correct: false },
            { text: 'A schedule in the Constitution', correct: false },
            { text: 'A list of fundamental rights', correct: false }
        ]
    },
    {
        question: 'How many articles are there in the Indian Constitution?',
        answers: [
            { text: '395', correct: true },
            { text: '448', correct: false },
            { text: '365', correct: false },
            { text: '450', correct: false }
        ]
    },
    {
        question: 'Who is known as the Father of the Indian Constitution?',
        answers: [
            { text: 'Mahatma Gandhi', correct: false },
            { text: 'Jawaharlal Nehru', correct: false },
            { text: 'B.R. Ambedkar', correct: true },
            { text: 'Sardar Patel', correct: false }
        ]
    },
    {
        question: 'Which part of the Indian Constitution deals with Fundamental Rights?',
        answers: [
            { text: 'Part III', correct: true },
            { text: 'Part II', correct: false },
            { text: 'Part IV', correct: false },
            { text: 'Part I', correct: false }
        ]
    },
    {
        question: 'Which article of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex or place of birth?',
        answers: [
            { text: 'Article 14', correct: false },
            { text: 'Article 19', correct: false },
            { text: 'Article 15', correct: true },
            { text: 'Article 21', correct: false }
        ]
    },
    {
        question: 'Which schedule of the Indian Constitution deals with the division of powers between the Union and the States?',
        answers: [
            { text: 'Seventh Schedule', correct: true },
            { text: 'Sixth Schedule', correct: false },
            { text: 'Eighth Schedule', correct: false },
            { text: 'Ninth Schedule', correct: false }
        ]
    },
    {
        question: 'How many members can the President of India nominate to the Rajya Sabha?',
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '14', correct: false },
            { text: '16', correct: false }
        ]
    },
    {
        question: 'Which amendment to the Indian Constitution is known as the "Mini-Constitution"?',
        answers: [
            { text: '42nd Amendment', correct: true },
            { text: '44th Amendment', correct: false },
            { text: '74th Amendment', correct: false },
            { text: '86th Amendment', correct: false }
        ]
    },
    {
        question: 'Which article of the Indian Constitution empowers the Parliament to amend the Constitution?',
        answers: [
            { text: 'Article 368', correct: true },
            { text: 'Article 370', correct: false },
            { text: 'Article 352', correct: false },
            { text: 'Article 356', correct: false }
        ]
    },
    {
        question: 'How many fundamental duties are listed in the Indian Constitution?',
        answers: [
            { text: '10', correct: false },
            { text: '11', correct: true },
            { text: '12', correct: false },
            { text: '9', correct: false }
        ]
    }
];
