const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// API bog'lash

function login() {
    const phoneNumber = document.querySelector('.login input[type="tel"]').value;
    const password = document.querySelector('.login input[type="password"]').value;

    fetch('http://localhost:5000/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        if (data.success) {
            localStorage.setItem('userToken', data.token);
            window.location.href = 'parking.html'; // Successful login redirect
        } else {
            alert('Login failed: ' + data.message);
        }
          // Foydalanuvchini boshqa sahifaga yo'naltirish
          window.location.href = 'parking.html';
    })
    
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during login.');
    });

    return false;
}

function register() {
    const username = document.getElementById('username').value;
    const surname = document.getElementById('surname').value;
    const phoneNumber = document.querySelector('.signup input[type="tel"]').value;
    const password = document.querySelector('.signup input[type="password"]').value;

    fetch('http://localhost:5000/api/v1/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            surname: surname,
            phoneNumber: phoneNumber,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        if (data.success) {
            alert('Registration successful. Please log in.');
        } else {
            alert('Registration failed: ' + data.message);
        }
          // Foydalanuvchini boshqa sahifaga yo'naltirish
          window.location.href = 'parking.html';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during registration.');
    });

    return false;
}
