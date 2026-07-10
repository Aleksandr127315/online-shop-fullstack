import frame from '@/assets/images/image.png';
import { CartItem } from './componets/cart-item/CartItem';
import { getFinalPrice } from '@/utils/getFinalPrice';
import { useCartStore } from '@/shared/stores/useCartStore';
import style from './Cart.module.scss';

export const Cart = ({ onClose }) => {
	const cart = useCartStore((state) => state.cart);
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const deleteFromCart = useCartStore((state) => state.deleteFromCart);
	const totalPrice = useCartStore((state) => state.getTotalPrice());

	return (
		<section className={style.cart}>
			<div className={style.header}>
				<h4>Shopping bag</h4>
				<button onClick={onClose}>✕</button>
			</div>

			<div className={style.basket}>
				{cart.length === 0 ? (
					<div className={`${style.basketList} ${style.empty}`}>
						<img src={frame} width={150} height={150} />
						<div className={style.text}>The shopping cart is empty</div>
					</div>
				) : (
					<div className={style.basketList}>
						{cart.map((item) => (
							<CartItem
								key={item.id}
								item={item}
								onAdd={() => addToCart(item)}
								onRemove={() => removeFromCart(item.id)}
								onDelete={() => deleteFromCart(item.id)}
								isDisabled={item.count >= item.maxStock}
								finalPrice={
									(item.discountPercent
										? item.price -
											(item.price * item.discountPercent) / 100
										: item.price) * item.count
								}
							/>
						))}
					</div>
				)}
			</div>

			<div className={style.footer}>
				<div className={style.total}>
					<span className={style.totalLabel}>Subtotal</span>
					<span className={style.totalPrice}>${totalPrice.toFixed(2)}</span>
				</div>

				<button className={style.button}>Continue</button>
			</div>
		</section>
	);
};
