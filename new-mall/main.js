const eye = document.querySelector('#eye');
const eyeSlash = document.querySelector('#eye-slash');
const eyeConf = document.querySelector('#eye-conf');
const eyeSlashConf = document.querySelector('#eye-slash-conf');
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#password-conf');

eyeSlash.addEventListener('click',function(){
    eyeSlash.style.display = 'none';
    eye.style.display = 'flex';
    password.type = 'text';
})

eye.addEventListener('click',function(){
    eyeSlash.style.display = 'block';
    eye.style.display = 'none';
    password.type = 'password';
})

eyeSlashConf.addEventListener('click',function(){
    eyeSlashConf.style.display = 'none';
    eyeConf.style.display = 'flex';
    passwordConf.type = 'text';
})

eyeConf.addEventListener('click',function(){
    eyeSlashConf.style.display = 'block';
    eyeConf.style.display = 'none';
    passwordConf.type = 'password';
})