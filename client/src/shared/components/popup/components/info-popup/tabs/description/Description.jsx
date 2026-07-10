import { DES } from '@/constants/constants';
import style from './Description.module.scss';

export const Description = ({ selectedProduct }) => {
	return (
		<div className={style.dis} data-tab={DES}>
			<div className={style.string}>
				<span className={style.head}>Price:</span>

				<p className={style.text}>
					The product is weighted, the final cost will be calculated according
					to its weight.
				</p>
			</div>

			<div className={style.string}>
				<span className={style.head}>Weight:</span>

				<p className={`${style.text} ${style.weight}`}>
					{selectedProduct?.weight} g
				</p>
			</div>

			<div className={style.string}>
				<span className={style.head}>Important:</span>

				<p className={`${style.text} ${style.important}`}>
					{selectedProduct?.importantNote}
				</p>
			</div>
		</div>
	);
};
