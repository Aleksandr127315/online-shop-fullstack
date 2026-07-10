import { Slider } from './components/slider/Slider';
import { ShopTheLatest } from './components/shop-tehe-latest/ShpoTheLatest';
import { ProductCart } from '../../shared/components/product-card/ProductCard';
import { useProducts } from '@/shared/hooks/useProducts';
import { Loader } from '@/shared/components/loader/Loader';
import { Error } from '@/shared/components/error/Error';

export const Home = () => {
	const { products, loading, error } = useProducts({
		page: 1,
		pageSize: 100,
		sort: 'createdAt:desc',
	});
	return (
		<div className="layout">
			<Slider />
			<ShopTheLatest />
			{loading ? (
				<Loader />
			) : error ? (
				<Error message={error} />
			) : (
				<ProductCart products={products} />
			)}
		</div>
	);
};
