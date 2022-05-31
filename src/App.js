import React from 'react';
import { TypeIcon } from './components/atoms/TypeIcon';
import { PokemonImage } from './components/atoms/PokemonImage';
import { PokemonText } from './components/atoms/PokemonText';
import { Prueba } from './Prueba';
import { PokemonType } from './components/molecules/PokemonType';

import pika from './pika.png';
import { PokemonData } from './components/molecules/PokemonData';
import { CardHeader } from './components/molecules/CardHeader';
import { CardBody } from './components/molecules/CardBody';
import { PokemonCard } from './components/organisms/PokemonCard';

export const App = () => {
    const nums = [1,2,3,4];
    return (
        <div className="uk-grid-row-large uk-grid-column-medium uk-child-width-1-2@s uk-child-width-1-4@m uk-grid">
            {
                nums.map(value => (
                    <Prueba
                        key={value}
                        number={value} 
                    />
                ))
            }
            <PokemonCard picture={pika} name='Pikachu' tipe='Agua' power='PoderN' val='23.1' atri='PESO' />
        </div>
    )
}

/**<CardHeader image={pika} pokeName='Pikachu' tipo='Agua' /> *
 * <CardBody poder='Poder N' valor='44.12' atributo='PESO' />*/
