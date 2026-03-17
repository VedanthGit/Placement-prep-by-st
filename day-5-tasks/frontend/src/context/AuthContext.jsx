import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));

	const login = async () => {
		const res = await fetch("http://localhost:5000/login", {
			method: "POST",
		});

		const data = await res.json();

		localStorage.setItem("token", data.token);
		setToken(data.token);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setToken(null);
	};

	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
