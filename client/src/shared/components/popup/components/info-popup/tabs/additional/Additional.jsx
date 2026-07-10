import { ADD } from '@/constants/constants';
import style from './Additional.module.scss';

export const Additional = ({ selectedProduct }) => {
	return (
		<div className={style.add} data-tab={ADD}>
			<div className={style.string}>
				<span className={style.head}>Nutritional value:</span>

				<p
					className={`${style.text} ${style.nutritionalValue}`}
				>{`Proteins - ${selectedProduct?.proteins} g, fats - ${selectedProduct?.fats} g, carbohydrates - ${selectedProduct?.cabrohydrates} g; per 100 g.`}</p>
			</div>

			<div className={style.string}>
				<span className={style.head}>Energy value:</span>

				<p
					className={`${style.text} ${style.energyValue}`}
				>{`${selectedProduct?.kJ}kJ /${selectedProduct?.kCal}kcal`}</p>
			</div>

			<div className={style.string}>
				<span className={style.head}>Shelf life:</span>

				<p className={`${style.text} ${style.shelfLife}`}>5 days.</p>
			</div>

			<div className={style.string}>
				<span className={style.head}>Storage conditions:</span>

				<p className={`${style.text} ${style.storageConditions}`}>
					{selectedProduct?.storageConditions}
				</p>
			</div>

			<div className={style.string}>
				<span className={style.head}>Packaging:</span>

				<p className={`${style.text} ${style.packaging}`}>
					{selectedProduct?.packaging}
				</p>
			</div>
		</div>
	);
};
