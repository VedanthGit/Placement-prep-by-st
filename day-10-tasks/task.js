// TASK - 1
console.log("Hello, Welcome to JavaScript Learning");

// TASK - 2

function first() {
	console.log("First function start");
	second();
	console.log("First function end");
}

function second() {
	console.log("Second function start");
	third();
	console.log("Second function end");
}

function third() {
	console.log("Third function");
}

first();

// TASK - 3

function start() {
	console.log("Start");
	process();
}

function process() {
	console.log("Process");
	finish();
}

function finish() {
	console.log("Finish");
}

start();

// TASK - 4

console.log(a); // undefined
var a = 10;

try {
	console.log(b); // ReferenceError
} catch (err) {
	console.log("Error:", err.message);
}
let b = 20;

// TASK - 5

var x = 10;
var x = 20; // allowed

let y = 30;
// let y = 40; // Error

const z = 50;
// z = 60; // Error

console.log("var:", x);
console.log("let:", y);
console.log("const:", z);

// TASK - 6

let globalVar = "I am Global";

function scopeTest() {
	let functionVar = "I am Function Scoped";
	console.log(globalVar);
}

scopeTest();

if (true) {
	let blockVar = "I am Block Scoped";
}

// console.log(functionVar); // Error
// console.log(blockVar);    // Error

// TASK - 7

function createCounter() {
	let count = 0;

	return function () {
		count++;
		console.log("Counter:", count);
	};
}

const counter = createCounter();

counter();
counter();
counter();

// TASK - 8

const person = {
	name: "Vedanth",
	age: 22,
	display: function () {
		console.log("Person:", this.name, this.age);
	},
};

person.display();

const obj = {
	name: "JS",
	greet: () => {
		console.log("Arrow this:", this.name);
	},
};

obj.greet();

// TASK - 9

console.log("A");

setTimeout(() => {
	console.log("B");
}, 0);

console.log("C");

// TASK - 10

function greet(name, callback) {
	console.log("Hello " + name);
	callback();
}

function bye() {
	console.log("Goodbye");
}

greet("Vedanth", bye);

// TASK - 11

const dataPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Data Loaded");
	}, 2000);
});

dataPromise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
