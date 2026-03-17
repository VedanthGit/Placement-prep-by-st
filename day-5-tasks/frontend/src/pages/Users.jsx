import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "../services/userService";

const Users = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const res = await getUsers();
		setUsers(res.data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			<h1>Users</h1>

			<button onClick={() => createUser("New User")}>Add</button>

			{users.map((u) => (
				<div key={u.id}>
					{u.name}
					<button onClick={() => deleteUser(u.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default Users;
