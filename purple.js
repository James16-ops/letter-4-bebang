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

    const currentPenguin =
    penguins[holder];

    let next;

    do{

        next =
        Math.floor(
            Math.random()*5
        );

    }while(next === holder);

    const nextPenguin =
    penguins[next];

    throwStar(
        currentPenguin,
        nextPenguin
    );

    penguins[holder]
    .classList.remove("holder");

    holder = next;

    setTimeout(()=>{

        penguins[holder]
        .classList.add("holder");

    },800);

    if(score >= 5){

        winGame();

    }

}
function winGame(){

    clearInterval(countdown);

    document
    .querySelector(".game-title")
    .innerHTML =

    `
    <h1>🎉 Good Job Pam!</h1>

    <p>
        The penguins surrender.
        <br>
        You recovered all the stars.
    </p>
    `;

    penguins.forEach((penguin)=>{

        penguin.style.animation =
        "celebrate 1s infinite";

    });

    document
    .getElementById("continueBtn")
    .style.display =
    "block";

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
function throwStar(
    from,
    to
){

    const star =
    document.getElementById(
        "flyingStar"
    );

    const fromRect =
    from.getBoundingClientRect();

    const toRect =
    to.getBoundingClientRect();

    star.style.display =
    "block";

    star.style.left =
    fromRect.left + "px";

    star.style.top =
    fromRect.top + "px";

    star.animate(

        [
            {
                left:
                fromRect.left + "px",

                top:
                fromRect.top + "px"
            },

            {
                left:
                toRect.left + "px",

                top:
                toRect.top + "px"
            }

        ],

        {
            duration:800,
            fill:"forwards"
        }

    );

    setTimeout(()=>{

        star.style.display =
        "none";

    },800);

}
setInterval(()=>{

    const randomPenguin =
    penguins[
        Math.floor(
            Math.random()*5
        )
    ];

    showBubble(
        randomPenguin,
        randomIdleMessage()
    );

},5000);
function randomIdleMessage(){

    const messages = [

        "Protect the star!",
        "Hide it!",
        "She's coming!",
        "Run!",
        "Fish later!",
        "Mission active!"

    ];

    return messages[
        Math.floor(
            Math.random() *
            messages.length
        )
    ];

}
