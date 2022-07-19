import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMovieBanner, getMovieList } from './movieThunk';

import { IMovieBanner, IMovie } from '../../@types';
interface IMovieSlice {
	isLoading: boolean;
	movieBanner: IMovieBanner[];
	movieList: IMovie[];
	trailerPopup: { isOpen: boolean; url: string };
	error: any;
}

const initialState: IMovieSlice = {
	isLoading: false,
	movieBanner: [],
	movieList: [],
	trailerPopup: {
		isOpen: false,
		url: 'https://www.youtube.com/watch?v=QT-tIjW88d0',
	},
	error: '',
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		showTrailer: (state: IMovieSlice, action: PayloadAction<string>) => {
			state.trailerPopup.isOpen = true;
			state.trailerPopup.url = action.payload;
		},
		hideTrailer: (state: IMovieSlice) => {
			state.trailerPopup.isOpen = false;
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

export const { showTrailer, hideTrailer } = movieSlice.actions;

export default movieSlice.reducer;
