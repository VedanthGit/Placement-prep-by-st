import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = (role) => {
		login(role);
		navigate("/dashboard");
	};
	return (
		<div>
			<h1>Login</h1>

			<button onClick={() => handleLogin("admin")}>Login as Admin</button>

			<button onClick={() => handleLogin("user")}>Login as user</button>
		</div>
	);
};

export default Login;
