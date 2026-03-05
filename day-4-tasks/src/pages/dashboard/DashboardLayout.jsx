import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const DashboardLayout = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();

		navigate("/login");
	};
	return (
		<div className="flex h-screen">
			<aside className="w-48 bg-gray-800 text-white p-4">
				<h2>Dashboard</h2>
				<nav className="flex flex-col gap-2 mt-4">
					<Link to="/dashboard">Overview</Link>
					<Link to="/dashboard/settings">Settings</Link>
				</nav>

				<button onClick={handleLogout} className="mt-6 bg-red-500 px-3 py-1">
					Logout
				</button>
			</aside>

			<main className="flex-1 p-6">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
