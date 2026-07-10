import { create } from 'zustand';

export const useUIStore = create((set) => ({
	isCartOpen: false,
	openCart: () => set({ isCartOpen: true }),
	closeCart: () => set({ isCartOpen: false }),
	toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

	popupOpen: false,
	selectedProduct: null,

	openPopup: (product) =>
		set({
			popupOpen: true,
			selectedProduct: product,
		}),

	closePopup: () =>
		set({
			popupOpen: false,
			selectedProduct: null,
		}),
}));
