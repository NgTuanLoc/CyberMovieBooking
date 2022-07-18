import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMovieBanner } from './movieThunk';

import { IMovieBanner } from '../../@types';
interface IMovie {
	isLoading: boolean;
	movieBanner: IMovieBanner[];
	error: any;
}

const initialState: IMovie = {
	isLoading: false,
	movieBanner: [],
	error: '',
};

export const counterSlice = createSlice({
	name: 'movie',
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
