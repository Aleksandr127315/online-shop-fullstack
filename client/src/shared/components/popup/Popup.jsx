import { useState } from 'react';
import { HeaderPopup } from './components/header-popup/HeaderPopup';
import { InfoPopup } from './components/info-popup/InfoPopup';
import { SimilarPopup } from './components/similar-popup/SimilarPopup';

import style from './Popup.module.scss';

export const Popup = ({ selectedProduct, products, closePopup }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	if (!selectedProduct) return null;
	const images = [
		selectedProduct.image?.url,
		...(selectedProduct.additionalImages?.map((img) => img.url) || []),
	].filter(Boolean);

	return (
		<section className={`${style.popup}  ${style.active}`}>
			<HeaderPopup
				images={images}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				selectedProduct={selectedProduct}
				closePopup={closePopup}
			/>
			<InfoPopup selectedProduct={selectedProduct} />
			<SimilarPopup products={products} selectedProduct={selectedProduct} />
		</section>
	);
};
