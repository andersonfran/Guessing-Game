const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessField = document.getElementById('guessField');
const guessSubmit = document.querySelector('.guess-submit');
const resultContainer = document.querySelector('.result-container');
const message = document.querySelector('.message');
const attemptsText = document.querySelector('.attempts');

function checkGuess() {
    const userGuess = parseInt(guessField.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`, 'green');
    } else if (userGuess < randomNumber) {
        setMessage('Too low. Try again!', 'red');
    } else {
        setMessage('Too high. Try again!', 'blue');
    }

    guessField.value = '';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
    attemptsText.textContent = `Attempts: ${attempts}`;
}

guessSubmit.addEventListener('click', checkGuess);
