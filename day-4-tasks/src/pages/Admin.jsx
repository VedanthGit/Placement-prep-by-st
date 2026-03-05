import React from "react";
import { getRole } from "../utils/auth";

const Admin = () => {
	if (getRole() !== "admin") {
		return <h1>Unauthorized</h1>;
	}
	return <div>Admin Panel</div>;
};

export default Admin;
