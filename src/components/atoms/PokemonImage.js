
import './atoms.css';

export const PokemonImage = ({image}) => {
    return (
        <div className="image-container">
            <img src={image} alt="pokemon" className="img-pokemon" />
        </div>
    )
}
