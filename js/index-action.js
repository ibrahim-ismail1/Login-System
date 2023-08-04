
var Cname=document.getElementById('Name')
var CEmail=document.getElementById('Email')
var CPass=document.getElementById('Password')
var Ph=document.querySelectorAll('p.d-none')
var RegAnchor=document.getElementById('Ranchor')
var RegDiv=document.querySelector('.Rege')
var LoginDiv=document.getElementById('Login')
var LoginAnchor=document.getElementById('LoginAnchor')
var locSge =JSON.parse(localStorage.getItem('clints'))
var ConvAnchor=document.getElementById('convert')
var temp='';

 
var clintsInfo=[]
 
 function AddClint()
 {
    if(validateClick()==true)
    {
        var Clint={
            name:Cname.value,
            email:CEmail.value,
            password:CPass.value
         }
         clintsInfo.push(Clint)
         localStorage.setItem('clints', JSON.stringify(clintsInfo))
         swal({
            title: "Regestrition Done",
            icon: "success",
            button: "close",
          });
         
         Clear()
    }
    else{
        swal({
            title: "invallid information",
            text: `1.The name must include 3 characters
                    2.The email must include '@' , 'gmail or yahoo' ,end with'.come'
                    3.The password must include at least 8 characters and not contain spacecs`,
            icon: "warning",
            button: "close",
          });
    }
    Clear()
 }
 function Clear()
 {
    Cname.value=''
    CEmail.value=''
    CPass.value=''
 }

 //regex name accepet any world character in the start or the end
 //at least 3 characters
 // dosent accepet spaces in the start or the end  
 var NameRegex=/^\w[\w\s]{2,}\S$/i
 //email regex accepet in form capital or small letters in the end
 //then at least 2 world characters 
 //then must @
 //then accepet 'gmail' or 'yahoo'
 //and must end with '.com'
 var EmailRegex=/^[A-Za-z][\w]{2,}@((gmail)|(yahoo))(\.com)$/
 //password regex accepet any world charachters accepet spaces at least 8 and at most 15  
 var passRegex=/^(\w){8,15}\S$/
function validateClick()
{
    if(NameRegex.test(Cname.value)==true&EmailRegex.test(CEmail.value)==true&passRegex.test(CPass.value)==true){
        return true;

    }
    else{
        return false;
    }
}
    Cname.addEventListener('blur',function(){
    if(NameRegex.test(Cname.value)==false)
    {
        Ph[0].classList.replace('d-none','d-block')
        Ph[0].classList.add('text-danger')

    }
    else{
        Ph[0].classList.replace('d-block','d-none')

    }

})
CEmail.addEventListener('blur',function(){
    if(EmailRegex.test(CEmail.value)==false)
    {
        Ph[1].classList.replace('d-none','d-block')
        Ph[1].classList.add('text-danger')

    }
    else{
        Ph[1].classList.replace('d-block','d-none')

    }

})
CPass.addEventListener('blur',function(){
    if(passRegex.test(CPass.value)==false)
    {
        Ph[2].classList.replace('d-none','d-block')
        Ph[2].classList.add('text-danger')

    }
    else{
        Ph[2].classList.replace('d-block','d-none')

    }

})
RegAnchor.addEventListener('click',function(){
    RegDiv.classList.add('d-none')
    LoginDiv.classList.replace('d-none','d-block')
    Cname.classList.add('d-none')
    Ph[0].classList.replace('d-block','d-none')
    Ph[1].classList.replace('d-block','d-none')
    Ph[2].classList.replace('d-block','d-none')

})
LoginAnchor.addEventListener('click',function(){
    RegDiv.classList.replace('d-none','d-block')
    LoginDiv.classList.replace('d-block','d-none')
    Cname.classList.replace('d-none','d-block')
    Ph[0].classList.replace('d-block','d-none')
    Ph[1].classList.replace('d-block','d-none')
    Ph[2].classList.replace('d-block','d-none')
})
function LoginClints()
{
    for(var i=0;i<JSON.parse(localStorage.getItem('clints')).length;i++)
    {
        if(JSON.parse(localStorage.getItem('clints'))[i].email==CEmail.value && JSON.parse(localStorage.getItem('clints'))[i].password==CPass.value){
            temp=JSON.parse(localStorage.getItem('clints'))[i].name
            ConvAnchor.setAttribute('href','home.html')
            
            localStorage.setItem('temp',temp)
        
        }
        
    }
    Clear()
    
}



