import { useEffect } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Cart } from '../cart/Cart';
import { Popup } from '../popup/Popup';
import { useProducts } from '@/shared/hooks/useProducts';
import { useUIStore } from '@/shared/stores/useUIStore';
import { Outlet, useLocation } from 'react-router-dom';
import '../../../assets/styles/App.scss';

export const DefaultLayout = () => {
	const location = useLocation();
	const { products, loading, error } = useProducts();
	const { isCartOpen, popupOpen, selectedProduct, closeCart, closePopup } =
		useUIStore();

	useEffect(() => {
		document.body.dataset.route = location.pathname;
	}, [location.pathname]);
	useEffect(() => {
		if (!isCartOpen && !popupOpen) return;

		const handler = (e) => {
			if (e.key !== 'Escape') return;

			if (popupOpen) return closePopup();
			if (isCartOpen) return closeCart();
		};

		document.addEventListener('keydown', handler);

		return () => document.removeEventListener('keydown', handler);
	}, [isCartOpen, popupOpen]);
	useEffect(() => {
		document.body.style.overflow = isCartOpen || popupOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [isCartOpen, popupOpen]);
	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
			{isCartOpen && <Cart products={products} onClose={closeCart} />}

			{(isCartOpen || popupOpen) && (
				<div
					className="overlay"
					onClick={() => {
						if (popupOpen) return closePopup();
						if (isCartOpen) return closeCart();
					}}
				/>
			)}
			{popupOpen && (
				<Popup
					selectedProduct={selectedProduct}
					products={products}
					closePopup={closePopup}
				/>
			)}
		</div>
	);
};
