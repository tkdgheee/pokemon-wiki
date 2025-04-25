import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./silce";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    }
})