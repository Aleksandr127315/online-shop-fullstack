import { BASE_URL } from '@/constants/constants';
import { useUIStore } from '@/shared/stores/useUIStore';
import plusB from '../../../../../assets/icons/plus-b.svg';
import style from './SimilarPopup.module.scss';

export const SimilarPopup = ({ selectedProduct, products }) => {
	const { openPopup } = useUIStore();

	const currentCategory = selectedProduct?.categories?.[0]?.value;

	const relatedProducts = products.filter((item) => {
		return (
			item.id !== selectedProduct.id &&
			item.categories.some((category) => category.value === currentCategory)
		);
	});

	return (
		<div className={style.popupFooter}>
			<h2 className={style.head}>Similar Items</h2>

			<ul className={style.products}>
				{relatedProducts.map((item) => {
					return (
						<li key={item.id}>
							<article className={style.product}>
								<img
									src={BASE_URL + item.imageUrl}
									alt={item.title}
									width="282px"
									height="282px"
									className={style.productImage}
									onClick={() => {
										openPopup(item);
									}}
								/>
								<div className={style.productInfo}>
									<h2 className={style.name}>{item.title}</h2>
									<div className={style.count}>{item.weight}g</div>
									<button className={style.btn}>
										<span>
											{item.itemsInStock <= 0
												? 'Товар отсутсвует на складе'
												: `${item.price}`}
										</span>
										{item.itemsInStock > 0 && (
											<img
												src={plusB}
												alt=""
												className={style.plus}
											/>
										)}
									</button>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
