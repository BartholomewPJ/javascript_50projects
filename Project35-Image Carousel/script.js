const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgContainer = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

const translateArray = []

img.forEach((image, idx) => {
    translateArray[idx] = idx * -500+"px"
})

// For manual slide switching
let click = 0;

rightBtn.addEventListener('click',() => {
    // clearInterval(interval)
    click++
    if (click >= img.length - 1) {
        click = img.length - 1
       
    }
    imgContainer.setAttribute('style',`transform:translateX(${translateArray[click]})`)
  
    // setTimeout(resetInterval, 2000)
    resetInterval()
})

leftBtn.addEventListener('click',() => {
    // clearInterval(interval)
    click--
    if (click <= 0) {
        click = 0
    }
    imgContainer.setAttribute('style',`transform:translateX(${translateArray[click]})`)
    
    // setTimeout(resetInterval, 2000)
    resetInterval()
})

// For automatic slide switching
let imgIndex = 0
let interval = setInterval(run, 2000)

function run() {
    imgIndex++
    changeImage()
}

function changeImage() {
    if(imgIndex > img.length - 1) {
        imgIndex = 0
    } else if (imgIndex < 0) {
        imgIndex = img.length - 1
    }
    imgContainer.style.transform = `translateX(${-imgIndex * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval=setInterval(run,2000)
}