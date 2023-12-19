let a = Infinity;
let operator = "";
let b = Infinity;
const buttons = document.querySelectorAll('.buttons');
let screenDisplay = document.getElementById('displayscreen')

function add(a,b) {
    let result = a + b ;
    return result;
}

function reduce(a,b) {
    let result = a - b;
    return result;
}

function multiply(a,b){
    let result = a * b;
    return result;

}

function divide(a,b){
    let result = a/b;
    return result;
}

function operate() {
    let aInput = a;
    let bInput = b;
    let operatorInput = operator;

    if ( operatorInput === "+"){
        return screenDisplay.textContent = add(Number(aInput), Number(bInput))
    }
    else if ( operatorInput === "-"){
        return screenDisplay.textContent = reduce(Number(aInput), Number(bInput))
    }
    else if ( operatorInput === "*"){
        return screenDisplay.textContent = multiply(Number(aInput), Number(bInput))
    } 
    else if ( operatorInput === "/"){
        return screenDisplay.textContent = divide(Number(aInput), Number(bInput))
    }
    else {
        return screenDisplay.textContent = "ERROR IN THE MATRIX"
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    let buttonContent = button.innerText;
    
    if ( button.innerText === "CLEAR"){
        screenDisplay.textContent = ""
        a = Infinity
        operator = ""
        b = Infinity
    }
    else if (button.classList.contains("btnop")) {
        a = screenDisplay.textContent
        screenDisplay.textContent = "" + buttonContent;
        operator = buttonContent
    }
    else if (button.classList.contains("numb")){
        if ( operator != "" ){
            screenDisplay.textContent += buttonContent //notworking
            b = screenDisplay.textContent
        }
        else {
            screenDisplay.textContent += buttonContent
        }
        }

    else if (button.classList.contains("supp")){
        let currentDisplay = screenDisplay.textContent;
        screenDisplay.textContent = currentDisplay.slice(0, -1); 
     
    }
    else if (button.classList.contains("total")){
        operate()
    }
    console.log("CLICK ON BUTTON")

}));