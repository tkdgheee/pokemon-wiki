import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice, flipSlice } from "./silce";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        favorite: favoriteSlice.reducer,
        flip: flipSlice.reducer
    }
})