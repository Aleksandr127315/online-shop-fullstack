import { create } from 'zustand';
import { DEFAULT_SORT } from '@/constants/constants';

export const useCatalogStore = create((set) => ({
	page: 1,
	pageSize: 9,

	sort: DEFAULT_SORT,

	category: null,
	minPrice: '',
	maxPrice: '',
	inStock: false,
	onSale: false,

	setPage: (page) => set({ page }),

	setSort: (sort) =>
		set({
			sort,
			page: 1,
		}),

	setCategory: (category) =>
		set({
			category,
			page: 1,
		}),

	setPriceRange: (minPrice, maxPrice) =>
		set({
			minPrice,
			maxPrice,
			page: 1,
		}),

	setInStock: (inStock) =>
		set({
			inStock,
			page: 1,
		}),

	setOnSale: (onSale) =>
		set({
			onSale,
			page: 1,
		}),

	resetFilters: () =>
		set({
			page: 1,
			sort: DEFAULT_SORT,
			category: null,
			minPrice: '',
			maxPrice: '',
			inStock: false,
			onSale: false,
		}),
}));
