import React from 'react'
import { useAxios } from '../../hooks/useAxios';
import { CardBody } from '../molecules/CardBody';
import { CardHeader } from '../molecules/CardHeader';

export const PokemonCard = ({url}) => {
    const {data, loading} = useAxios(url);
    const {id, name, types,abilities,height,weight} = data ?? '.';
    const pImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    //console.log(data);

    return (
        <div className="uk-margin-top">
            {
                (loading)
                ?   <p>cargando...</p>
                :   <div className=" uk-card uk-card-default uk-card-hover uk-animation-slide-bottom">
                        <CardHeader pImage={pImg} pName={name} pTypes={types} />
                        <CardBody pPower={abilities} pHeight={height} pWeight={weight} />
                    </div>
                
            }
        </div>
    )
}