import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const bookingSlice = createSlice({
	name: 'booking',
	initialState,
	reducers: {
		hello: () => {
			console.log('hello');
		},
	},
});

export const { hello } = bookingSlice.actions;

export default bookingSlice.reducer;
