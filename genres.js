document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess-input');
    const guessBtn = document.getElementById('guess-btn');
    const restartBtn = document.getElementById('restart-btn');
    const feedback = document.getElementById('game-feedback');
    const attemptsDisplay = document.getElementById('attempts-count');

    let target = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let isGameOver = false;

    guessBtn.addEventListener('click', function() {
        if (isGameOver) return;

        let guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        attempts++; 
        attemptsDisplay.textContent = 'Attempts: ' + attempts;

        if (guess === target) {
            feedback.textContent = 'Congratulations! You guessed it in ' + attempts + ' attempts.';
            isGameOver = true;
            guessInput.disabled = true;
            guessBtn.disabled = true;
            restartBtn.style.display = 'inline-block';
        } else if (guess < target) {
            feedback.textContent = 'Too low! Try a higher number.';
        } else {
            feedback.textContent = 'Too high! Try a lower number.';
        }

        guessInput.value = ''; 
        guessInput.focus();
    });

    restartBtn.addEventListener('click', function() {
        target = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        isGameOver = false;
        attemptsDisplay.textContent = 'Attempts: 0';
        feedback.textContent = '';
        guessInput.disabled = false;
        guessBtn.disabled = false;
        guessInput.value = '';
        restartBtn.style.display = 'none';
        guessInput.focus();
    });
});