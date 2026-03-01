import React from "react";

const ProductCard = ({ productName, price, onAddToCart }) => {
	const handleClick = () => {
		console.log(`Added ${productName} to cart`);
		onAddToCart(productName);
	};
	return (
		<div>
			<h3>{productName}</h3>
			<p>$ {price} </p>
			<button onClick={handleClick}>Add To Cart</button>
		</div>
	);
};

export default ProductCard;
