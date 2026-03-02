import React from "react";
import SmartCounter from "./components/SmartCounter";
import UserList from "./components/UserList";
import LiveSearch from "./components/LiveSearch";

const App = () => {
	return (
		<div>
			<SmartCounter />
			<UserList />
			<LiveSearch />
		</div>
	);
};

export default App;
