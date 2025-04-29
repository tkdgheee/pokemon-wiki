import { useNavigate } from "react-router-dom"
import FavoirteButton from "./favoriteButton"
import { memo } from "react"

export const Card = memo(({pokemon}) => {
    const navigate = useNavigate()
    return(
        <section onClick={()=>navigate(`/detail/${pokemon.id}`)}
            className="border-3 border-gray-500 rounded-2xl hover:bg-gray-200 transition duration-200 cursor-pointer" key ={pokemon.id}>
            <img src ={pokemon.front} className="w-60 h-60 mx-auto"/>
            <div className="flex justify-center">
                {pokemon.name}
                <FavoirteButton pokemonId={pokemon.id}/>
            </div>
            
        </section>
    )
})