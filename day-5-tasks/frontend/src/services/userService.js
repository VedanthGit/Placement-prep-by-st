import api from "./api";

export const getUsers = () => {
	return api.get("/users");
};

export const createUser = (name) => {
	return api.post("/users", { name });
};

export const deleteUser = (id) => {
	return api.delete(`/users/${id}`);
};

export const updateUser = (id, name) => {
	return api.patch(`/users/${id}`, { name });
};
