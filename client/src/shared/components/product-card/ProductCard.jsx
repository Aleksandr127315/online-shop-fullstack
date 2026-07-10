import { getProductState } from '@/utils/getProductState';
import { getFinalPrice } from '@/utils/getFinalPrice';
import { getImageUrl } from '@/utils/getImageUrl';
import { useCartStore } from '@/shared/stores/useCartStore';
import { useUIStore } from '@/shared/stores/useUIStore';

import minus from '@/assets/icons/minus.svg';
import plusB from '@/assets/icons/plus-b.svg';
import plusW from '@/assets/icons/plus-w.svg';
import style from './productCard.module.scss';

export const ProductCart = ({ variant = 'home', products }) => {
	const { openPopup } = useUIStore();
	const cart = useCartStore((state) => state.cart);
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	return (
		<section
			className={`${style.product} ${
				variant === 'catalog' ? style['product--catalog'] : style['product--home']
			}`}
		>
			{products.map((product) => {
				const finalPrice = getFinalPrice(product);
				const imageUrl = getImageUrl(product);
				const { countInCart, isSoldOut, isInCart } = getProductState(
					product,
					cart,
				);
				return (
					<article className={style.product_card} key={product.id}>
						<div
							className={`${style['product_card__image-wrapper']} ${
								isInCart
									? style['product_card__image-wrapper--overlay']
									: ''
							}`}
							data-id={product.id}
							onClick={() => {
								openPopup(product);
							}}
						>
							<img src={imageUrl} className={style.product_card__image} />
							{product.discountPercent ? (
								<div className={style.product_card__sale}>
									<span>-${product.discountPercent}%</span>
								</div>
							) : null}
							{isInCart && (
								<>
									<div className={style.product_card__count}>
										{countInCart}
									</div>
									{isSoldOut && (
										<div className={style.product_card__sold}>
											No more
										</div>
									)}
								</>
							)}
						</div>

						<div className={style.product_card__body}>
							<h3 className={style.title}>{product.title}</h3>
							<p className={style.count}>{product.weight} g</p>

							<button
								className={`${style['product_card__button']} ${
									isInCart ? style['product_card__button--green'] : ''
								}`}
								data-id={product.id}
								disabled={isSoldOut}
							>
								{isInCart ? (
									<img
										src={minus}
										data-action="minus"
										onClick={() => {
											removeFromCart(product.id);
											console.log('minus');
										}}
									/>
								) : null}
								<div className={style.product_card__price}>
									$ {finalPrice.toFixed(2)}
								</div>

								<img
									src={isInCart ? plusW : plusB}
									data-action="plus"
									className={isSoldOut ? 'disabled-icon' : ''}
									onClick={() => addToCart(product)}
								/>
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};
