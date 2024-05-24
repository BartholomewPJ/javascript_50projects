const mytextarea = document.getElementById('textarea');
mytextarea.addEventListener("keydown", keyFunction);

function keyFunction(e) {
    if(e.key ==="Enter") {

        const randoms = [];
        const mytext = mytextarea.value;
        const mytextparsed = mytext.trim().split(',');
        console.log(mytextparsed, mytextparsed.length);
        mytextparsed.forEach((choice,index) => {
        
        randoms[index] = Math.random();    
        console.log(choice,randoms[index],index);
        const tags = document.getElementById('tags');
        const txt = choice;
        const txtNode = document.createTextNode(txt);
        const newspan = document.createElement('span');
        newspan.appendChild(txtNode);
        newspan.classList.add('tag');
        tags.append(newspan);
        })

        mytextarea.removeEventListener("keydown",keyFunction);
        mytextarea.value = null;

        const max = Math.max(...randoms);
        const position = randoms.indexOf(max);
        console.log("highest random = " + max + "at position " + position);
        
        const choicebtn = document.getElementById('choicebtn');
        const addedtags = document.querySelectorAll('.tag');
        addedtags[position].style.backgroundColor="pink";
// addedtags.forEach((addedtag) => console.log("entries are: " + addedtag.innerText));

let numentries = addedtags.length;
// console.log("number of entries = " + numentries);



} 

}









