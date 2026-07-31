function checkPassword(){

    let pass =
    document.getElementById("passcode").value;

    if(pass === "010216"){

        window.location.href =
        "purple.html";

    }else{

        const messages = [
            "Nope 😝",
            "Try again, bro 🐧",
            "That's not it 🌸",
            "Almost... maybe 👀",
            "alam na alam mo 'yan 💜"
        ];

        document.getElementById("message").innerHTML =
        messages[Math.floor(Math.random() * messages.length)];
    }
}
