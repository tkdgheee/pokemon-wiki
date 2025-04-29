import { createSelector } from "@reduxjs/toolkit";

export const selectorPokemonById = (pokemonId) => 
    createSelector(
    state => state.pokemon.data,
    (pokemonData) => pokemonData.find((el) => el.id === pokemonId)
)

export const selectorPokemonByReg = (reg) => createSelector(
    state => state.pokemon.data,
    
    (pokemonData) => pokemonData.filter(el => el.name.match(reg))
)

export const selectorFavoritePokemon = createSelector(
    state => state.pokemon.data,
    state => state.favorite,
    (pokemon, favorite) => pokemon.filter(el => favorite.includes(el.id)) 
)