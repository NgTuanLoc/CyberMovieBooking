import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMovieBanner } from '../../@types';

import { axiosInstance, IAxiosParams } from '../../utils/axios';

export const getMovieBanner = createAsyncThunk<IMovieBanner[], IAxiosParams>(
	'movie/getMovieBanner',
	async (params: IAxiosParams, thunkAPI) => {
		try {
			const response = await axiosInstance.request(params);
			return response.data.content;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.statusText);
		}
	}
);
