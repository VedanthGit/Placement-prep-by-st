import React from "react";

const User = () => {
	if (getRole() !== "user") {
		return <h1>Unauthorized</h1>;
	}
	return <div>User Page</div>;
};

export default User;
