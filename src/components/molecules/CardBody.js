import React from 'react';
import { PokemonText } from '../atoms/PokemonText';
import { PokemonData } from './PokemonData';

import './molecules.css';

export const CardBody = ({poder, valor, atributo}) => {
    return (
        <div className="uk-card-body body-container2">
            <div className="power-container2">
                <PokemonText  style={`medium-text`} text={poder} />
                <PokemonText  style={`medium-text`} text={poder} />
            </div>
            <div className="data-container2 flex-inline">
                <PokemonData valText={valor} subText={atributo} />
                <PokemonData valText={valor} subText={atributo} />
            </div>
        </div>
    )
}
