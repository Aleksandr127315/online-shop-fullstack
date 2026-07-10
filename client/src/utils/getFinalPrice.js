export function getFinalPrice(product) {
	const price = product.price;
	const discount = product.discountPercent;

	return discount ? price - (price * discount) / 100 : price;
}
