import { ProductCart } from '@/shared/components/product-card/ProductCard';
import { FiltersAside } from './components/filtersAside/FiltersAside';
import { ProductSortSelect } from './components/productSortSelect/ProductSortSelect';
import { Pagination } from './components/pagination/Pagination';
import { ButtonMobile } from './components/buttonMobile/ButtonMobile';
import { HeadMobile } from './components/headMobile/HeadMobile';
import { useProducts } from '@/shared/hooks/useProducts';
import { useCatalogStore } from '@/shared/stores/useCatalogStore';
import { useCategories } from '@/shared/hooks/useCategories';
import { Loader } from '@/shared/components/loader/Loader';
import { Error } from '@/shared/components/error/Error';
import { EmptyState } from '@/shared/components/emptyState/EmptyState';

import style from './Catalog.module.scss';

export const Catalog = () => {
	const page = useCatalogStore((state) => state.page);
	const setPage = useCatalogStore((state) => state.setPage);

	const pageSize = useCatalogStore((state) => state.pageSize);
	const sort = useCatalogStore((state) => state.sort);

	const category = useCatalogStore((state) => state.category);
	const minPrice = useCatalogStore((state) => state.minPrice);
	const maxPrice = useCatalogStore((state) => state.maxPrice);
	const inStock = useCatalogStore((state) => state.inStock);
	const onSale = useCatalogStore((state) => state.onSale);

	const { products, pagination, loading, error } = useProducts({
		page,
		pageSize,
		sort,
		category,
		minPrice,
		maxPrice,
		inStock,
		onSale,
	});
	const { categories } = useCategories();

	return (
		<>
			<HeadMobile />
			<div className={style.catalog}>
				<aside className={style.left}>
					<FiltersAside categories={categories} />
				</aside>
				<section className={style.right}>
					<div className={style.header}>
						<div className={style.title}>All products</div>
						<ProductSortSelect />
					</div>

					<div className={style.content}>
						{loading ? (
							<Loader />
						) : error ? (
							<Error message={error} />
						) : products.length === 0 ? (
							<EmptyState />
						) : (
							<ProductCart products={products} variant="catalog" />
						)}
					</div>

					<div className={style.footer}>
						<Pagination
							page={page}
							pageCount={pagination?.pageCount}
							onPageChange={setPage}
						/>
					</div>
				</section>
			</div>
			<ButtonMobile />
		</>
	);
};
