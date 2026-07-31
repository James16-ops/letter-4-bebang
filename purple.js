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

    showBubble(
        penguin,
        randomMessage()
    );

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

    clearInterval(countdown);

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
function loseGame(){

    document.body.innerHTML = `

    <div class="lose-screen">

        <h1>🐧</h1>

        <h2>
        The penguins escaped!
        </h2>

        <button onclick="location.reload()">
        Try Again
        </button>

    </div>

    `;

}
function randomMessage(){

    const messages = [
        "Not me!",
        "Too slow!",
        "Run!",
        "Wrong bird!",
        "Catch me first!",
        "Pam is coming!"
    ];

    return messages[
        Math.floor(
            Math.random() *
            messages.length
        )
    ];

}
function showBubble(
    penguin,
    text
){

    const bubble =
    document.createElement("div");

    bubble.className =
    "bubble";

    bubble.innerText =
    text;

    penguin.appendChild(
        bubble
    );

    setTimeout(()=>{

        bubble.remove();

    },1000);

}
