const mytextarea = document.getElementById('textarea');
mytextarea.addEventListener("keydown", keyFunction);
function keyFunction(e) {
    if(e.key ==="Enter") {
        const mytext = mytextarea.value;
        const splittext = mytext.split(',');

        // const modifiedtext = splittext.map(splittext => splittext.replace(/ \s\s+/g, ''));
        // const modifiedtext = splittext.map(splittext => splittext.replace(/ \s{2, }/g, '').trim());
        // The one immediately below works as expected
        const modifiedtext = splittext.map(splittext => splittext.replace(/ +(?= )/g, '').trim());
        // const modifiedtext = splittext.map(splittext => splittext.replace(/  +/g, ' '));

        const filteredtext = modifiedtext.filter(entries =>entries !== '');
        // const mytextparsed = filteredtext.map(parsedtext => parsedtext.trim());

               
        console.log(splittext)
        console.log(modifiedtext)
        console.log(filteredtext)
        console.log(filteredtext[2])
        
        filteredtext.forEach((choice) => {
        const tags = document.getElementById('tags');
        const txt = choice;
        const txtNode = document.createTextNode(txt);
        const newspan = document.createElement('span');
        newspan.appendChild(txtNode);
        newspan.classList.add('tag');
        tags.append(newspan);
            })
        mytextarea.removeEventListener("keydown",keyFunction);
        // mytextarea.value = null;
        mytextarea.disabled = true;
        }}

const choicebtn = document.getElementById('choicebtn');

choicebtn.addEventListener('click',() => {
const addedtags = document.querySelectorAll('.tag');
const randomchoice = []; 

});

