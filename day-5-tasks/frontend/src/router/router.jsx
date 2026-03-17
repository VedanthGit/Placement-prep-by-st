import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import ProtectedRoute from "../components/ProtectedRoute";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },

	{
		path: "/users",
		element: (
			<ProtectedRoute>
				<Users />
			</ProtectedRoute>
		),
	},

	{ path: "/search", element: <Search /> },
	{ path: "*", element: <NotFound /> },
]);

export default router;
