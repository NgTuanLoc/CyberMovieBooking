/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMovieBanner } from '../../features/Movies/movieThunk';
import { IAxiosParams } from '../../utils/axios';

import { Carousel } from '../../components/molecules';
import styled from 'styled-components';

const test: IAxiosParams = {
	method: 'GET',
	url: '/api/QuanLyPhim/LayDanhSachBanner',
	data: {
		taiKhoan: 'HieuMT3',
		matKhau: '1234567890',
	},
};
const Home = () => {
	const dispatch = useAppDispatch();
	const { isLoading, movieBanner } = useAppSelector((store) => store.movie);

	useEffect(() => {
		dispatch(getMovieBanner(test));
	}, []);

	return (
		<Container>
			<Carousel carouselItem={movieBanner} />
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

export default Home;
