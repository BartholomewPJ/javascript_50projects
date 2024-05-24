const faqbox = document.querySelectorAll('faq');
const togglebtn = document.querySelectorAll('.faq-toggle');

togglebtn.forEach(box => {
    box.addEventListener('click',() => {
      box.parentNode.classList.toggle('active') 
    })
})
