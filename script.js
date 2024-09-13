let random= parseInt(Math.random()*100+1)
// console.log(random)

const input=document.querySelector('.input')
const button=document.querySelector('.butt')
const PreGuess=document.querySelector('.PreviousGuesses')
const Remain=document.querySelector('.Remaining')
const lowOrHi=document.querySelector('.lowOrHi')
const all=document.querySelector('.resultclass')

let startButton=document.createElement('p')

let oldGuess=[]
let numCount=1
 const playGame=true

 if(playGame){
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=input.value
        ValidateGuess(guess)
    })
 }

 function ValidateGuess(guess){
        if (isNaN(guess)) {
            alert(`Please enter Correct number ${guess}`)
        }else if(guess<1){
            alert(`Please enter more than 0`)
        }
        else if(guess>100){
            alert(`Please enter less than 100`)
        }else{
            oldGuess.push(guess)
            if (numCount===10) {
                displayGuess(guess)
                displayMessage(`Game Over. Random Number was ${random}`)
                endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }

    }
function checkGuess(guess){
    if(guess<random){
        displayMessage(`Number is TOOO low ${guess}`)
    }else if(guess>random){
        displayMessage(`Number is TOOO High ${guess}`)
    }else{

        displayMessage(`You are winner`)
        endGame()
    }
}
function displayGuess(guess) {
    input.value=""
    PreGuess.innerHTML+=`${guess},`
    numCount++;
    Remain.innerHTML=`${11-numCount}`
}
function displayMessage(Message){
    lowOrHi.innerHTML= `${Message}`
}
function endGame(){
    input.value=''
    input.setAttribute('disabled','')
    startButton.classList.add('button')
    startButton.innerHTML=`<h2 id="newGame">START NEW GAME</h2>`
    startButton.style.padding="10px"
    startButton.style.backgroundColor="black"
    startButton.style.margin="10px 50px"
    startButton.style.borderRadius="10px"
    all.style.marginBottom="10px"
    all.appendChild(startButton)
    document.querySelector('#newGame').addEventListener('click', newGame);
    playGame=false
    // newGame()
}
function newGame() {
    const newButton=document.querySelector('#newGame')
    newButton.addEventListener('click',function(e){
        random= parseInt(Math.random()*100+1)
        oldGuess=[]
        numCount=1
        PreGuess.innerHTML=''
        Remain.innerHTML=`${11-numCount}`
        lowOrHi.innerHTML= ''
        input.removeAttribute('disabled')
        all.removeChild(startButton)
        all.style.marginBottom=""
        playGame=true
    })
}