export const getAllPriceProduct = (product, count) =>
	product.discountPercent
		? (product.price - (product.price * product.discountPercent) / 100) * count
		: product.price * count;
