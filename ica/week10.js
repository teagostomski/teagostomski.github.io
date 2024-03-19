
const button1 = document.querySelector("button1");
button1.addEventListener("click", changeText);

const button2 = document.querySelector("button2");
button2.addEventListener("click", changeText);

const heading = document.querySelector("h1")

function runFunction() {
    const head = prompt ("tell me a secret");
    heading.textContent = head;
}
