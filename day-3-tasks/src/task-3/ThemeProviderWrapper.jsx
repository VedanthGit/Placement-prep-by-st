import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import DeepChild from "./DeepChild";

const ThemeProviderWrapper = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div
				className={`p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
			>
				<button
					onClick={toggleTheme}
					className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded"
				>
					Toggle Theme
				</button>

				<DeepChild />
			</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProviderWrapper;
