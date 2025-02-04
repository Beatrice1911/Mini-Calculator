let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}
function deleteChar() {
    display.value = display.value.slice(0, -1);
}
function inputValue(value) {
    display.value += value;
}
function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
