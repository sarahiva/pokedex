import React from 'react';

import './index.css';

import pika from './pika.png';

export const Prueba = ({number}) => {
    //const nums = [1,2,3,4,5,6,7,8];
    return (
        <div className="uk-margin-top">
            <div className=" uk-card uk-card-default uk-card-hover">
                <div className="uk-card-header header-container">
                    <div className="img-container">
                        <img src={pika} alt='pokemon' className="img-pokemon" />
                    </div>
                    <div className="uk-width-expand title-container">
                        <h2 className="pokemon-name">Pikachu</h2>
                        <div className="icon-container">
                            <i className="fa-solid fa-droplet fa-2x type-icon"></i>
                            <p className="pokemon-type"> Tipo</p>
                        </div>
                    </div>
                </div>

                <div  className="uk-card-body body-container">
                    <div className="power-container">
                        <p>Poder 1</p>
                        <p>Poder 2</p>
                    </div>
                    <div className="data-container">
                        <p className="parraf2"><strong>43.13</strong></p>
                        <p className="parraf">Peso</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 *  <div className="uk-grid-row-large uk-grid-column-medium uk-child-width-1-2@s uk-child-width-1-4@m uk-grid">
            <div className="uk-margin-top">
                <div className=" uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
 */

