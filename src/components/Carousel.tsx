import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner from './Banner';

import { IMovieBanner } from '../@types';
import styled from 'styled-components';

export interface ICarousel {
	carouselItem: IMovieBanner[];
}

const Carousel = ({ carouselItem }: ICarousel) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<Container>
			<Slider className='carousel' {...settings}>
				{carouselItem.map((item) => {
					return <Banner key={item.maBanner} {...item} />;
				})}
			</Slider>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin-bottom: 5rem;
	* {
		min-height: 0;
		min-width: 0;
	}

	.carousel {
		display: block;
		width: 100vw;
		height: 100vh;

		.slick-dots {
			bottom: 10rem;

			li {
				font-size: 3rem;
				margin-inline: 2rem;
				button::before {
					font-size: 3rem;
					color: white;
				}
			}
		}
	}
`;

export default Carousel;
