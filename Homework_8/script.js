'use strict'

const button = document.getElementById('button'); 

button.addEventListener('click', (event) => {
event.preventDefault();
let result;
const number1 = document.getElementById('number1').value;
const number2 = document.getElementById('number2').value;
const operator = document.getElementById('operator').value;

switch(operator.trim()) {
    case '': result = 'Не введён знак';
    break;
    case '+': result = Number(number1) + Number(number2);
    break;
    case '-': result = Number(number1) - Number(number2);
    break;
    case '*': result = Number(number1) * Number(number2);
    break;
    case '/': result = Number(number1) / Number(number2);
    break;
    default: result = 'Программа не поддерживает такую операцию';
    break;
};

if (number2.trim() === '') {
    result = 'Второе число не указано';
};

if (number1.trim() === '') {
    result = 'Первое число не указано';
};

if (isNaN(number1) || isNaN(number2)) {
    result = 'Некорректный ввод чисел';
};

if (result === Infinity) {
    result = 'Операция не корректна';  
};

if (result !== 'Программа не поддерживает такую операцию' && result !== 'Первое число не указано' && result !== 'Второе число не указано' && result !== 'Некорректный ввод чисел' && result !== 'Не введён знак' && isNaN(result)) {
    result = 'Операция не корректна';
};

console.log(result)
document.getElementById('result').innerText = result;
});