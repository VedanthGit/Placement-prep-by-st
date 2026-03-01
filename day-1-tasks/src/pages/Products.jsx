import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
	const handleAddToCard = (productName) => {
		alert(`${productName} added successfully`);
	};
	return (
		<div>
			<h2>Products</h2>
			<ProductCard
				productName="iPhone 15"
				price={79999}
				onAddToCart={handleAddToCard}
			/>
			<ProductCard
				productName="Samsung S24"
				price={74999}
				onAddToCart={handleAddToCard}
			/>
			<ProductCard
				productName="OnePlus 12"
				price={64999}
				onAddToCart={handleAddToCard}
			/>
		</div>
	);
};

export default Products;
