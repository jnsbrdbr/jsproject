const message=document.querySelector(".message");
const guess=document.querySelector(".input");
const button=document.querySelector("button");

const myArray=["ژینوس","آناهیتا","آرش","فریبا","احمد","فرهاد","سامان","ایمان","آرمان","علی","زهرا","ندا","ابوطالب","مهسا","نرجس",];
let play=false;
let scramble="";
let scrambled="";
let score=0;
button.addEventListener("click",function(){
    if (!play) {
        play = true;
        button.innerHTML = "حدس بزن!";
        guess.classList.toggle("input");
        guess.value = "";
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;
        score++;
        if (tempGuess === scramble) {
            play = false;
            message.innerHTML = " درست!و کلمه صحیح " + scramble + " بود و امتیاز شما" + score + " است...";
            button.innerHTML = "شروع";
            guess.classList.toggle("input");
        }
        else {
            message.innerHTML = "غلط! " + scrambled;
        }

    }
});

function createWord(){
    let randomIndex = Math.floor(Math.random() * myArray.length);
    let tempWord = myArray[randomIndex];
    return tempWord;

}
function randomArray(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];

        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
