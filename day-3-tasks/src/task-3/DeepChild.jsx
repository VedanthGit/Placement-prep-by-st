import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const DeepChild = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="p-4 border rounded">
			<p>Current Theme: {theme}</p>
		</div>
	);
};

export default DeepChild;
