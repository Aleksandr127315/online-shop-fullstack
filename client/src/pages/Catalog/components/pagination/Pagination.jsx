import right from '@/assets/icons/chevron-right.svg';
import left from '@/assets/icons/chevron-left.svg';
import style from './Pagination.module.scss';

export const Pagination = ({ page, pageCount, onPageChange }) => {
	const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

	return (
		<>
			{pageCount > 1 && (
				<nav className={style.pagination}>
					<div
						className={style.switch}
						onClick={() => page > 1 && onPageChange(page - 1)}
					>
						<img src={left} alt="previous" />
						Previous
					</div>

					{pages.map((p) => (
						<div
							key={p}
							className={`${style.switch} ${page === p ? style.active : ''}`}
							onClick={() => onPageChange(p)}
						>
							{p}
						</div>
					))}

					<div
						className={style.switch}
						onClick={() => page < pageCount && onPageChange(page + 1)}
					>
						Next
						<img src={right} alt="next" />
					</div>
				</nav>
			)}
		</>
	);
};
