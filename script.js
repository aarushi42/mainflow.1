let displayValue = "";

function appendNumber(number) {
    displayValue += number;
    document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
    const lastChar = displayValue[displayValue.length - 1];
    if (displayValue === "" || "+-*/.".includes(lastChar)) return; // Prevent two operators in a row
    displayValue += operator;
    document.getElementById("display").value = displayValue;
}

function appendDot() {
    const lastNumber = displayValue.split(/[\+\-\*\/]/).pop();
    if (lastNumber.includes(".")) return; // Prevent multiple dots in one number
    displayValue += ".";
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString(); // Calculate the result using eval
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}
