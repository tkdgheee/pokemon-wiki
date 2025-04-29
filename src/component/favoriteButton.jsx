import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { addToFavorite, removeToFavorite } from "../RTK/silce";

export default function FavoirteButton({pokemonId}) {
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        if (isFavorite) {
          dispatch(removeToFavorite(pokemonId));
        } else {
          dispatch(addToFavorite(pokemonId));
        }
      }

    return(
        <button onClick={handleClick}>
            {isFavorite ? '❤️' : '♡'}
        </button>
    )
}