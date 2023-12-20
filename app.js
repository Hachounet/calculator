let a = Infinity;
let operator = "";
let b = Infinity;
let result = 0;
const buttons = document.querySelectorAll('.buttons');
let screenDisplay = document.getElementById('displayscreen')

function add(a, b) {
    let result = a + b;
    return result;
}

function reduce(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;

}

function divide(a, b) {
    let result = a / b;
    return result;
}

function operate() {
    let aInput = a;
    let bInput = b;
    let operatorInput = operator;

    if (operatorInput === "+") {
        result = add(Number(aInput), Number(bInput));
        a = result; // Réassigne le résultat actuel à la variable a
        b = Infinity;
        operator = "";
        return screenDisplay.textContent = result;
    } else if (operatorInput === "-") {
        result = reduce(Number(aInput), Number(bInput));
        a = result;
        b = Infinity;
        operator = "";
        return screenDisplay.textContent = result;
    } else if (operatorInput === "*") {
        result = multiply(Number(aInput), Number(bInput));
        a = result;
        b = Infinity;
        operator = "";
        return screenDisplay.textContent = result;
    } else if (operatorInput === "/") {
        result = divide(Number(aInput), Number(bInput));
        a = result;
        b = Infinity;
        operator = "";
        return screenDisplay.textContent = result;
    } else {
        return screenDisplay.textContent = "ERROR IN THE MATRIX";
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    let buttonContent = button.innerText;

    if (button.innerText === "CLEAR") {
        screenDisplay.textContent = "";
        a = Infinity;
        operator = "";
        b = Infinity;
        result = 0;
    } else if (button.classList.contains("btnop")) {
        if (a !== Infinity && b !== Infinity && operator !== "") {
            operate();
        } else {
            a = screenDisplay.textContent;
            screenDisplay.textContent = "" + buttonContent;
            operator = buttonContent;
        }
    } else if (button.classList.contains("numb")) {
        if (operator !== "") {
            if (b === Infinity) {
                screenDisplay.textContent = "";
            }
            screenDisplay.textContent += buttonContent;
            b = screenDisplay.textContent;
        } else {
            screenDisplay.textContent += buttonContent;
        }
    } else if (button.classList.contains("supp")) {
        let currentDisplay = screenDisplay.textContent;
        screenDisplay.textContent = currentDisplay.slice(0, -1);
    } else if (button.classList.contains("total")) {
        operate();
    }
    console.log("CLICK ON BUTTON");
}));