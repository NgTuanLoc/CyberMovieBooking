import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMovieBanner, getMovieList } from './movieThunk';

import { IMovieBanner, IMovie } from '../../@types';
interface IMovieSlice {
	isLoading: boolean;
	movieBanner: IMovieBanner[];
	movieList: IMovie[];
	error: any;
}

const initialState: IMovieSlice = {
	isLoading: false,
	movieBanner: [],
	movieList: [],
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
			})
			.addCase(getMovieList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMovieList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.movieList = payload;
			})
			.addCase(getMovieList.rejected, (state, { payload }) => {
				state.error = payload;
			});
	},
});

export default counterSlice.reducer;
