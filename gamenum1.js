const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const arrayCoin = ["heads", "tails"];
let score = [0, 0];
for (let i = 0; i < buttons.length; i++) {

    console.log(buttons[i]);
    buttons[i].addEventListener("click", tosscoin);

}

function tosscoin(e) {
    let playerguess = e.target.innerText;
    let computertoss = Math.floor(Math.random() * 2);
    let computerguess = arrayCoin[computertoss];
    message.innerHTML="Computer Selected " + computerguess;
    let output;
    if (playerguess === computerguess) {
        output = "player is win";
        score[0]++;

    } else {
        ouput = "computer is win";
        score[1]++;
    }
    message.innerHTML+= output +"<br/> Player : "+score[0] +" Computer : "+score[1];

}
