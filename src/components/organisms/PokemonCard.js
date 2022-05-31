import React from 'react'
import { CardBody } from '../molecules/CardBody'
import { CardHeader } from '../molecules/CardHeader'

export const PokemonCard = ({picture, name, tipe, power, val, atri}) => {
    return (
        <div className="uk-margin-top">
            <div className=" uk-card uk-card-default uk-card-hover">
                <CardHeader image={picture} pokeName={name} tipo={tipe} />
                <CardBody poder={power} valor={val} atributo={atri} />
            </div>
        </div>
    )
}
