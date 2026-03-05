export const login = (role) => {
	localStorage.setItem("token", "fake-jwt-token");
	localStorage.setItem("role", role);
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("role");
};

export const isAuthenticated = () => {
	return !!localStorage.getItem("token");
};

export const getRole = () => {
	return localStorage.getItem("role");
};
