import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosMultiplePokemonByID = createAsyncThunk(
    'pokemon/axiosMultiplePokemonByID',
    async(maxPokemonId) => {
        const numberArray = Array.from({length: maxPokemonId}, (_, i) => 
            i + 1 )

          const axiosAPI = async(pokemonId) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
            console.log(response.data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text)
          
            const pokemonData = {
              id: pokemonId,
              name: response.data.names.find(el => el.language.name === 'ko').name,
              description: response.data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
              front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
              back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
            }
      
            return pokemonData
          }
          
          
      
           return await Promise.all(numberArray.map((el) => axiosAPI(el)))
      
        }
)