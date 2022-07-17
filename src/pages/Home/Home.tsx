/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMovieBanner } from '../../features/Movies/movieSlice';
import { IAxiosParams } from '../../utils/axios';

const test: IAxiosParams = {
	method: 'POST',
	url: '/api/QuanLyNguoiDung/DangNhap',
	data: {
		taiKhoan: 'HieuMT3',
		matKhau: '1234567890',
	},
};
const Home = () => {
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((store) => store.movie);

	useEffect(() => {
		dispatch(getMovieBanner(test));
	}, []);

	return <div>Home</div>;
};

export default Home;
