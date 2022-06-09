import React from 'react';
import { getPokemonType } from '../../helpers/getPokemonType';

import './atoms.css';

export const TypeIcon = ({pType = 'normal'}) => {
    const aux = getPokemonType(pType);
    return (
        <i className={`fa-solid ${aux} fa-1x colorIcon-${pType}`}></i>
    )
}
