import { Link } from 'react-router-dom';
import { LuUser } from 'react-icons/lu';
import { SlBasket } from 'react-icons/sl';
import { useCartStore } from '@/shared/stores/useCartStore';
import { useUIStore } from '@/shared/stores/useUIStore';
import { useProducts } from '@/shared/hooks/useProducts';

import logo from '@/assets/icons/logo.svg';
import style from './Header.module.scss';

export const Header = () => {
	const { openCart } = useUIStore();
	const { products } = useProducts();
	const totalPrice = useCartStore((state) => state.getTotalPrice(products));

	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<div className={style.logo__container}>
					<Link to="/" className={style.header__burger}>
						<span></span>
						<span></span>
					</Link>

					<Link to="/">
						<img className={style.logo} src={logo} alt="Verda logo" />
					</Link>
				</div>

				<nav className={style.navigation}>
					<Link to="/catalog">Catalog</Link>
					<Link to="/about">About</Link>
					<Link to="/delivery">Delivery</Link>
				</nav>

				<div className={style.buttons}>
					<button className={style.buttons__button_sign}>
						<LuUser />
						<span className={style.buttons__button_sign__price}>
							${totalPrice.toFixed(2)}
						</span>
					</button>

					<button className={style.buttons__button_cart} onClick={openCart}>
						<SlBasket />
						<span>Cart</span>
					</button>
				</div>
			</div>
		</header>
	);
};
