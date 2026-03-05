import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const DashboardLayout = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();

		navigate("/login");
	};
	return <div>DashboardLayout</div>;
};

export default DashboardLayout;
