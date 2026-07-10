export function getProductState(product, cart) {
	const cartItem = cart.find((item) => item.id === product.id);
	const countInCart = cartItem ? cartItem.count : 0;

	const stockLeft = product.itemsInStock - countInCart;

	return {
		countInCart,
		isSoldOut: stockLeft <= 0,
		isInCart: countInCart > 0,
	};
}
