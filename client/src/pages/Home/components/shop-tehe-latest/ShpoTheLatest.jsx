import style from './ShpoTheLatest.module.scss';

export const ShopTheLatest = () => {
	return (
		<div className={style.info_shop}>
			<div className={style.info_shop__header}>Shop The Latest</div>
			<p className={style.info_shop__text}>
				Our freshest arrivals — straight from the farm this week. Grass-fed meats,
				free-range eggs, handcrafted cheeses, and more, all sustainably raised and
				packed with care.
			</p>
			<a href="/Catalog" className={style.info_shop__link}>
				{' '}
				View All &rarr;
			</a>
		</div>
	);
};
