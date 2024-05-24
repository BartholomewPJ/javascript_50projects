const magicButton = document.getElementById('btn');
const bigBox = document.getElementById('boxes');

const numBoxes = 16;
for (i = 0; i < numBoxes; i++) {
    const newBox = document.createElement('div')
    newBox.classList.add('box')
    bigBox.appendChild(newBox)
}

const boxes = document.querySelectorAll('.box');

const xArr = [0,25,50,75,0,25,50,75,0,25,50,75,0,25,50,75]
const yArr = [0,0,0,0,25,25,25,25,50,50,50,50,75,75,75,75]

boxes.forEach((box,idx) => {
    box.setAttribute('style',`background-position:${xArr[idx]}% ${yArr[idx]}%`)
})

magicButton.addEventListener('click',goBig)

// Note: we can also trigger the effect when user clicks on the boxes container
// This could be used in 'miniturized' version for buttons
bigBox.addEventListener('click',goBig)

function goBig() {
    bigBox.classList.toggle('big')
}