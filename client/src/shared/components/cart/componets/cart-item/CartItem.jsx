import { BASE_URL } from '@/constants/constants';
import style from './CartItem.module.scss';

export const CartItem = ({ item, onAdd, onRemove, onDelete, isDisabled, finalPrice }) => {
	return (
		<div className={style.product__container}>
			<div className={style.imageWrapper}>
				<img
					src={BASE_URL + item.image.url}
					alt={item.title}
					width={150}
					height={150}
				/>

				{item.discountPercent ? (
					<div className={style.sale}>
						<span>-{item.discountPercent}%</span>
					</div>
				) : (
					''
				)}
			</div>

			<div className={style.product__info}>
				<div>
					<div className={style.product__title}>
						{item.title}

						<button
							className={style.product__title__delete}
							onClick={() => onDelete(item.id)}
						>
							✕
						</button>
					</div>

					<div className={style.product__count}>{item.weight} g</div>
				</div>

				<div className={style.product__info__footer}>
					<button className={style.count}>
						<button onClick={() => onRemove(item.id)}>-</button>

						{item.count}

						<button onClick={() => onAdd(item.id)} disabled={isDisabled}>
							+
						</button>
					</button>

					<div className={style.price}>
						{item.discountPercent ? (
							<span className={style.price__old}>
								${(item.price * item.count).toFixed(2)}
							</span>
						) : (
							''
						)}

						<span className={style.price__new}>${finalPrice.toFixed(2)}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
