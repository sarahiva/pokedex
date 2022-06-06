import { PokemonCard } from './PokemonCard';

export const Cards = ({pokemonList}) => {
    return (
        <div className="uk-grid-row-large uk-grid-column-medium uk-child-width-1-2@s uk-child-width-1-5@m uk-grid">
            
            {
                pokemonList.map(value => 
                    <PokemonCard
                        key={value.name}
                        url={value.url} 
                    />
                )
            }
        </div>
    )
}
