import backet from '@/assets/icons/backet.svg';
import { useProducts } from '@/shared/hooks/useProducts';
import { useCartStore } from '@/shared/stores/useCartStore';
import { useUIStore } from '@/shared/stores/useUIStore';
import style from './ButtonMobile.module.scss';

export const ButtonMobile = () => {
	const { openCart } = useUIStore();
	const { products } = useProducts();
	const totalPrice = useCartStore((state) => state.getTotalPrice(products));
	return (
		<div className={style.fixed}>
			<button className={style.button} onClick={openCart}>
				<img src={backet} alt="Cart" />

				<span className={style.price}>${totalPrice.toFixed(2)}</span>
			</button>
		</div>
	);
};
