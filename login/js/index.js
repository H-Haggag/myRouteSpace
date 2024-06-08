var allUsers = [];
var loginFrom = document.getElementById('loginFrom');
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var userRight = document.getElementById('userRight');
var userWrong = document.getElementById('userWrong');

if (localStorage.getItem('allUsers')!=null) {
    allUsers= JSON.parse(localStorage.getItem('allUsers'));
}
console.log(allUsers);

loginFrom.addEventListener('submit',function (e){
    e.preventDefault();
    logIn();
})

function logIn() {
    var userData = {
        email:signEmail.value,
        password:signPassword.value
    }
    if(isValid(userData)== true){
        userRight.classList.replace('d-none','d-block');
        userWrong.classList.replace('d-block','d-none');
        window.location.href="../../Home/home.html";
    }else{
        userWrong.classList.replace('d-none','d-block');
    }
}

function isValid(userData){
    for(var i=0;i<allUsers.length;i++){
        if(allUsers[i].email.toLowerCase() == userData.email.toLowerCase() && allUsers[i].password == userData.password ){
           localStorage.setItem('userName',allUsers[i].name);
            return true;
        }else{
            return false;
        }
    }
}