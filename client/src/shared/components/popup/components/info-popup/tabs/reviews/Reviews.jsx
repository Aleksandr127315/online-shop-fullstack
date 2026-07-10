import star from '../../../../../../../assets/icons/star-filled.svg';
import starInActive from '../../../../../../../assets/icons/star-filled (2).svg';
import { REV } from '@/constants/constants';
import { renderStars } from '@/utils/renderStars';
import style from './Reviews.module.scss';

export const Reviews = ({ selectedProduct, setRating, rating }) => {
	return (
		<div className={style.rev} data-tab={REV}>
			<ul className={style.commentsContainer}>
				{selectedProduct?.reviews.map((review) => {
					return (
						<li className={style.comment} key={review.id}>
							<div className={style.commentHead}>
								<div className={style.name}>{review.author}</div>
								<ul className={style.grade}>
									{renderStars(review.rate)}
								</ul>
							</div>
							<p className={style.commentText}>{review.text}</p>
						</li>
					);
				})}
			</ul>

			<div className={style.form}>
				<h2 className={style.formHead}>Add a Review</h2>

				<form action="form__comment" className={style.formSend}>
					<div className={style.inputName}>
						<label htmlFor="name" className={style.inputLabel}>
							Name
						</label>

						<input
							id="name"
							name="name"
							type="text"
							className={style.input}
							placeholder="John Smith"
						/>
					</div>

					<div className={style.inputComment}>
						<label htmlFor="comment" className={style.inputLabel}>
							Your Review
						</label>

						<input
							id="comment"
							name="comment"
							type="text"
							className={style.input}
							placeholder="Write about your impressions"
						/>
					</div>

					<ul className={style.grade}>
						{Array.from({ length: 5 }, (_, i) => (
							<li key={i}>
								<img
									src={i + 1 <= rating ? star : starInActive}
									alt=""
									onClick={() => setRating(i + 1)}
								/>
							</li>
						))}
					</ul>

					<div className={style.checkbox}>
						<input
							type="checkbox"
							id="form__checkbox"
							className={style.checkboxInput}
						/>

						<p className={style.checkboxText}>
							Save my name, and website in this browser for the next time I
							comment
						</p>
					</div>

					<button type="submit" className={style.btn}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
