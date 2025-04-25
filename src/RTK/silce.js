import { createSlice } from "@reduxjs/toolkit";
import { axiosMultiplePokemonByID } from "./Thunk";

export const pokemonSlice = createSlice({
    name:'pokemon',
    initialState:{
        data: [],
        loading: true,
    },
    reducers:{  },
    extraReducers: (builder) => {
        builder
        .addCase(axiosMultiplePokemonByID.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(axiosMultiplePokemonByID.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(axiosMultiplePokemonByID.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    }
}

)