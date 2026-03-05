import React, { useCallback, useState } from "react";
import Product from "./Product";

const productsData = Array.from({ length: 10 }, (_, i) => ({
	id: i + 1,
	name: `Product ${i + 1}`,
}));

const OptimizedProductList = () => {
	const [cartCount, setCartCount] = useState(0);

	const handleAddToCart = useCallback(() => {
		setCartCount((prev) => prev + 1);
	}, []);
	return (
		<div className="p-6 space-y-4">
			<h2 className="text-xl font-bold">Cart Count: {cartCount}</h2>

			{productsData.map((product) => (
				<Product
					key={product.id}
					product={product}
					onAddToCart={handleAddToCart}
				/>
			))}
		</div>
	);
};

export default OptimizedProductList;
