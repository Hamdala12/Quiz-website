let quizzes = [];

function addQuiz() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.getElementById('correctAnswer').value;

    const newQuiz = { 
        question,
        options: [option1, option2, option3, option4],
        correctAnswer
    };

    quizzes.push(newQuiz);
    displayQuizzes();
    clearForm();
}


function displayQuizzes() {
    const quizList = document.getElementById('quizList');
    quizList.innerHTML = '';

    quizzes.forEach((quiz, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `${quiz.question}
            <button class="btn btn-danger btn-sm float-end" onclick="deleteQuiz(${index})">Delete</button>`;
        quizList.appendChild(li);
    });
}


function deleteQuiz(index) {
    quizzes.splice(index, 1);
    displayQuizzes();
}


function clearForm() {
    document.getElementById('quizForm').reset();
}


window.onload = function() {
    if (document.getElementById('quizContainer')) {
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = '';

        quizzes.forEach((quiz, index) => {
            const quizItem = document.createElement('div');
            quizItem.className = 'quiz-item';
            quizItem.innerHTML = `<h5>${quiz.question}</h5>
                ${quiz.options.map((option, idx) => `
                    <div>
                        <input type="radio" name="quiz${index}" value="${option}" id="option${index}_${idx}">
                        <label for="option${index}_${idx}">${option}</label>
                    </div>
                `).join('')}`;
            quizContainer.appendChild(quizItem);
        });
    }
};


function submitQuiz() {
    const resultContainer = document.getElementById('resultContainer');
    let score = 0;

    quizzes.forEach((quiz, index) => {
        const selectedOption = document.querySelector(`input[name="quiz${index}"]:checked`);
        if (selectedOption && selectedOption.value === quiz.correctAnswer) {
            score++;
        }
    });

    resultContainer.innerHTML = `You scored ${score} out of ${quizzes.length}!`;
}





















