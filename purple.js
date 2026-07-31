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
