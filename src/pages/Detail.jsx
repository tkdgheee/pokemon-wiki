import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectorPokemonById } from "../RTK/selector"
import FavoirteButton from "../component/favoriteButton"
import FlipCard from "../component/flip"

export default function Detail(){
    const {pokemonId} = useParams()
    const pokemon = useSelector(selectorPokemonById(Number(pokemonId)))
    return (
        <div>
         {pokemon ? (
            <div className="mt-20 p-5 border-3 border-gray-500">
                <h1 className="text-4xl flex justify-center">
                    {pokemon.name}
                    <FavoirteButton pokemonId={pokemon.id}/>
                </h1>
                <FlipCard frontImage={pokemon.front} backImage={pokemon.back} />
                <p className="mt-4">{pokemon.description}</p>
            </div>
    ) : (
      <p>포켓몬 정보를 불러오는 중...</p>
    )}
        </div>
    )
}