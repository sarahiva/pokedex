import React from 'react'
import { useAxios } from '../../hooks/useAxios';
import { CardBody } from '../molecules/CardBody';
import { CardHeader } from '../molecules/CardHeader';

export const PokemonCard = ({url}) => {
    const {data, loading} = useAxios(url);
    const {id, name, sprites, types,abilities,height,weight} = data ?? '.';
    const pImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    console.log(data)
   
    return (
        <div className="uk-margin-top">
            {
                (loading)
                ?   <p>cargando...</p>
                :   <div className=" uk-card uk-card-default uk-card-hover">
                        <CardHeader image={pImg} pokeName={name} tipo={types[0].type.name} />
                        <CardBody poder={abilities[0].ability.name} valor={height} atributo={'height'} />
                    </div>
                
            }
        </div>
    )
}


/* <div className="uk-margin-top">
            <div className=" uk-card uk-card-default uk-card-hover">
                <CardHeader image={picture} pokeName={name} tipo={tipe} />
                <CardBody poder={power} valor={val} atributo={atri} />
            </div>
    </div> */