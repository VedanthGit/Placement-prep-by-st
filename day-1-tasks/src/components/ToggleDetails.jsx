import React, { useState } from "react";

const ToggleDetails = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleToggle = () => {
		setIsVisible((prev) => !prev);
	};
	return (
		<div>
			<button onClick={handleToggle}>
				{" "}
				{isVisible ? "Hide Details" : "Show Details"}{" "}
			</button>

			{isVisible && (
				<p>
					This is a simple example of cond rendering using useState hook, this
					paragraph is only seen when the isVisible state is true.
				</p>
			)}
		</div>
	);
};

export default ToggleDetails;
