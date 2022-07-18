import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMovie, IMovieBanner } from '../../@types';

import { axiosInstance } from '../../utils/axios';

export const getMovieBanner = createAsyncThunk<IMovieBanner[]>(
	'movie/getMovieBanner',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: '/api/QuanLyPhim/LayDanhSachBanner',
			};

			const response = await axiosInstance.request(params);
			return response.data.content;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.statusText);
		}
	}
);

export const getMovieList = createAsyncThunk<IMovie[]>(
	'movie/getMovieList',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${process.env.REACT_APP_GROUP_ID}`,
			};

			const response = await axiosInstance.request(params);
			return response.data.content;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.statusText);
		}
	}
);
