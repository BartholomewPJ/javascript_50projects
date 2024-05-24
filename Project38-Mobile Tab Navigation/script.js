const contents = document.querySelectorAll('.content')
const navitems = document.querySelectorAll('nav ul li')

navitems.forEach((navitem,idx) => {
    
    navitem.addEventListener('click',() => {
        removeActive()
        removeShow() 
        contents[idx].classList.add('show')

        navitem.classList.add('active')
    }) 
})

function removeShow() {
    contents.forEach(content => content.classList.remove('show'))
}

function removeActive() {
    navitems.forEach(navitem => navitem.classList.remove('active'))
}