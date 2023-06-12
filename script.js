function registerUser(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    localStorage.setItem('registeredEmail', email);

    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
}

function checkPassword() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    if (password === 'admin123') {
        const registeredEmail = localStorage.getItem('registeredEmail');
        document.getElementById('adminEmail').textContent = 'Registered Email: ' + registeredEmail;
    } else {
        alert('Incorrect password. Try again.');
    }
}

document.getElementById('registrationForm').addEventListener('submit', registerUser);
