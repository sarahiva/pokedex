import React from 'react';
import { PokemonImage } from '../atoms/PokemonImage';
import { PokemonText } from '../atoms/PokemonText';

import './molecules.css';
import { PokemonType } from './PokemonType';

export const CardHeader = ({image, pokeName, tipo }) => {
    return (
        <div className="uk-card-header header-container2">
            <PokemonImage image={image}/>
            <div className="uk-width-expand pt-15">
                <PokemonText style="title" text={pokeName} />
                <div className="flex-inline">
                    <PokemonType pokemonType={tipo} />
                    <PokemonType pokemonType={tipo} />
                </div>
            </div>
        </div>
    )
}
