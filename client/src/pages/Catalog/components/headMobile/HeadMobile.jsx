import left from '@/assets/icons/arrow-left.svg';
import hamburger from '@/assets/icons/hamburger-m.svg';
import style from './HeadMobile.module.scss';

export const HeadMobile = () => {
	return (
		<div className={style.header}>
			<button className={style.button}>
				<img src={left} alt="Back" />
			</button>

			<h1 className={style.title}>All products</h1>

			<button className={style.button}>
				<img src={hamburger} alt="Menu" />
			</button>
		</div>
	);
};
