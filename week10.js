
const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText);

const button2 = document.getElementById("button2");
button2.addEventListener("click", changeBackgroundColor);

const heading = document.querySelector("h1");

function changeText() {
    const head = prompt("Tell me a secret");
    heading.textContent = head;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}