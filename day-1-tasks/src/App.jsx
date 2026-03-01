import React from "react";
import Products from "./pages/Products";
import ToggleDetails from "./components/ToggleDetails";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<div>
			<Products />
			<ToggleDetails />
			<Dashboard />
		</div>
	);
};

export default App;
