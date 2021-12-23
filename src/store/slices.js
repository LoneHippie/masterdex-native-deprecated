import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
    name: "results",
    initialState: [],
    reducers: {
        updateResults: (state, action) => {
            state = [];
            return state = action.payload;
        }
    }
});

export const { updateResults } = resultSlice.actions;

export default resultSlice.reducer;