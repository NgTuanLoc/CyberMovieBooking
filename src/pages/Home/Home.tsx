/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMovieBanner, getMovieList } from '../../features/Movies/movieThunk';
import { getMovieShowTime } from '../../features/Cinema/cinemaThunk';

import { Carousel, MovieList, Loading, HomeMenu } from '../../components';

const Home = () => {
	const dispatch = useAppDispatch();
	const { isLoading, movieBanner, movieList } = useAppSelector(
		(store) => store.movie
	);

	useEffect(() => {
		dispatch(getMovieBanner());
		dispatch(getMovieList());
		dispatch(getMovieShowTime());
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container>
			<Carousel carouselItem={movieBanner} />
			<MovieList movieList={movieList} />
			<HomeMenu />
		</Container>
	);
};

const Container = styled.main`
	* {
		min-height: 0;
		min-width: 0;
	}
`;

export default Home;
