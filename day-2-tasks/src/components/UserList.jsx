import React, { useEffect, useState } from "react";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchUsers = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users",
					{ signal: controller.signal },
				);

				if (!response.ok) {
					throw new Error("Failed to fetch users");
				}

				const data = await response.json();
				setUsers(data);
			} catch (err) {
				if (err.name !== "AbortError") {
					setError(err.message);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();

		return () => {
			console.log("UserList component unmounted");
			controller.abort();
		};
	}, []);

	return (
		<div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-xl">
			<h2 className="text-xl font-semibold mb-4">User List</h2>

			{loading && <p className="text-yellow-400">Loading users...</p>}
			{error && <p className="text-red-500">{error}</p>}

			{!loading && !error && (
				<ul className="space-y-2">
					{users.map((user) => (
						<li
							key={user.id}
							className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
						>
							<p className="font-medium">{user.name}</p>
							<p className="text-sm text-gray-400">{user.email}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default UserList;
