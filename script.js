const checkButton = document.querySelector('button.check');
const againButton = document.querySelector('.again');
const numberInput = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let scoreCounter = 0;

checkButton.addEventListener("click", () =>{
    scoreCounter++
    if(numberInput.value == randomNum){
        document.body.style.backgroundColor = "#60b347";
        message.textContent = "🎉 Correct number!";
        number.textContent = randomNum;
        score.textContent = scoreCounter;
        if(highscore.textContent == 0){
            highscore.textContent = scoreCounter;
        } else if(highscore.textContent > scoreCounter){
            highscore.textContent = scoreCounter;
        }
        
    } else if(numberInput.value < randomNum){
        message.textContent = "📉 Too low!"
    } else if(numberInput.value > randomNum){
        message.textContent = "📈 Too high!"
    }
})

againButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#222";
    numberInput.value = '';
    number.textContent = "?";
    score.textContent = "0";
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
})