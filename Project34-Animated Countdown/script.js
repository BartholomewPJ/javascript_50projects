const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.getElementById('replay')

runAnimation()

replay.addEventListener('click',() => {
    resetDom()
    runAnimation()
})

function resetDom() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num,idx) => {
        const lastNum = nums.length - 1

        num.addEventListener('animationend',(e) => {
            // The last number (0) does not go out
            // After one number has gone out, the next sibling comes in
            // The last number is then hidden and replaced with final message
            if(e.animationName === 'goIn' && idx !== lastNum) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

