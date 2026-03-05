import React, { memo } from "react";

const Product = ({ product, onAddToCart }) => {
	console.log("Rendering: ", product.name);

	return (
		<div className="p-4 bg-gray-800 text-white rounded-lg flex justify-between items-center">
			<span>{product.name}</span>
			<button
				onClick={() => onAddToCart(product.id)}
				className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
			>
				Add To Cart
			</button>
		</div>
	);
};

export default memo(Product);
