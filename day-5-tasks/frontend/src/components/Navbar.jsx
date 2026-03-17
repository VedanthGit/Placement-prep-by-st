import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
	const { logout, token } = useAuth();
	const navigate = useNavigate();

	return (
		<div className="flex justify-between p-4 bg-gray-800 text-white">
			<h2>App</h2>

			{token && (
				<button
					onClick={() => {
						logout();
						navigate("/login");
					}}
					className="bg-red-500 px-3 py-1"
				>
					Logout
				</button>
			)}
		</div>
	);
};

export default Navbar;
