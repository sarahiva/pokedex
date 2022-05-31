import React from 'react';
import { PokemonText } from '../atoms/PokemonText';

import './molecules.css';

export const PokemonData = ({valText = 'Valor', subText = 'ATRIBUTO'}) => {
    return (
        <div className="flex-container p-10">
            <PokemonText style='medium-text border-null' text={valText} />
            <PokemonText style='small-text border-null' text={subText} />
        </div>
    )
}
