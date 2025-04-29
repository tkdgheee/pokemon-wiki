import { useSelector } from "react-redux"
import { selectorFavoritePokemon } from "../RTK/selector"
import { Card } from "../component/card"

export default function Favorite(){
    const pokemon = useSelector(selectorFavoritePokemon)
    return (
    <div>
         {pokemon.map((el)=> 
                <Card key={el.id} pokemon={el}/>
                )}
    </div>
    )
}