import { useEffect, useState, useRef } from 'react';
import { getSlides } from '@/shared/api/getSlides';
import { SliderLayout } from './components/SliderLayout';

export const Slider = () => {
	const [slides, setSlides] = useState([]);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	useEffect(() => {
		const loadSlides = async () => {
			try {
				const data = await getSlides();
				setSlides(data);
			} catch (error) {
				console.error(error);
			}
		};

		loadSlides();
	}, []);
	return <SliderLayout slides={slides} prevRef={prevRef} nextRef={nextRef} />;
};
