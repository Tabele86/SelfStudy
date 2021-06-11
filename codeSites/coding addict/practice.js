// const bool1 = true;
// const bool2 = 2 > 1;

// if (bool1) {
// 	console.log('hey it works');
// }
// if (bool2) {
// 	console.log('hey it works');
// }
// const text = 'john';

// if (text) {
// 	console.log('hey the value is Truthy');
// } else {
// 	console.log('value is Falsy');
// }

// let text = 'some text';
// console.log(typeof text);

// let number = 3;
// let number2 = 2 + 5;

// const value = 1 < 0;
// value ? console.log('value is true') : console.log('value is false');
// const value = 2 > 1;
// if (value) {
// 	console.log('value is true');
// } else {
// 	console.log('value is false');
// }

// let name = 'bobo';
// name = 'peter';
// function calculate() {
// 	console.log(name);
// 	name = 'orange';
// 	function inner() {
// 		name = 'inner name value';
// 		console.log(`this is from inner function ${name}`);
// 	}
// 	inner();
// }
// calculate();

// if (true) {
// 	console.log(name);
// 	name = 'pants';
// }
// console.log(`my name is ${name} and im awesome`);

// const globalNumber = 5;

// function add(num1, num2) {
// 	const globalNumber = 20;
// 	const result = num1 + num2 + globalNumber;
// 	function multiply() {
// 		const multiplyResult = result * globalNumber;
// 		console.log(multiplyResult);
// 	}
// 	multiply();
// 	return result;
// }
// console.log(add(3, 4));

// function greetMorning(name) {
// 	const myName = 'john';
// 	console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
// 	const myName = 'john';
// 	console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
// greetMorning('bobo');
// greetAfternoon('peter');

function morning() {
	console.log(` Good morning `);
	return ` Good morning, `;
}

function greet(name, cb) {
	cb();
	const myName = 'john';
	console.log(` ${name}, my name is ${myName}.`);
}
greet('bobo', morning);
greet('peter', morning);
