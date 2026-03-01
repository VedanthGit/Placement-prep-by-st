import React from "react";

const UserCard = ({ id, name, role, onPromote }) => {
	return (
		<div>
			<h4>{name}</h4>
			<p>Role: {role}</p>
			<button onClick={() => onPromote(id)}>Promote </button>
		</div>
	);
};

export default UserCard;
