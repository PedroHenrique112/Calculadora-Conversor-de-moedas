const display = document.getElementById("display");
let operatorUsed = false;

function appendNumber(num) {
    if (display.textContent === "0") {
        display.textContent = "";
    }
    display.textContent += num;
    operatorUsed = false;
}

function appendOperator(op) {
    if (operatorUsed) return;
    display.textContent += op;
    operatorUsed = true;
}

function clearDisplay() {
    display.textContent = "0";
    operatorUsed = false;
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Erro";
    }
}

function percent() {
    try {
        display.textContent = eval(display.textContent) / 100;
    } catch {
        display.textContent = "Erro";
    }
}

function convertCurrency() {
    const value = parseFloat(display.textContent);
    if (isNaN(value)) {
        display.textContent = "Erro";
        return;
    }

    const USD = 4.95;
    const EUR = 5.35;

    const usd = (value / USD).toFixed(2);
    const eur = (value / EUR).toFixed(2);

    display.textContent = `US$ ${usd} | € ${eur}`;
}

/* TECLADO */
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) appendNumber(e.key);
    if (["+", "-", "*", "/", "."].includes(e.key)) appendOperator(e.key);
    if (e.key === "Enter") calculate();
    if (e.key === "Escape") clearDisplay();
    if (e.key === "Backspace") {
        display.textContent = display.textContent.slice(0, -1) || "0";
    }
});