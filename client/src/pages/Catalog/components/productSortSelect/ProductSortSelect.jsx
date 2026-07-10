import { useState } from 'react';
import { useCatalogStore } from '@/shared/stores/useCatalogStore';
import sortIcon from '@/assets/icons/sort.svg';
import filter from '@/assets/icons/filter.svg';
import shevron from '@/assets/icons/chevron-down.svg';
import style from './ProductSortSelect.module.scss';

const SORT_OPTIONS = [
	{
		label: 'By popularity',
		value: 'createdAt:desc', // или rating:desc
	},
	{
		label: 'Cheap first',
		value: 'price:asc',
	},
	{
		label: 'Expensive first',
		value: 'price:desc',
	},
];

export const ProductSortSelect = () => {
	const [open, setOpen] = useState(false);

	const sort = useCatalogStore((state) => state.sort);
	const setSort = useCatalogStore((state) => state.setSort);

	const currentSort =
		SORT_OPTIONS.find((item) => item.value === sort) ?? SORT_OPTIONS[0];

	return (
		<div className={style.wrapper}>
			<div className={`${style.select} ${open ? style.open : ''}`}>
				<div className={style.selected} onClick={() => setOpen((prev) => !prev)}>
					<div className={style.left}>
						<img src={sortIcon} alt="sort" className={style.icon} />

						<span>{currentSort.label}</span>
					</div>

					<img src={shevron} alt="arrow" className={style.arrow} />
				</div>

				<ul className={style.list}>
					{SORT_OPTIONS.map((option) => (
						<li
							key={option.value}
							className={style.item}
							onClick={() => {
								setSort(option.value);
								setOpen(false);
							}}
						>
							{option.label}
						</li>
					))}
				</ul>
			</div>

			<div className={style.filter}>
				<img src={filter} alt="filter" />
			</div>
		</div>
	);
};
