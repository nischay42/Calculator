var display = document.getElementById("display");

function toDisplay(input) {
    display.value += input;
    display.scrollLeft = display.scrollWidth;
}

function displayClear() {
    display.value = "";
    display.classList.remove("error");
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Enter appropriate equation";
        display.classList.add("error");
    }
}

function backspace() {
    let currentValue = display.value;
    let newValue = currentValue.slice(0, -1);

    display.value = newValue;
}

function square() {
    let equation = display.value;

    // Split the equation by operators (+, -, *, /) to get individual numbers
    let numbers = equation.split(/[-+*/]/);

    // Get the last number
    let lastNumber = numbers[numbers.length - 1];

    // Calculate the square
    let squareResult = parseFloat(lastNumber) * parseFloat(lastNumber);

    // Replace the last number with its square in the equation
    let updatedEquation = equation.slice(0, equation.lastIndexOf(lastNumber)) + squareResult;

    // Update the display with the new equation
    display.value = updatedEquation;
}
