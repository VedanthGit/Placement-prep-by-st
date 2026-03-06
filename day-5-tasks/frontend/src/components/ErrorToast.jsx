const ErrorToast = ({ message }) => {
	if (!message) return null;

	return (
		<div className="fixed bottom-4 right-4 bg-red-500 text-white p-3">
			{message}
		</div>
	);
};

export default ErrorToast;
