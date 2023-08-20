function generateCaptcha() {
    var captchaText = generateRandomString(6); // Generate a random string of 6 characters
    document.getElementById('captcha-text').textContent = captchaText;
}

function generateRandomString(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function verifyCaptcha() {
    var userEnteredText = document.getElementById('user-input').value;
    var captchaText = document.getElementById('captcha-text').textContent;
    var resultMessage = document.getElementById('result-message');

    if (userEnteredText === captchaText) {
        resultMessage.textContent = 'CAPTCHA verified! You are human.';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = 'CAPTCHA verification failed. Please try again.';
        resultMessage.style.color = 'red';
    }
}
