// Данные лексики
const vocabulary = {
    basicFoods: ['chleb', 'ryż', 'makaron', 'ser', 'jajko', 'mięso', 'ryba', 'zupa'],
    fruits: ['jabłko', 'banan', 'pomarańcza', 'truskawka', 'winogrono', 'arbuz', 'ananas'],
    vegetables: ['marchewka', 'pomidor', 'ziemniak', 'cebula', 'sałatka', 'brokuł', 'grzyb'],
    sweetsDrinks: ['ciasto', 'czekolada', 'lody', 'sok', 'kawa', 'herbata', 'woda']
};

// Вопросы для теста
const quizQuestions = [
    // Категория 1: Выбери правильный перевод
    {
        question: "Как будет 'хлеб' на польском?",
        options: ["chleb", "ryż", "ser", "mięso"],
        correctIndex: 0,
        type: "choose"
    },
    {
        question: "Как будет 'яблоко' на польском?",
        options: ["banan", "pomarańcza", "jabłko", "truskawka"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'сыр' на польском?",
        options: ["jajko", "mięso", "ser", "ryba"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'вода' на польском?",
        options: ["sok", "kawa", "herbata", "woda"],
        correctIndex: 3,
        type: "choose"
    },
    {
        question: "Как будет 'кофе' на польском?",
        options: ["herbata", "sok", "kawa", "woda"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'мясо' на польском?",
        options: ["ryba", "jajko", "mięso", "ser"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'чай' на польском?",
        options: ["kawa", "herbata", "sok", "woda"],
        correctIndex: 1,
        type: "choose"
    },
    {
        question: "Как будет 'торт' на польском?",
        options: ["czekolada", "lody", "ciasto", "ciasteczko"],
        correctIndex: 2,
        type: "choose"
    },
    
    // Категория 2: Что это за слово?
    {
        question: "Jabłko - что это такое?",
        options: ["Овощ", "Фрукт", "Напиток", "Мясо"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Marchewka - что это такое?",
        options: ["Фрукт", "Овощ", "Сладость", "Напиток"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Czekolada - что это такое?",
        options: ["Овощ", "Фрукт", "Сладость", "Напиток"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Kawa - что это такое?",
        options: ["Еда", "Фрукт", "Овощ", "Напиток"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Ryba - что это такое?",
        options: ["Овощ", "Фрукт", "Мясо/рыба", "Напиток"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Ciasto - что это такое?",
        options: ["Основная еда", "Овощ", "Сладость", "Напиток"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Herbata - что это такое?",
        options: ["Еда", "Фрукт", "Овощ", "Напиток"],
        correctIndex: 3,
        type: "category"
    },
    
    // Категория 3: Выбери лишнее
    {
        question: "Какое слово лишнее?",
        options: ["jabłko", "banan", "marchewka", "pomarańcza"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["kawa", "herbata", "sok", "ser"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["chleb", "ryż", "makaron", "arbuz"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["marchewka", "pomidor", "ziemniak", "czekolada"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["ciasto", "lody", "czekolada", "mięso"],
        correctIndex: 3,
        type: "category"
    },
    
    // Категория 4: Простые ситуации
    {
        question: "Что ты ешь на завтрак?",
        options: ["chleb", "zupa", "ciasto", "lody"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что ты пьёшь утром?",
        options: ["kawa", "zupa", "lody", "mięso"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что сладкое?",
        options: ["czekolada", "ryż", "mięso", "ryba"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что растёт на дереве?",
        options: ["jabłko", "marchewka", "ziemniak", "ryż"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что ты ешь в салате?",
        options: ["pomidor", "czekolada", "ciasto", "kawa"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что холодное и сладкое?",
        options: ["lody", "zupa", "ryż", "chleb"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что из этого фрукт?",
        options: ["banan", "marchewka", "ziemniak", "chleb"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что из этого овощ?",
        options: ["ziemniak", "jabłko", "banan", "pomarańcza"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что можно пить?",
        options: ["woda", "chleb", "mięso", "ser"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что делают из молока?",
        options: ["ser", "mięso", "ryba", "chleb"],
        correctIndex: 0,
        type: "situation"
    }
];

// Состояние игры
const gameState = {
    currentScreen: 'vocabulary',
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    quizStarted: false
};

// DOM элементы
const screens = {
    vocabulary: document.getElementById('vocabulary-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const startQuizBtn = document.getElementById('start-quiz-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const backToVocabBtn = document.getElementById('back-to-vocab-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score');
const currentQuestionDisplay = document.getElementById('current-question');
const progressFill = document.getElementById('progress-fill');
const resultsMessage = document.getElementById('results-message');
const correctCountDisplay = document.getElementById('correct-count');
const incorrectCountDisplay = document.getElementById('incorrect-count');
const percentageDisplay = document.getElementById('percentage');
const circleScoreText = document.getElementById('circle-score-text');
const scoreCircle = document.getElementById('score-circle');

// Инициализация игры
function initGame() {
    // Настройка обработчиков событий
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);
    backToVocabBtn.addEventListener('click', showVocabularyScreen);
    
    // Показать начальный экран
    showScreen('vocabulary');
    
    console.log("Игра 'Польские слова: Еда' инициализирована!");
}

// Показать определённый экран
function showScreen(screenName) {
    // Скрыть все экраны
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать запрошенный экран
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
    
    // Обновить UI в зависимости от экрана
    if (screenName === 'quiz') {
        updateQuizUI();
    } else if (screenName === 'results') {
        showResults();
    }
}

// Начать тест
function startQuiz() {
    // Сбросить состояние игры
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.userAnswers = [];
    gameState.quizStarted = true;
    
    // Обновить UI
    scoreDisplay.textContent = '0';
    currentQuestionDisplay.textContent = '1';
    progressFill.style.width = '0%';
    
    // Показать экран теста
    showScreen('quiz');
    
    // Показать первый вопрос
    displayQuestion();
}

// Показать текущий вопрос
function displayQuestion() {
    if (gameState.currentQuestionIndex >= quizQuestions.length) {
        showScreen('results');
        return;
    }
    
    const question = quizQuestions[gameState.currentQuestionIndex];
    
    // Обновить текст вопроса
    questionText.textContent = question.question;
    
    // Очистить контейнер вариантов
    optionsContainer.innerHTML = '';
    
    // Создать кнопки вариантов
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.dataset.index = index;
        
        button.addEventListener('click', () => selectAnswer(index));
        
        optionsContainer.appendChild(button);
    });
    
    // Обновить прогресс
    currentQuestionDisplay.textContent = gameState.currentQuestionIndex + 1;
    const progressPercent = (gameState.currentQuestionIndex / quizQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Отключить кнопку "Следующий" пока не выбран ответ
    nextQuestionBtn.disabled = true;
}

// Обработать выбор ответа
function selectAnswer(selectedIndex) {
    const question = quizQuestions[gameState.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const selectedButton = buttons[selectedIndex];
    const correctButton = buttons[question.correctIndex];
    
    // Отключить все кнопки
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Показать правильные/неправильные ответы
    if (selectedIndex === question.correctIndex) {
        selectedButton.classList.add('correct');
        gameState.score++;
        scoreDisplay.textContent = gameState.score;
        
        // Добавить анимацию пульсации к счёту
        scoreDisplay.parentElement.classList.add('pulse');
        setTimeout(() => {
            scoreDisplay.parentElement.classList.remove('pulse');
        }, 500);
    } else {
        selectedButton.classList.add('wrong');
        correctButton.classList.add('correct');
    }
    
    // Сохранить ответ пользователя
    gameState.userAnswers.push({
        questionIndex: gameState.currentQuestionIndex,
        selectedIndex: selectedIndex,
        isCorrect: selectedIndex === question.correctIndex
    });
    
    // Включить кнопку "Следующий"
    nextQuestionBtn.disabled = false;
}

// Показать следующий вопрос
function showNextQuestion() {
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showScreen('results');
    }
}

// Показать экран результатов
function showResults() {
    // Рассчитать итоговую статистику
    const totalQuestions = quizQuestions.length;
    const correctCount = gameState.score;
    const incorrectCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    // Обновить UI результатов
    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
    percentageDisplay.textContent = percentage;
    circleScoreText.textContent = correctCount;
    
    // Анимировать круг с результатом
    const circleCircumference = 2 * Math.PI * 54; // r = 54
    const offset = circleCircumference - (correctCount / totalQuestions) * circleCircumference;
    scoreCircle.style.strokeDashoffset = offset;
    
    // Установить конечное состояние прогресс-бара
    progressFill.style.width = '100%';
    
    // Показать соответствующее сообщение в зависимости от результата
    let message = '';
    if (percentage >= 90) {
        message = "Świetnie! Doskonale znasz polskie słowa na temat 'Jedzenia'!";
    } else if (percentage >= 70) {
        message = "Dobra robota! Dobrze znasz słowa o jedzeniu po polsku.";
    } else if (percentage >= 50) {
        message = "Nieźle! Ćwicz dalej, aby poprawić swój wynik.";
    } else {
        message = "Kontynuuj naukę! Powtórz słownictwo i spróbuj jeszcze raz.";
    }
    
    resultsMessage.textContent = message;
}

// Начать тест заново
function restartQuiz() {
    startQuiz();
}

// Показать экран с лексикой
function showVocabularyScreen() {
    showScreen('vocabulary');
}

// Обновить элементы UI теста
function updateQuizUI() {
    // Пока ничего не нужно
}

// Инициализировать игру при загрузке DOM
document.addEventListener('DOMContentLoaded', initGame);
