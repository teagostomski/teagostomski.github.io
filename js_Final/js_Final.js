const numbersContainer = document.getElementById('numbers');
const resultContainer = document.getElementById('result');
let selectedNumbers = [];

for (let i = 0; i < 10; i++) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = i;
    number.addEventListener('click', () => selectNumber(i));
    numbersContainer.appendChild(number);
}



// Function to select a number
function selectNumber(number) {
    const index = selectedNumbers.indexOf(number);
    if (index === -1) {
        selectedNumbers.push(number);
    } else {
        selectedNumbers.splice(index, 1);
    }
}

// Function to submit selected numbers
function submitVolume() {
    const volume = selectedNumbers.join('');
    resultContainer.textContent = `Your volume is now: ${volume}`;
}

function resetVolume() {
    selectedNumbers = [];
    resultContainer.textContent = `Your Volume is now: 0`;
}

//  code for moving numbers smooth
const numbers = document.querySelectorAll('.number');

function getRandomTranslation() {
    const randomX = Math.random() * 5 - 2.5; 
    const randomY = Math.random() * 5 - 2.5;
    return { x: randomX, y: randomY };
}

function moveNumbers() {
    numbers.forEach(number => {
        const translation = getRandomTranslation();
        number.style.transition = 'transform 1s ease'; 
        number.style.transform = `translate(${translation.x}vw, ${translation.y}vh)`; 
    });
}

// Call moveNumbers function every second and a half to animate the numbers
setInterval(moveNumbers, 1500);