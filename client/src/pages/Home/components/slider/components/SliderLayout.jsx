import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { TIME_FOR_AUTOSCROLING } from '@/constants/constants';
import arrowRight from '@/assets/icons/arrow-right.svg';
import arrowLeft from '@/assets/icons/arrow-left.svg';

import style from './SliderLayout.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SliderLayout = ({ slides, prevRef, nextRef }) => {
	return (
		<div className={style.body_berry}>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				loop={true}
				slidesPerView={1}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: TIME_FOR_AUTOSCROLING,
					disableOnInteraction: false,
				}}
				onBeforeInit={(swiper) => {
					if (typeof swiper.params.navigation !== 'boolean') {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
					}
				}}
				className={style.swiper}
			>
				{slides.map((item) => (
					<SwiperSlide key={item.id}>
						<div className={style.swiper_slide}>
							<img
								src={item?.desktopImage || ''}
								alt={item?.title || ''}
								className={style.body_berry__image}
							/>

							<div className={style.body_berry__overlay}>
								<div className={style.body_berry__info}>
									<h1 className={style.body_berry__title}>
										{item?.title || ''}
									</h1>

									<p className={style.body_berry__text}>
										{item?.description || ''}
									</p>

									<button className={style.body_berry__button}>
										Shop now
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<button
				className={`${style.body_berry__arrow} ${style['body_berry__arrow--left']}`}
				ref={prevRef}
			>
				<img src={arrowLeft} alt="Previous slide" />
			</button>

			<button
				className={`${style.body_berry__arrow} ${style['body_berry__arrow--right']} `}
				ref={nextRef}
			>
				<img src={arrowRight} alt="Next slide" />
			</button>
		</div>
	);
};
