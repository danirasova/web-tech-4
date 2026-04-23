document.getElementById('author-subscribe-form').addEventListener('submit', function(e) {
    const email = document.getElementById('sub-email').value;
    const pass = document.getElementById('sub-pass').value;
    const confirm = document.getElementById('sub-confirm').value;
    const errorMsg = document.getElementById('form-error');

    errorMsg.textContent = ""; // Сброс ошибок

    if (!email.includes('@')) {
        e.preventDefault();
        errorMsg.textContent = "Please enter a valid email address.";
    } else if (pass.length < 8) {
        e.preventDefault();
        errorMsg.textContent = "Password must be at least 8 characters long.";
    } else if (pass !== confirm) {
        e.preventDefault();
        errorMsg.textContent = "Passwords do not match!";
    } else {
        alert("Success! You are subscribed.");
    }
});