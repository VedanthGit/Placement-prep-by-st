import React, { useState } from "react";
import UserCard from "../components/UserCard";

const Dashboard = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Steve Smith", role: "Batsmen" },
		{ id: 2, name: "Pat Cummins", role: "Freshie" },
		{ id: 3, name: "Mitchell Starc", role: "Bowler" },
	]);

	const handlePromote = (id) => {
		const updateUsers = users.map((user) =>
			user.id === id ? { ...user, role: "Senior" } : user,
		);

		setUsers(updateUsers);
	};
	return (
		<div>
			<h2>User Dashboard</h2>
			{users.map((user) => (
				<UserCard
					key={user.id}
					id={user.id}
					name={user.name}
					role={user.role}
					onPromote={handlePromote}
				/>
			))}
		</div>
	);
};

export default Dashboard;
