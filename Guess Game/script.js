const guess = document.querySelector('.guess'),
input = document.querySelector('input'),
btn = document.querySelector('button'),
chance = document.querySelector('.chances');

let RandNumber = Math.floor(Math.random() * 100);
let totalchances = 10;

function Replay() {
    btn.innerText = "Replay";
    btn.addEventListener("click" , ()=>{
        if(btn.innerText=="Replay"){
            window.location.reload();
        }
    })
}

btn.addEventListener("click", () => {
    totalchances--;
    let inputVal = input.value;
    console.log(RandNumber);
    if(inputVal == ""){
        guess.innerText="Type Any Number";
        guess.style.color="#fc7a00";
        totalchances = totalchances + 1;
    }
    if (inputVal == RandNumber) {
        guess.innerText = "Congratulation You Won!!!";
        guess.style.color = "#00fc61";
        Replay();
    } else if (inputVal > RandNumber && inputVal < 100) {
        guess.innerText = "Your Guess is high";
        guess.style.color = "#010101";
    } else if (inputVal < RandNumber && inputVal > 0) {
        guess.innerText = "Your Guess is low";
        guess.style.color = "#010101";
    } else if (inputVal < RandNumber && inputVal < 0) {
        guess.innerText = "Invalid Response";
        guess.style.color = "red";
    }
    chance.innerText = `${totalchances}`;
    if (totalchances == 0) {
        if (inputVal == RandNumber) {
            guess.innerText = "Congratulation You Won!!!";
            guess.style.color = "#010101";
        }
        else { guess.innerText = "You Loose Try Again"
            guess.style.color = "red";
        }
        Replay();
    }
})
