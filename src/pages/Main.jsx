import { useSelector } from "react-redux"

export default function Main(){
    const pokemonData = useSelector(state => state.pokemon)
    
    return (
    <div className="flex justify-center flex-wrap">
        {pokemonData.data.map((el)=> 
        <section key ={el.id}>
            <img src ={el.front} className="w-40 h-40 mx-auto" />
            <div>{el.name}</div>
        </section>)}
    </div>
    )
}