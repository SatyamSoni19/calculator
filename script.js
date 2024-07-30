const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);   
    } catch (error) {
        alert("Invalid expression! Please correct it.");
        display.value = "";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0,-1);
}