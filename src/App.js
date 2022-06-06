import React from 'react';
import { Prueba } from './Prueba';

import pika from './pika.png';

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
