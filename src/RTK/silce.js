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

export const favoriteSlice = createSlice({
  name:'favorite',
  initialState: [],
  reducers:{
    addToFavorite(state, action) {state.push(action.payload)},
    removeToFavorite(state, action){
      return state.filter(pokemonId => pokemonId !== action.payload)}
  }
})

export const {addToFavorite, removeToFavorite} = favoriteSlice.actions;

export const flipSlice = createSlice({
  name:'flip',
  initialState: {},
  reducers: {
    toggleFlip: (state, action) => {
      const id = action.payload;
      state[id] = !state[id]; 
    }, 
    resetFlip: () => ({}),  
  },
  }
)

export const { toggleFlip, resetFlip } = flipSlice.actions;
