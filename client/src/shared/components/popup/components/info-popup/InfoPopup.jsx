import { useState } from 'react';
import { DES, ADD, REV } from '@/constants/constants';
import { Description } from './tabs/description/Description';
import { Additional } from './tabs/additional/Additional';
import { Reviews } from './tabs/reviews/Reviews';
import style from './InfoPopup.module.scss';

export const InfoPopup = ({ selectedProduct }) => {
	const [activeTab, setActiveTab] = useState(DES);
	const [rating, setRating] = useState(0);

	const tabs = [
		{
			id: DES,
			label: 'Description',
		},
		{
			id: ADD,
			label: 'Additional',
		},
		{
			id: REV,
			label: `Reviews (${selectedProduct?.reviews?.length || 0})`,
		},
	];
	const tabContent = {
		[DES]: <Description selectedProduct={selectedProduct} />,
		[ADD]: <Additional selectedProduct={selectedProduct} />,
		[REV]: (
			<Reviews
				selectedProduct={selectedProduct}
				rating={rating}
				setRating={setRating}
			/>
		),
	};

	return (
		<div className={style.popupInfo}>
			<div className={style.nav}>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						className={`${style.navButton} ${
							activeTab === tab.id ? style.active : ''
						}`}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className={style.content}>{tabContent[activeTab]}</div>
		</div>
	);
};
