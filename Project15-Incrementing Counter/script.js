const counters=document.querySelectorAll('.numbers');

counters.forEach(counter => {
    counter.innerText='0'


    const updateCounter = () => {
    
    // adding the + before counter turns it into a number
    // alternatives are to wrap in a Number constructor or use parseInt 
    const target = +counter.getAttribute('data-target')
   
    const c = +counter.innerText

    // The choice of 200 below is arbitrary - use what looks right
    const increment = target / 200

    if(c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter,1)
    } else {
        // This prevent it from displaying a number higher than the target
        counter.innerText=target;
    }
 }

 updateCounter()
})

const reloadBtn=document.getElementById('reload');

reloadBtn.addEventListener('click',() => {
    window.location.reload();
})