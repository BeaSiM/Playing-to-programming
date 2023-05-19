const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const radomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors [randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Match.radom() * colors.length);
}

function Limpar() {
    var clear = document.getElementById("clear");
    clear.style = background-color= #fff;
}