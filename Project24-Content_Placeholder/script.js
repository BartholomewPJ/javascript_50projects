const header = document.getElementById('header')
const excerpt = document.getElementById('excerpt')
const title = document.getElementById('title')
const profile_img = document.getElementById('profile_img')
const author_name = document.getElementById('author_name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,1500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />'

    title.innerHTML = 'Lorem ipsum dolor sit amet.' 

    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius earum ex repellat?'

    profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/men/82.jpg" alt="" />' 

    author_name.innerHTML = 'John Doe'
    date.innerHTML = 'Dec 15, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}