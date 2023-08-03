var welcome=document.getElementById('welcomeH')
var x =localStorage.getItem('temp')
welcome.innerHTML=`Welcome ${x}`