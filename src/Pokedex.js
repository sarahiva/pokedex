import React, { useState } from 'react';
import { Button } from './components/atoms/Button';
import { Cards } from './components/organisms/Cards';
import { useAxios } from './hooks/useAxios';

import './components/molecules/molecules.css';

export const Pokedex = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const {data, loading} = useAxios(url) ?? false;
    const {next, previous, results } = data ?? false;

    //(loading) ? console.log('cargando') : console.log(data);

    const handlePagination = (url) => {
        setUrl(url);
    }

    
    return(
        <>
                {
                    (loading) 
                    ? <h1>Cargando...</h1>
                    : <>
                        <div className="flex-inline">
                            <Button 
                                style={ (previous === null) ? `uk-button uk-button-default uk-disabled` : `uk-button uk-button-primary`}
                                text='ANTERIOR'
                                handle={ () => { handlePagination(previous) }}
                            />
                            <Button 
                                style={(next === null) ? `uk-button uk-button-default uk-disabled` : `uk-button uk-button-primary`}
                                text='SIGUIENTE'
                                handle={ () => { handlePagination(next) }}
                            />
                        </div>

                        <Cards pokemonList={ results }/>
                    </>
                }
        </>
    )
}
