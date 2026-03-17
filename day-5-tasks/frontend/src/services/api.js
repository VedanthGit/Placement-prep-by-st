import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

api.interceptors.response.use(
	(res) => res,
	(error) => {
		if (error.response?.status === 401) {
			localStorage.removeItem("token");
			window.location.href = "/login";
		}

		if (error.response?.status === 500) {
			alert("Server error. Try again later.");
		}

		return Promise.reject(error);
	},
);

export default api;
