import { URL_API_INFO_SLIDER_IMAGE } from '@/constants/constants';

export async function getSlides() {
	const res = await fetch(URL_API_INFO_SLIDER_IMAGE);
	if (!res.ok) {
		throw new Error(`Ошибка сервера:${res.status}`);
	}
	const data = await res.json();

	return data.data;
}
