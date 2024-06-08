// input id

var sigupForm = document.getElementById('signupFrom');
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');

// alert id 
var nameAlert = document.getElementById('nameAlert');
var emailAlert = document.getElementById('emailAlert');
var existAlert = document.getElementById('existAlert');
var passwordAlert = document.getElementById('passwordAlert');
var doneAlert = document.getElementById('doneAlert');

var allUsers = [];

if (localStorage.getItem('allUsers')!=null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}
// remove form default behavior
sigupForm.addEventListener('submit',function(e){
    e.preventDefault();
    if (checkAll() == true) {
        addUser();
    }
})

// validate input Regex
function validatInputs(regex,inputId,alertId){
    var regexName = regex;
    if(regexName.test(inputId.value)){
        alertId.classList.replace('d-block','d-none');
        inputId.classList.remove('is-invalid');
        inputId.classList.add('is-valid');
        return true;
    }
    else{
        alertId.classList.replace('d-none','d-block');
        inputId.classList.add('is-invalid');
        return false;
    }
}

// validate all inputs result
function checkAll(){
    if (validatInputs(/^[a-zA-Z0-9$_]{2,}$/,userName,nameAlert) == true &&
    validatInputs(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,userEmail,emailAlert) == true &&
    validatInputs(/^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,userPassword,passwordAlert) == true
    ){
        // doneAlert.classList.replace('d-none','d-block');
        return true;
    }
    else{
        // doneAlert.classList.replace('d-block','d-none');
        return false;
    }
}


// save user data
function addUser() {
    var newUser= {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    if (isAlreadyExist(newUser) == true) {
        existAlert.classList.replace('d-none','d-block');
        // doneAlert.classList.replace('d-none','d-block');
    }else{
        existAlert.classList.replace('d-block','d-none');
        doneAlert.classList.replace('d-none','d-block');
        allUsers.push(newUser);
        console.log(newUser);
        localStorage.setItem('allUsers',JSON.stringify(allUsers))
        setTimeout(function(){
            window.location.href="../../login/login.html";
        },2000)
    }
}
function isAlreadyExist(newUser) {
    for(var i=0; i<allUsers.length;i++){
        if(allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()){
            // console.log("exist");
            return true;
        }
    }
}