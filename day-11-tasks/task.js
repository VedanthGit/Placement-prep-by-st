// TASK - 1
function debounce(func, delay) {
	let timer;

	return function (...args) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

// Example usage
function searchInput(value) {
	console.log("Searching for:", value);
}

const debouncedSearch = debounce(searchInput, 500);

// Simulate user typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");

// TASK - 2
function multiply(a) {
	return function (b) {
		return a * b;
	};
}

// Usage
console.log(multiply(2)(3)); // 6

function multiplyAdvanced(a) {
	return function (b) {
		return function (c) {
			return a * b * c;
		};
	};
}

console.log(multiplyAdvanced(2)(3)(4)); // 24

// TASK - 3
function deepCopy(obj) {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => deepCopy(item));
	}

	let copy = {};

	for (let key in obj) {
		copy[key] = deepCopy(obj[key]);
	}

	return copy;
}

// Example
const original = {
	name: "Vedanth",
	address: {
		city: "Hyderabad",
	},
};

const cloned = deepCopy(original);

cloned.address.city = "Mumbai";

console.log(original.address.city); // Hyderabad (unchanged)

// TASK - 4

document.getElementById("list").addEventListener("click", function (event) {
	if (event.target.tagName === "LI") {
		console.log("Clicked:", event.target.textContent);
	}
});

// TASK - 5
async function fetchData() {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts/1",
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();

		console.log("Data:", data);
	} catch (error) {
		console.log("Error:", error.message);
	}
}

fetchData();
