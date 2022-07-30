import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMovieShowTime } from './cinemaThunk';
import { CinemaBrand } from '../../@types';

interface ICinemaSlice {
	isLoading: boolean;
	cinemaSchedule: CinemaBrand[];
	error: any;
}

const initialState: ICinemaSlice = {
	error: '',
	isLoading: true,
	cinemaSchedule: [],
};

export const cinemaSlice = createSlice({
	name: 'cinema',
	initialState,
	reducers: {
		hello: () => {
			console.log('hello');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieShowTime.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMovieShowTime.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.cinemaSchedule = payload;
			})
			.addCase(getMovieShowTime.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const { hello } = cinemaSlice.actions;

export default cinemaSlice.reducer;
