import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { axiosInstance, IAxiosParams } from '../../utils/axios';

interface IMovie {
	isLoading: boolean;
	movieBanner: any;
	error: any;
}

const initialState: IMovie = {
	isLoading: false,
	movieBanner: [],
	error: '',
};

export const getMovieBanner = createAsyncThunk<any, IAxiosParams>(
	'movie/getMovieBanner',
	async (params, thunkAPI) => {
		try {
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		hello: () => {
			console.log('Hello');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieBanner.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMovieBanner.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.movieBanner = payload;
			})
			.addCase(getMovieBanner.rejected, (state, { payload }) => {
				state.error = payload;
			});
	},
});

export default counterSlice.reducer;
