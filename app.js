let secretNumber = createRandomNumber();
let tries = 0;

startGame();
//Functions
function showTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function verifyTry() {
    let userTry = document.querySelector("input").value;
    tries++;

    if (userTry == secretNumber) {
        let triesMessage = tries > 1 ? `${tries} tentativas!` : `uma tentativa!`;
        showTextOnScreen("h1", "Acertou!");
        showTextOnScreen("p", `Você acertou o número em ${triesMessage}`);
        document.getElementById("restart").removeAttribute('disabled');
    } else {
        clearField();
        if (userTry > secretNumber){
            showTextOnScreen("p", "Pupupupupu! Que pena, você errou! O número é menor...");
        } else {
            showTextOnScreen("p", "Pupupupupu! Que pena, você errou! O número é maior...");
        }
    }
}

function createRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function restart() {
    secretNumber = createRandomNumber();
    clearField();
    tries = 0;
    startGame();
    document.getElementById('restart').setAttribute('disabled', true);
}

function clearField() {
    userTry = document.querySelector("input");
    userTry.value = '';
}

function startGame() {
    showTextOnScreen("h1", "Monokuma Game!");
    showTextOnScreen("p", "Choose a number from 1 to 10");
}