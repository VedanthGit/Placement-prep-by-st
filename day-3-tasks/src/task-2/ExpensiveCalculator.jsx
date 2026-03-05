import React, { useMemo, useState } from "react";

const heavyCalculation = (num) => {
	console.log("Calculating...");
	let result = 0;
	for (let i = 0; i < 1_000_000_000; i++) {
		result += num;
	}
	return result;
};

const ExpensiveCalculator = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const calculatedValue = useMemo(() => {
		return heavyCalculation(number);
	}, [number]);
	return (
		<div
			className={`p-6 rounded-lg ${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
		>
			<h2 className="text-xl font-bold mb-4">Expensive Calculator</h2>

			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(Number(e.target.value))}
				className="p-2 border rounded mb-4"
			/>

			<p className="mb-4">Result: {calculatedValue}</p>

			<button
				onClick={() => setDark((prev) => !prev)}
				className="px-4 py-2 bg-purple-500 text-white rounded"
			>
				Toggle Theme
			</button>
		</div>
	);
};

export default ExpensiveCalculator;
