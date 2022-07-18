import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IMovie } from '../@types';
import Card from './Card';
export interface IMovieList {
	movieList: IMovie[];
}

const MovieList = ({ movieList }: IMovieList) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		rows: 2,
		slidesToScroll: 1,
		arrows: true,
		className: 'center',
	};

	return (
		<Container>
			<Content {...settings}>
				{movieList.map((movie) => {
					const { maPhim, tenPhim, trailer, hinhAnh } = movie;
					return (
						<Card
							key={maPhim}
							image={hinhAnh}
							link1={trailer}
							title={tenPhim}
						/>
					);
				})}
			</Content>
		</Container>
	);
};

const Container = styled.section`
	margin: 5rem auto;
	max-width: 70vw;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Content = styled(Slider)`
	width: 100%;
	height: 100%;

	button {
		width: 40px;
		height: 40px;
	}

	.slick-prev {
		left: -8rem;
	}
	.slick-next {
		right: -7rem;
	}

	button::before {
		font-size: 5rem;
	}
`;

export default MovieList;
