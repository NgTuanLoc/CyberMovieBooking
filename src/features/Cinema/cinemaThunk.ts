import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { CinemaBrand } from '../../@types';

const getMovieShowTime = createAsyncThunk<CinemaBrand[]>(
	'cinema/getShowtime',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${process.env.REACT_APP_GROUP_ID}`,
			};
			const response = await axiosInstance.request(params);

			return response.data.content;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.statusText);
		}
	}
);

export { getMovieShowTime };
