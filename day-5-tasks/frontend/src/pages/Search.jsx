import { useState, useEffect } from "react";
import api from "../services/api";

const Search = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (!query) return;

		const controller = new AbortController();

		const fetchSearch = async () => {
			try {
				const res = await api.get(`/users?q=${query}`, {
					signal: controller.signal,
				});

				setResults(res.data);
			} catch (err) {
				if (err.name !== "CanceledError") {
					console.log(err);
				}
			}
		};

		fetchSearch();

		return () => controller.abort();
	}, [query]);

	return (
		<div>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search user"
			/>

			{results.map((r) => (
				<div key={r.id}>{r.name}</div>
			))}
		</div>
	);
};

export default Search;
