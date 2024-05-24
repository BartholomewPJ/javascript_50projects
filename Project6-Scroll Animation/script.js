const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
   const triggerBottom = (window.innerHeight * 0.75)

   boxes.forEach(box => {
       const boxTop = box.getBoundingClientRect().top

       if(boxTop < triggerBottom) {
           box.classList.add('show')
       } else {
           box.classList.remove('show')
       }
   })

// Remember: the higher the number, the further down in the window (higher Y axis value)
// the triggerBottom appears to be set at about 80% down (vh * 0.8)
// as we scroll down,  the box top moves up, so the Y axis value decreases
// this is why we use the less-than comparison
// when the box top moves up past the trigger point, it translates into view

}