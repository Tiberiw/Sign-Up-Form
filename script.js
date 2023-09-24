
let errorOutput = document.querySelector('output.pswd');

let firstPassword = document.querySelector('#pas');
let secondPassword = document.querySelector('#re-pas');

let firstPasswordButton = document.querySelector('button[type=button].pwd')
let secondPasswordButton = document.querySelector('button[type=button].re-pwd')

firstPasswordButton.addEventListener('mousedown', (e) => {
    firstPassword.setAttribute('type','text');
})

secondPasswordButton.addEventListener('mousedown', (e) => {
    secondPassword.setAttribute('type','text');
})

firstPasswordButton.addEventListener('mouseup', (e) => {
    firstPassword.setAttribute('type','password');
})

secondPasswordButton.addEventListener('mouseup', (e) => {
    secondPassword.setAttribute('type','password');
})





const sendButton = document.querySelector('button[type="submit"]');

secondPassword.addEventListener('keyup', () => {
    if(firstPassword.value !== secondPassword.value) {
        firstPassword.classList.add('error');
        secondPassword.classList.add('error')
       
    } else {
        firstPassword.classList.remove('error');
        secondPassword.classList.remove('error');
        errorOutput.textContent = "";
    }
    

});

firstPassword.addEventListener('keyup', () => {
    if(firstPassword.value !== secondPassword.value) {
        firstPassword.classList.add('error');
        secondPassword.classList.add('error')
       
    } else {
        firstPassword.classList.remove('error');
        secondPassword.classList.remove('error');
        errorOutput.textContent = "";
    }
});

sendButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(firstPassword.value !== secondPassword.value) {
        errorOutput.textContent = "Passwords do not match";
    } else {
        document.getElementById("formular").submit();
    }
   
        

});