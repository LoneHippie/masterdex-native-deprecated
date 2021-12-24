import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { singlePokemonQuery, pokemonGenQuery, pokemonTypeQuery } from '../api/queries';

export const updateFromQuery = createAsyncThunk('results', async (req) => {
    
    const { query, queryType } = req;

    switch(true) {
        case queryType === 'search':
            return singlePokemonQuery(query);
        case queryType === 'gen':
            return pokemonGenQuery(query);
        case queryType === 'type':
            return pokemonTypeQuery(query);
        default:
            return null
    }
})

const initialResultState = {
    results: {
        loading: true,
        data: [],
        error: {}
    }
}

export const resultSlice = createSlice({
    name: "results",
    initialState: initialResultState,
    reducers: {
        updateResults: (state, action) => {
            state.loading = true;
            if (state.results.length) { state.results = [] };

            state.results = action.payload;
            state.loading = false;
            return state;
        }
    },
    extraReducers: {
        [updateFromQuery.pending.type]: (state, action) => {
            state.results = {
                loading: true,
                data: [],
                error: {}
            }
        },
        [updateFromQuery.fulfilled.type]: (state, action) => {
            state.results = {
                loading: false,
                data: action.payload,
                error: {}
            }
        },
        [updateFromQuery.rejected.type]: (state, action) => {
            state.results = {
                loading: false,
                data: [],
                error: action.payload
            }
        }
    }
});

export const { updateResults } = resultSlice.actions;

export default resultSlice.reducer;