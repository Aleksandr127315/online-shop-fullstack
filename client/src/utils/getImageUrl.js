import { BASE_URL } from '@/constants/constants';

export function getImageUrl(product) {
	return product.image?.url ? BASE_URL + product.image?.url : '';
}
