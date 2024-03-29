let signupBtn=document.querySelector('.Signupbtn');
let signInBtn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxheight='0';
    title.innerHTML='sign in';
    text.innerHTML='forgot password';
    signupBtn.classList.add('disable');
    
    signInBtn.classList.remove('disable');
    underline.style.transform='translatex(35px)';

});
signupBtn.addEventListener('click',()=>{
    nameField.style.maxheight='60px';
    title.innerHTML='sign up';
    text.innerHTML='password suggestions';
    signupBtn.classList.remove('disable');
    
    signInBtn.classList.add('disable');
    underline.style.transform='translatex(0px)';

});