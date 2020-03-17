const message = document.querySelector(".message")
const button = document.querySelector("button")
const game = document.querySelector(".game")
let gameplay = false;
let score = 0;
button.addEventListener("click", function () {
            if (!gameplay) {
                gameplay = true;
                score = 0;
                maker(5);
                button.innerHTML = "check combo";
            } else {
                const numbers = document.querySelectorAll(".numb");
                score++;
                message.innerHTML = "Guesses " + score;
                let winCondition = 0;

                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i].value == numbers[i].correct) {
                        numbers[i].style.backgroundColor = "green";
                        numbers[i].style.color = "white";
                        winCondition++;
                    } else {
                        let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                        numbers[i].style.backgroundColor = color;
                        numbers[i].style.color = "black";
                    }

                }
            }
        });


        function maker(num) {
            for (var x = 0; x < num; x++) {
                let el = document.createElement("input")
                el.setAttribute("type", "number");
                el.max = 9;
                el.min = 0;
                el.size = 1;
                el.style.wide = "50px";
                el.classList.add("numb");
                el.correct = Math.floor(Math.random() * 10);
                el.value = 0;
                el.order = x;
                game.appendChild(el);
            }
        }