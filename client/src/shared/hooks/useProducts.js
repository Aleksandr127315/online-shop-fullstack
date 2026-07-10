import { useEffect, useState } from 'react';
import { PRODUCT_INFO_URL } from '@/constants/constants';

export const useProducts = (paramsInput = {}) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [pagination, setPagination] = useState(null);

	useEffect(() => {
		const load = async () => {
			setLoading(true);
			setError(null);
			try {
				const params = new URLSearchParams();

				const {
					page,
					pageSize,
					sort,
					category,
					minPrice,
					maxPrice,
					inStock,
					onSale,
				} = paramsInput;

				if (page) params.set('pagination[page]', page);
				if (pageSize) params.set('pagination[pageSize]', pageSize);

				if (sort) params.set('sort', sort);

				if (category) {
					params.set('filters[categories][id][$eq]', category);
				}

				if (minPrice !== '' && minPrice != null) {
					params.set('filters[price][$gte]', minPrice);
				}

				if (maxPrice !== '' && maxPrice != null) {
					params.set('filters[price][$lte]', maxPrice);
				}

				if (inStock) {
					params.set('filters[itemsInStock][$gt]', 0);
				}

				if (onSale) {
					params.set('filters[discountPercent][$gt]', 0);
				}

				const query = params.toString();
				const url = query ? `${PRODUCT_INFO_URL}&${query}` : PRODUCT_INFO_URL;

				const res = await fetch(url);

				if (!res.ok) {
					const text = await res.text();
					throw new Error(`API ${res.status}: ${text}`);
				}
				const data = await res.json();

				setProducts(data.data || []);
				setPagination(data.meta?.pagination || null);
			} catch (e) {
				setError(e.message);
				setProducts([]);
			} finally {
				setLoading(false);
			}
		};

		load();
	}, [
		paramsInput.page,
		paramsInput.pageSize,
		paramsInput.sort,
		paramsInput.category,
		paramsInput.minPrice,
		paramsInput.maxPrice,
		paramsInput.inStock,
		paramsInput.onSale,
	]);

	return { products, pagination, loading, error };
};
