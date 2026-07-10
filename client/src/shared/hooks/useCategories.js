import { useEffect, useState } from 'react';
import { ENDPOINT_IN_CATEGORIES } from '@/constants/constants';

export const useCategories = () => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const load = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await fetch(ENDPOINT_IN_CATEGORIES);
				if (!res.ok) {
					throw new Error(`Ошибка сервера: ${res.status}`);
				}
				const data = await res.json();
				setCategories(data.data);
			} catch (e) {
				setError(e.message);
				setCategories([]);
			} finally {
				setLoading(false);
			}
		};
		load();
	}, []);

	return { categories, error, loading };
};
