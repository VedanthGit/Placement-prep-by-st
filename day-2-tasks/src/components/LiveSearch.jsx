import React, { useMemo, useState } from "react";

const itemsList = [
	"Apple",
	"Banana",
	"Orange",
	"Mango",
	"Pineapple",
	"Strawberry",
	"Blueberry",
	"Watermelon",
	"Grapes",
	"Peach",
	"Cherry",
	"Papaya",
];

const LiveSearch = () => {
	const [query, setQuery] = useState("");

	const filteredItems = useMemo(() => {
		const lowerQuery = query.toLowerCase();

		return itemsList.filter((item) => item.toLowerCase().includes(lowerQuery));
	}, [query]);

	return (
		<div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-md">
			<h2 className="text-xl font-semibold mb-4">Live Search</h2>

			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search fruits..."
				className="w-full p-2 rounded-lg bg-gray-800 text-white outline-none mb-4"
			/>

			{filteredItems.length > 0 ? (
				<ul className="space-y-2">
					{filteredItems.map((item, index) => (
						<li
							key={index}
							className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
						>
							{item}
						</li>
					))}
				</ul>
			) : (
				<p className="text-red-400">No results found</p>
			)}
		</div>
	);
};

export default LiveSearch;
