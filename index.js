"use strict";

let a = '';
let b = '';
let result = '';
let sign;
const input = document.querySelector(".add");

function add() {
    a = input.value;
    sign = "+";
    input.value = '';
}

function sub() {
    a = input.value;
    sign = "-";
    input.value = '';
}

function mult() {
    a = input.value;
    sign = "*";
    input.value = '';
}

function div() {
    a = input.value;
    sign = "/";
    input.value = '';
}

function equ() {
    b = input.value;
    switch (sign) {
        case "+":
            result = parseFloat(a) + parseFloat(b);
            input.value = result;
            break;

        case "-":
            result = parseFloat(a) - parseFloat(b);
            input.value = result;
            break;

        case "*":
            result = parseFloat(a) * parseFloat(b);
            input.value = result;
            break;

        case "/":
            result = parseFloat(a) / parseFloat(b);
            input.value = result;
            break;
    }
}

