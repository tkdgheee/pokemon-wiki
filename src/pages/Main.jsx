import { useSelector } from "react-redux"
import { Card } from "../component/card"

export default function Main(){
    const pokemonData = useSelector(state => state.pokemon)
    return (
    <div className="flex justify-center flex-wrap gap-5 ">
        {pokemonData.data.map((el)=> 
        <Card key={el.id} pokemon={el}/>
        )}
    </div>
    )
}