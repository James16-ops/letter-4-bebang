let timeLeft = 20;

const timerText =
document.getElementById("timer");
let score = 0;

const scoreText =
document.getElementById("score");

const penguins =
document.querySelectorAll(".penguin");

let holder = 2;

penguins.forEach((penguin,index)=>{

    penguin.addEventListener("click",()=>{

        if(index === holder){

            score++;

            scoreText.innerHTML =
            `⭐ Stars: ${score} / 5`;

            penguin.style.transform =
            "scale(1.3)";

            setTimeout(()=>{
                penguin.style.transform="";
            },300);

            moveStar();

        }else{

            penguin.style.animation =
            "shake .3s";

            setTimeout(()=>{
                penguin.style.animation="";
            },300);

        }

    });

});
function moveStar(){

    penguins[holder]
    .classList.remove("holder");

    let next;

    do{

        next =
        Math.floor(
            Math.random()*5
        );

    }while(next === holder);

    holder = next;

    penguins[holder]
    .classList.add("holder");

    if(score >= 5){

        winGame();

    }

}
function winGame(){

    document
    .getElementById("continueBtn")
    .style.display = "block";

}
const countdown = setInterval(() => {

    timeLeft--;

    timerText.innerHTML =
    `⏳ ${timeLeft}`;

    if(timeLeft <= 0){

        clearInterval(countdown);

        loseGame();

    }

},1000);
