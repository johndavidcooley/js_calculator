var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var zero = document.querySelector('#zero');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var decimal = document.querySelector('#decimal');
var equals = document.querySelector('#equals');
var display = document.querySelector('#display');
var clear = document.querySelector('#clear');

function logToDisplay() {
	var toTheDisplay = event.currentTarget.textContent;
	display.textContent =  display.textContent + toTheDisplay;
}

function logMultiply() {
	// var toTheDisplay = event.currentTarget;
	display.textContent =  display.textContent + "*";
}

function logClear() {
	display.textContent = "";
}

function logEquals() {
	display.textContent = eval(display.textContent);
}

one.addEventListener('click', logToDisplay);
two.addEventListener ('click', logToDisplay);
three.addEventListener ('click', logToDisplay);
four.addEventListener ('click', logToDisplay);
five.addEventListener ('click', logToDisplay);
six.addEventListener ('click', logToDisplay);
seven.addEventListener ('click', logToDisplay);
eight.addEventListener ('click', logToDisplay);
nine.addEventListener ('click', logToDisplay);
zero.addEventListener ('click', logToDisplay);
plus.addEventListener ('click', logToDisplay);
minus.addEventListener ('click', logToDisplay);
multiply.addEventListener ('click', logMultiply);
divide.addEventListener ('click', logToDisplay);
decimal.addEventListener ('click', logToDisplay);
clear.addEventListener ('click', logClear);
equals.addEventListener ('click', logEquals);