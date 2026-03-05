import React from "react";
import OptimizedProductList from "./task-1/OptimizedProductList";
import ExpensiveCalculator from "./task-2/ExpensiveCalculator";
import ThemeProviderWrapper from "./task-3/ThemeProviderWrapper";

const App = () => {
	return (
		<div>
			<OptimizedProductList />
			<ExpensiveCalculator />
			<ThemeProviderWrapper />
		</div>
	);
};

export default App;
