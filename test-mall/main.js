const testMallLink = document.querySelector('.test-mall-link');
const testMalllogin = document.querySelector('.test-mall-login');

// Show and disappear screen of new mall test

testMallLink.addEventListener('click', () => {
    testMalllogin.style.display = 'block';
})

document.addEventListener('click', (event) => {
    if (!testMalllogin.contains(event.target) && event.target !== testMallLink) {
        testMalllogin.style.display = 'none';
    }
});


// password hide and show

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    // Add click event listener to the eye icon
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Change input type to text to reveal password
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash'); // Change icon to 'eye-slash'
        } else {
            passwordInput.type = 'password'; // Change input type back to password to hide password
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye'); // Change icon back to 'eye'
        }
    });



// Password validation 

// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const emailError = document.getElementById('email-error');
// const passwordError = document.getElementById('password-error');

// // Email validation function
// const validateEmail = () => {
//     const email = emailInput.value.trim();
//     if (email === '') {
//         emailError.textContent = 'Email is required';
//         return false;
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//         emailError.textContent = 'Email is invalid';
//         return false;
//     } else {
//         emailError.textContent = '';
//         return true;
//     }
// };

// // Password validation function
// const validatePassword = () => {
//     const password = passwordInput.value.trim();
//     if (password === '') {
//         passwordError.textContent = 'Password is required';
//         return false;
//     } else if (password.length < 8) {
//         passwordError.textContent = 'Password must be at least 8 characters';
//         return false;
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/.test(password)) {
//         passwordError.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
//         return false;
//     } else {
//         passwordError.textContent = '';
//         return true;
//     }
// };

// // Add event listener for email input
// emailInput.addEventListener('input', validateEmail);

// // Add event listener for password input
// passwordInput.addEventListener('input', validatePassword);
