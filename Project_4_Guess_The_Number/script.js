let randomNumber=Math.floor(Math.random()*100+1);
const submit=document.querySelector("#Submit");
const userInput=document.querySelector("#guessField");
const previousGuess=document.querySelector(".guesses");
const remainingValue=document.querySelector(".remaining");
const lowHigh=document.querySelector(".lowaurhigh");
const startOver=document.querySelector(".resultPrevious");
const p=document.createElement("p");
p.style.color="white";
p.style.backgroundColor="black";
// p.style.display="inline";
let previousguess=[];
let numberofGuess=1;
let playGame=true;
if(playGame)
{
    submit.addEventListener("click",(e)=>
    {
        e.preventDefault();
        const guess=userInput.value;
        validateGuess(guess);
    })
}
function validateGuess(guess)
{
    if(guess==="")
    {
        displayMessage(`Please Number your mention (${guess})`);
        lowHigh.style.color="red";
    }
    else if(guess<=0)
    {
        displayMessage(`Please Enter More Than 1 (${guess})`);
        lowHigh.style.color="red";
    }
    else if(guess>100)
    {
        displayMessage(`Please Enter Less Than 100 (${guess})`);
        lowHigh.style.color="red";
    }
    else
    {
        previousguess.push(guess);
        if(numberofGuess==10)
        {
            displayGuess(guess);
            checkGuess(guess);
            displayMessage(`Game Over, Random Number Was ${randomNumber}`);
            lowHigh.style.color="yellow";
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess)
{
    if(guess==randomNumber)
    {
        displayMessage(`You Guessed It Right`);
        lowHigh.style.color="green";
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Number Is TO Low`);
        lowHigh.style.color="red";
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Number Is To High`);
        lowHigh.style.color="red";
    }
}
function displayGuess(guess)
{
    userInput.value='';
    previousGuess.innerHTML+=`${guess}, `;
    numberofGuess++;
    remainingValue.innerHTML=`${11-numberofGuess}`;
}
function displayMessage(message)
{
    lowHigh.innerHTML=`<h2>${message}</h2>`;
}
function endGame()
{
    userInput.value="";
    userInput.setAttribute("disabled",'');
    p.classList.add("button");
    p.innerHTML=`<h2 id="new1">Start new Game</h2>`;
    // p.style.width="500px";
    // p.style.height="50px";
    p.style.border="2px solid black";
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame()
{
    const newGameButton=document.querySelector("#new1");
        newGameButton.addEventListener("click",function()
        {
            randomNumber=Math.floor(Math.random()*100+1);
            numberofGuess=1;
            previousGuess.innerHTML='';
            previousguess=[];
            lowHigh.innerHTML='';
            remainingValue.innerHTML=`${11-numberofGuess}`;
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);

            playGame=true;
        })
}