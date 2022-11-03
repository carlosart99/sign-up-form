
document.addEventListener('click',function(e){
    if (e.target && e.target.id === 'submit-btn'){
        let password = document.querySelector('#password');
        let confirmPassword = document.querySelector('#confirm-password');
        let message = document.querySelector('#password-warning');
        let cmessage = document.querySelector('#cpassword-warning');
        if (password.value != confirmPassword.value){
            password.style.border = '3px solid red';
            confirmPassword.style.border = '3px solid red';
            message.textContent = "The password doesn't match";
            cmessage.textContent = "*";
        }
        else{
            password.style.border = '3px solid green';
            confirmPassword.style.border = '3px solid green';
        }
    }
})