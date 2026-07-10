import { useCatalogStore } from '@/shared/stores/useCatalogStore';
import styles from './FiltersAside.module.scss';

export const FiltersAside = ({ categories }) => {
	const category = useCatalogStore((state) => state.category);
	const setCategory = useCatalogStore((state) => state.setCategory);

	const minPrice = useCatalogStore((state) => state.minPrice);
	const setMinPrice = useCatalogStore((state) => state.setMinPrice);

	const maxPrice = useCatalogStore((state) => state.maxPrice);
	const setMaxPrice = useCatalogStore((state) => state.setMaxPrice);

	const onSale = useCatalogStore((state) => state.onSale);
	const setOnSale = useCatalogStore((state) => state.setOnSale);

	const inStock = useCatalogStore((state) => state.inStock);
	const setInStock = useCatalogStore((state) => state.setInStock);
	return (
		<aside className={styles.menu}>
			<nav className={styles.category}>
				<ul>
					<li
						onClick={() => setCategory(null)}
						className={!category ? styles.active : ''}
					>
						<span>All products</span>
					</li>

					{categories.map((item) => (
						<li
							key={item.id}
							onClick={() => setCategory(item.id)}
							className={category === item.id ? styles.active : ''}
						>
							<span>{item.value}</span>

							<span>{item.products.length}</span>
						</li>
					))}
				</ul>
			</nav>

			<form className={styles.filter}>
				<div className={styles.block}>
					<div>On sale</div>

					<div
						className={`${styles.flag} ${onSale ? styles.flagActive : ''}`}
						onClick={() => setOnSale(!onSale)}
					>
						<div
							className={`${styles.circle} ${onSale ? styles.circleActive : ''}`}
						/>
					</div>
				</div>

				<div className={styles.block}>
					<div>In stock</div>

					<div
						className={`${styles.flag} ${inStock ? styles.flagActive : ''}`}
						onClick={() => setInStock(!inStock)}
					>
						<div
							className={`${styles.circle} ${inStock ? styles.circleActive : ''}`}
						/>
					</div>
				</div>

				<div className={styles.block}>
					<div className={styles.price}>
						<div className={styles.priceText}>Price</div>

						<div className={styles.priceCount}>
							<input
								type="number"
								placeholder="from"
								value={minPrice ?? ''}
								onChange={(e) => setMinPrice(e.target.value)}
								className={styles.priceInput}
							/>

							<input
								type="number"
								placeholder="to"
								value={maxPrice ?? ''}
								onChange={(e) => setMaxPrice(e.target.value)}
								className={styles.priceInput}
							/>
						</div>
					</div>
				</div>
			</form>
		</aside>
	);
};
