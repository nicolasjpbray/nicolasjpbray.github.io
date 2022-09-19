let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
additionButton.onclick = () => compute("add");
let subtractionButton = document.querySelector('#subButton');
subtractionButton.onclick = ()  => compute("sub");
let divisionButton = document.querySelector('#multButton');
divisionButton.onclick = ()  => compute("mult");
let multiplicationButton = document.querySelector('#divButton');
multiplicationButton.onclick = ()  => compute("div");
let outputField = document.querySelector('#output');

function compute(operation) {
	let number1 = Number(input1.value);
	let number2 = Number(input2.value);
	let ans = 0;
	switch(operation) {
		case "add": ans = number1+number2;
			break;
		case "sub": ans = number1-number2;
			break;
		case "mult": ans = number1*number2;
			break;
		case "div": ans = number1/number2;
			break;
		default:
			break;
	}
	outputField.value = ans;
}

