import React, { useEffect, useState } from "react";

const SmartCounter = () => {
	const [count, setCount] = useState(0);
	const [history, setHistory] = useState([]);

	const updateCounter = (delta) => {
		setCount((prev) => {
			const newValue = prev + delta;

			return newValue;
		});
	};

	useEffect(() => {
		setHistory((prevHistory) => [...prevHistory, count]);
	}, [count]);
	return (
		<div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-md">
			<h2 className="text-xl font-semibold mb-4">Smart Counter</h2>

			<div className="text-3xl font-bold mb-4">{count}</div>

			<div className="flex gap-4 mb-6">
				<button
					onClick={() => updateCounter(1)}
					className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600"
				>
					Increment
				</button>

				<button
					onClick={() => updateCounter(-1)}
					className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
				>
					Decrement
				</button>
			</div>

			<div>
				<h3 className="font-medium mb-2">History:</h3>
				<ul className="text-sm space-y-1 max-h-40 overflow-y-auto">
					{history.map((value, index) => (
						<li key={index} className="text-gray-300">
							Step {index}: {value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SmartCounter;
