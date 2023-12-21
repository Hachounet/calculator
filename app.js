let a = Infinity;
let operator = "";
let b = Infinity;
let result = 0;
const buttons = document.querySelectorAll('.buttons');
let screenDisplay = document.getElementById('displayscreen');

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
    if (b === 0) {
        return result = 0;
    } else {
        return result;
    }
}

function remainder(a, b) {
    let result = (a % b);
    if (b === 0) {
        return result = 0;
    }
    return result;
}

function operate() {
    let aInput = a;
    let bInput = b;
    let operatorInput = operator;

    if (operatorInput === "+") {
        result = add(Number(aInput), Number(bInput));
        
    } else if (operatorInput === "-") {
        result = reduce(Number(aInput), Number(bInput));
        
    } else if (operatorInput === "X") {
        result = multiply(Number(aInput), Number(bInput));
        
    } else if (operatorInput === "/") {
        result = divide(Number(aInput), Number(bInput));
        
    } else if (operatorInput === "%") {
        result = remainder(Number(aInput), Number(bInput));
       
    } else {
        return screenDisplay.textContent = "ERROR";
    }

    a = result;
    b = Infinity;
    operator = "";
    result = Number(result.toFixed(16));

    screenDisplay.textContent = result.toString();
}

function checkLength() {
    if ( screenDisplay.textContent.length > 9) {
        screenDisplay.textContent = screenDisplay.textContent.slice(0, 9)
    }
}

document.addEventListener('keypress', (event) => 
{
let name = event.key;

if (       name !== "0" 
        && name !== "1" 
        && name !== "2" 
        && name !== "3" 
        && name !== "4" 
        && name !== "5" 
        && name !== "6" 
        && name !== "7" 
        && name !== "8" 
        && name !== "9" 
        && name !== "/" 
        && name !=="*" 
        && name !== "-" 
        && name !== "+" 
        && name !== "%"
        && name !== "Enter" 
        && name !== "Delete"
        && name !== "." ){
    console.log("Typing other key than valid keys.")
}
else {
   let buttonsArray =  Array.from(buttons);
    let button =  buttonsArray.find((button) => button.id === name)
        if (button){
        button.click();
        }
    }
}
);


buttons.forEach(button => button.addEventListener('click', () => 
{

    let buttonContent = button.innerText;
    // If clear button clicked reset all var
    if (button.innerText === "CLEAR") {
        screenDisplay.textContent = "";
        a = Infinity;
        operator = "";
        b = Infinity;
        result = 0;
    } 
    if ( button.classList.contains("posneg")){
        if ( screenDisplay.textContent > 0) {
            screenDisplay.textContent = "-" + screenDisplay.textContent
        }
        else if ( screenDisplay.textContent < 0 ) {
            screenDisplay.textContent = screenDisplay.textContent.slice(1)
        }


    }
    if ( button.classList.contains("deci")){
        if (!screenDisplay.textContent.includes(".") && /^\d+(\.\d+)?$/.test(screenDisplay.textContent)){
            screenDisplay.textContent += buttonContent
        }
    }
    
    else if (button.classList.contains("btnop")) {
        // if we can do maths, give result before edit var again
        if (a !== Infinity && b !== Infinity && operator !== "") {
            operate();
            operator = buttonContent;
        }
        // if we can't do maths, we say than var a should have been input just before, so save it and save operator 
        else {
            a = screenDisplay.textContent;
            screenDisplay.textContent = "" + buttonContent;
            operator = buttonContent;
        }
    } 
    else if (button.classList.contains("numb")) {
        // if operator is not empty, we can say we only miss var b
        if (operator !== "") {
            // we check if b is really empty, we reset screenDisplay to save correctly var b
            if (b === Infinity) {
                screenDisplay.textContent = "";
            }
            screenDisplay.textContent += buttonContent;
            b = screenDisplay.textContent;
        }
        // if operator is empty we display the input user, we're gonna save it while input operator
         else {
            screenDisplay.textContent += buttonContent;
        }
    }
    // remove one element of currentDisplay
    else if (button.classList.contains("supp")) {
        let currentDisplay = screenDisplay.textContent;
        screenDisplay.textContent = currentDisplay.slice(0, -1);


    } else if (button.classList.contains("total")) {
        operate();
    }

    checkLength();
    console.log("CLICK ON BUTTON");

}));
