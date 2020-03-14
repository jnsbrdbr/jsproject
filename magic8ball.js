const massege = document.querySelector(".massege");
const question = document.querySelector("input");
const button = document.querySelector("button");
const answer =["hi how r u?","nice day...isn t?","thank u","probably","i don t know","maybe"];
button.addEventListener("click",summon);
function summon(){
    var guess = Math.floor(Math.random()*answer.length);
    massege.innerText=question.value +" "+ answer[guess];
    question.value=" ";
}