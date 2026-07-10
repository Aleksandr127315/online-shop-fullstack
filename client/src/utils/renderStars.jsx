import star from '../assets/icons/star-filled.svg';
import starInActive from '../assets/icons/star-filled (2).svg';
import { MAXSTARS } from '@/constants/constants';

export function renderStars(rating) {
	let stars = [];

	for (let i = 1; i <= MAXSTARS; i++) {
		stars.push(
			<li key={i}>
				<img src={i <= rating ? star : starInActive} alt="" />
			</li>,
		);
	}

	return stars;
}
