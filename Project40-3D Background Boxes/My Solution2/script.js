const splitButton = document.getElementById('btn1');

const bigBox = document.getElementById('boxes-container');
const numBox = document.getElementById('boxNumber');

// console.log(parseInt(numBox.value))

numBox.addEventListener('change', () => {
    collectBigBox()

    if (!bigBox.classList.contains('big')) {
    clearBoxes()
    }
    makeChanges()
})

window.addEventListener('resize', () => {
    collectBigBox()
    
    makeChanges()
    console.log('resize detected',bigBox)
})


function makeChanges() {
    let numBoxes = numBox.value;
    let numRows = Math.sqrt(numBoxes);
    let numCols = Math.sqrt(numBoxes);

    bigBox.style.gridTemplateColumns = (`repeat(${numCols},1fr)`)
    bigBox.style.gridTemplateRows = (`repeat(${numRows},1fr)`)
    
    let containerWidth = bigBox.getBoundingClientRect().width;
    let containerHeight = bigBox.getBoundingClientRect().height;

    let divFactor = (100 / numRows)
    let smallDim = containerWidth / numRows;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const newbox = document.createElement('div')
            newbox.classList.add('box')
            newbox.style.backgroundPosition = `${j * divFactor}% ${i * divFactor}%`
            newbox.style.width = smallDim + "px";
            newbox.style.height = smallDim + "px";
            bigBox.appendChild(newbox)
        }
    }
        console.log(containerWidth, containerHeight, parseInt(numBoxes), numRows, numCols, divFactor)
    }  
    



splitButton.addEventListener('click', () => {
    if (!isNaN(parseInt(numBox.value))) {
        bigBox.classList.toggle('big')
        numBox.toggleAttribute('disabled')
    }
})

function clearBoxes() {
    let addedBoxes = document.querySelectorAll('.box')
    addedBoxes.forEach(boxAdded => { bigBox.removeChild(boxAdded) })
    bigBox.classList.remove('big')
    }

