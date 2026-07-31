function checkPassword(){

    let pass =
    document.getElementById("passcode").value;

    if(pass === "pam123"){

        window.location.href =
        "purple.html";

    }else{

        document.getElementById("message")
        .innerHTML =
        "Wrong passcode 😤";

    }

}
