import React from 'react';
import { PokemonText } from '../atoms/PokemonText';
import { TypeIcon } from '../atoms/TypeIcon';

import './molecules.css';

export const PokemonType = ({pokemonType = 'Tipo'}) => {
    return (
        <div className="flex-container p-5">
            <TypeIcon />
            <PokemonText style='small-text mt-5' text={pokemonType} />
        </div>
    )
}
