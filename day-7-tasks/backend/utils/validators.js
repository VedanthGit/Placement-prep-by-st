export const validateSignup = ({ email, password }) => {
	const errors = [];

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!email || !emailRegex.test(email)) {
		errors.push("Invalid email format");
	}

	// Password validation
	if (!password || password.length < 6) {
		errors.push("Password must be at least 6 characters");
	}

	return errors;
};
