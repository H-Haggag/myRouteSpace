var userName = localStorage.getItem('userName');
var btn = document.getElementById('logbtn');

userNamePlace.innerHTML=userName;
btn.addEventListener('click',function() {
    localStorage.removeItem('userName');
})