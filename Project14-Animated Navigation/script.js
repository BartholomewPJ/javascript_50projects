const trigger=document.getElementById('toggle');
const navbox=document.getElementById('nav');

trigger.addEventListener('click',()=> {
    navbox.classList.toggle('active');
})
