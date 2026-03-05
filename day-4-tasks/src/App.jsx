import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import User from "./pages/User";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index element={<Overview />} />
						<Route path="settings" element={<Settings />} />
					</Route>
				</Route>

				<Route path="/admin" element={<Admin />} />
				<Route path="/user" element={<User />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
