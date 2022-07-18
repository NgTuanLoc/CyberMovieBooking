import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Banner } from '../atoms';

import { IMovieBanner } from '../../@types';

export interface ICarousel {
	carouselItem: IMovieBanner[];
}

const Carousel = ({ carouselItem }: ICarousel) => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			{carouselItem.map((item) => {
				return <Banner key={item.maBanner} {...item} />;
			})}
		</Slider>
	);
};

export default Carousel;
