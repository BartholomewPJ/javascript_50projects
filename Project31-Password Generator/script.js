const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const clipboardBtn = document.getElementById('clipboard')
const generateBtn = document.getElementById('generate')

clipboardBtn.addEventListener('click',() => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!~password) {return}

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateBtn.addEventListener('click',() => {
   petersPassword()
})

    function petersPassword() {
    let upperArr = []
    let lowerArr = []
    let numberArr = []
    let symbolArr = []

    if(!uppercaseEl.checked) { upperArr = [] } else 
    {
        for(let i=0;i < lengthEl.value; i++) {
        upperArr[i] = getRandomUpper();
        }
    } 

   if(!lowercaseEl.checked) {lowerArr = [] } else 
   {
        for(let j=0;j < lengthEl.value; j++) {
        lowerArr[j] = getRandomLower();
        }
    }
    

    if(!numbersEl.checked) { numberArr=[] }
    else {
        for(let k=0;k < lengthEl.value; k++) {
        numberArr[k] = getRandomNumber();
        }
    }

    if(!symbolsEl.checked) { symbolArr = [] } else 
    {
        for(let n=0;n < lengthEl.value; n++) {
        symbolArr[n] = getRandomSymbol();
        }
    } 
const pswrdOptions = upperArr.concat(lowerArr,numberArr,symbolArr)
const shuffledOptions = shuffle(pswrdOptions)
const finalPassword = shuffledOptions.slice(0,lengthEl.value).join("")

resultEl.innerText = finalPassword

console.log(upperArr,lowerArr,numberArr,symbolArr)
console.log(pswrdOptions)
console.log(shuffledOptions)
console.log(finalPassword)
}

function shuffle(array) {
    const newArray = [...array]
    const length = newArray.length
  
    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor((newArray.length - start) * Math.random())
      const randomItem = newArray.splice(randomPosition, 1)
  
      newArray.push(...randomItem)
    }
    return newArray
    }

// Ascii Character Codes
// Uppercase Letters = 65 - 90
// Lowercase Letters = 97 - 122
// Numbers = 48 - 57
// Special Characters = 33 - 47, 58 - 64

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
 }

 function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
 }
 function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
 }

 function getRandomSymbol() {
    const symbols = ['!','@','#','$','%','^','&','*','(',')','<','>']
    const randomIndex = Math.floor(Math.random() * symbols.length)
    return symbols[randomIndex]
 }
 