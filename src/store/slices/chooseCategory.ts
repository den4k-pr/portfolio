import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ValueState {
    stringValue: string;
    numberValue: number;
}

const initialState: ValueState = {
    stringValue: 'All',
    numberValue: 250,
};

const chooseCategorySlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        updateValues(state, action: PayloadAction<{ stringValue: string; numberValue: number }>) {
            state.stringValue = action.payload.stringValue;
            state.numberValue = action.payload.numberValue;
        },
    },
});

export const { updateValues } = chooseCategorySlice.actions;

export const selectStringValue = (state: RootState) => state.value.stringValue;
export const selectNumberValue = (state: RootState) => state.value.numberValue;

export default chooseCategorySlice.reducer;
