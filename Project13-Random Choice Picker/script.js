const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
// Focus the cursor in the text area
textarea.focus()

textarea.addEventListener('keyup',(e) => {
// Call the createTags function using the target value of the textarea input
    createTags(e.target.value)

// Check if the Enter key was hit
    if(e.key === 'Enter') { 
        setTimeout(() => {
// Clear the text area after a brief timeout
            e.target.value = ''
            textarea.disabled = true
        },10)
    
        randomSelect()
     }

})

function createTags(input) {
// With map() we trim the input when it contains blanks and characters.
// With filter() we filter out the entries that have just blanks.  
const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

tagsEl.innerHTML = ''

tags.forEach(tag => {
// Create a span with a class named 'tag' 
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
//Put the filtered input in as the innerText of the span element
    tagEl.innerText = tag
// remember: tagEl is the div
// Now we append the filled span as a child of that div
    tagsEl.appendChild(tagEl)    
})
}

function randomSelect() {
   const times = 30

   const interval = setInterval(() => {
// Call the pickRandomTag function at 100ms intervals
    const randomTag = pickRandomTag()

// Change the style by calling the highlightTag function
    highlightTag(randomTag)
   
// Then wait a certain interval to call the unhighlight function
    setTimeout(() => {
    unHighlightTag(randomTag)
       }, 100)
   }, 100);

   setTimeout(() => {
// Must run clearInterval to stop our interval after a timeout
    clearInterval(interval)

// Pick a random tag to stop on
    setTimeout(() => {
    const randomTag = pickRandomTag()
// Highlight the picked random tag
    highlightTag(randomTag)
    textarea.disabled = false;
    }, 100)

   }, (times + 1) * 100)
}

function pickRandomTag() {
// Collect the spans with class tag that were added    
    const tags = document.querySelectorAll('.tag')
// Randomly choose one from the NodeList 
    return tags[Math.floor(Math.random() * tags.length )]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}