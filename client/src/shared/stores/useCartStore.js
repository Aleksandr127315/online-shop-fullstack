import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
	persist(
		(set, get) => ({
			cart: [],

			addToCart: (product) => {
				const { cart } = get();

				const item = cart.find((i) => i.id === product.id);

				if (!item) {
					set({
						cart: [
							...cart,
							{
								id: product.id,
								title: product.title,
								price: product.price,
								weight: product.weight,
								discountPercent: product.discountPercent,
								imageUrl: product.imageUrl,
								maxStock: product.itemsInStock,
								count: 1,
							},
						],
					});
					return;
				}

				if (item.count >= item.maxStock) return;

				set({
					cart: cart.map((i) =>
						i.id === product.id ? { ...i, count: i.count + 1 } : i,
					),
				});
			},

			removeFromCart: (id) => {
				const { cart } = get();

				const item = cart.find((i) => i.id === id);
				if (!item) return;

				if (item.count === 1) {
					set({ cart: cart.filter((i) => i.id !== id) });
					return;
				}

				set({
					cart: cart.map((i) =>
						i.id === id ? { ...i, count: i.count - 1 } : i,
					),
				});
			},

			deleteFromCart: (id) => {
				set({
					cart: get().cart.filter((i) => i.id !== id),
				});
			},

			clearCart: () => set({ cart: [] }),

			getTotalPrice: () => {
				const { cart } = get();

				return cart.reduce((acc, item) => {
					const price = item.discountPercent
						? item.price - (item.price * item.discountPercent) / 100
						: item.price;

					return acc + price * item.count;
				}, 0);
			},
		}),
		{
			name: 'cart-storage',
		},
	),
);
