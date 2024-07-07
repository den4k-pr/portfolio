import { configureStore } from '@reduxjs/toolkit';
import chooseCategoryReducer from './slices/chooseCategory';

const store = configureStore({
    reducer: {
        value: chooseCategoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
