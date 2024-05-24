const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

// Clicking on a small cup calls the highlightCups function
smallCups.forEach((cup,index) => {
    cup.addEventListener('click',() => highlightCups(index)) 

})

function highlightCups(index) {

    // To remove one we just clicked
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    // To fill all small cups before the one that was clicked
    smallCups.forEach((cup,index2) => {
        if(index2 <=index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const totalCups=smallCups.length

    if(fullCups===0) {
        percentage.style.visibility='hidden'
        percentage.style.height=0
    } else {
        percentage.style.visibility='visible'
        // note: we hard-coded the 200px height in the HTML
        percentage.style.height=`${fullCups/totalCups * 200}px`
        percentage.innerText=`${fullCups/totalCups * 100}%`
         }
    if(fullCups === totalCups) {
        remained.style.visibility='hidden'
        remained.style.height=0 
    } else {
        remained.style.visibility='visible'
        //note:The 2 (for 2 liters) is hard-coded in the HTML 
        liters.innerText=`${2-(250 * fullCups / 1000)} liter`
        }
}




