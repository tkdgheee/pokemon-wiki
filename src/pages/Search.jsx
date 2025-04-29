import { getRegExp } from "korean-regexp"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { selectorPokemonByReg } from "../RTK/selector"
import { Card } from "../component/card"

export default function Search(){
    const [searchParams] = useSearchParams()
    const params = searchParams.get('pokemon')
    const reg = getRegExp(params)
    const searchPokemon = useSelector(selectorPokemonByReg(reg))

    return (
        <div>
            {searchPokemon.map(el=> <Card key={el.id} pokemon={el}/>)}
        </div>
    )
}