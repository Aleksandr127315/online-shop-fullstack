import cross from '@/assets/icons/cross.svg';
import ccb1 from '@/assets/icons/_calc-counter-button (1).svg';
import ccb2 from '@/assets/icons/_calc-counter-button (2).svg';
import star from '@/assets/icons/star-filled.svg';
import plusW from '@/assets/icons/plus-w.svg';
import { BASE_URL } from '@/constants/constants';
import { useCartStore } from '@/shared/stores/useCartStore';
import style from './HeaderPopup.module.scss';

export const HeaderPopup = ({
	images,
	currentIndex,
	setCurrentIndex,
	selectedProduct,
	closePopup,
}) => {
	const addToCart = useCartStore((state) => state.addToCart);

	const reviews = selectedProduct.reviews || [];

	const allRate = reviews.reduce((sum, rate) => {
		return (sum += rate.rate);
	}, 0);
	const rate = reviews.length ? allRate / reviews.length : 0;

	const finalPrice = selectedProduct.discountPercent
		? selectedProduct.price -
			(selectedProduct.price * selectedProduct.discountPercent) / 100
		: selectedProduct.price;

	return (
		<>
			<button
				className={style.closed__popup}
				onClick={() => {
					closePopup();
				}}
			>
				<img src={cross} alt="" />
			</button>

			<div className={style.popup__header}>
				<div className={style.picture}>
					<img
						src={BASE_URL + images[currentIndex]}
						alt="фото"
						className={style.popup__img}
					/>

					{!!selectedProduct.discountPercent && (
						<span className={style.disc}>
							-{selectedProduct.discountPercent}%
						</span>
					)}

					<button className={style.pag__btn}>
						<img
							src={ccb2}
							alt=""
							className={style['pag__btn-left']}
							onClick={() =>
								setCurrentIndex((prev) => Math.max(prev - 1, 0))
							}
						/>

						<span className={style.counter}>
							{currentIndex + 1}/{images.length}
						</span>

						<img
							src={ccb1}
							alt=""
							className={style['pag__btn-right']}
							onClick={() =>
								setCurrentIndex((prev) =>
									Math.min(prev + 1, images.length - 1),
								)
							}
						/>
					</button>
				</div>

				<div className={style.description}>
					<div className={style.description__head}>
						<div className={style.raining}>
							<img src={star} alt="" />

							<span className={style.raining__count}>
								{rate.toFixed(2)}
							</span>

							<span className={style.spn}> {reviews.length} ratings</span>
						</div>

						<div className={style.title}>{selectedProduct.title}</div>

						<div className={style.count}></div>
					</div>

					<div className={style.description__text}>
						<strong>Description:</strong>

						<span className={style.description__text__api}>
							{selectedProduct?.description}
						</span>
					</div>

					<button className={style.description__btn}>
						{selectedProduct.itemsInStock <= 0 ? (
							' '
						) : selectedProduct.discountPercent ? (
							<span className={style.old__price}>
								{selectedProduct.price}
							</span>
						) : (
							' '
						)}
						<span className={style.new__price}>
							{selectedProduct.itemsInStock <= 0
								? 'Товар отсутсвует на складе'
								: ` $ ${finalPrice}`}
						</span>
						{selectedProduct.itemsInStock <= 0 ? (
							''
						) : (
							<img
								src={plusW}
								alt=""
								className={style.description__plus}
								onClick={() => addToCart(selectedProduct)}
							/>
						)}
					</button>
				</div>
			</div>
		</>
	);
};
