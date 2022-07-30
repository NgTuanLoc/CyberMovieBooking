import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import movieReducer from '../features/Movies/movieSlice';
import cinemaReducer from '../features/Cinema/cinemaSlice';
import bookingReducer from '../features/Booking/bookingSlice';

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		cinema: cinemaReducer,
		booking: bookingReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
