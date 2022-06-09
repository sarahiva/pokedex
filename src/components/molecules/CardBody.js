import { PokemonText } from '../atoms/PokemonText';
import { PokemonData } from './PokemonData';

import './molecules.css';

export const CardBody = ({pPower = 'power', pHeight = '0', pWeight = '0'}) => {
    return (
        <div className="uk-card-body body-container2">
            <div className="power-container2">
                {
                    pPower.map((value,index) => <PokemonText  key={index} style={`medium-text`} text={`*${value.ability.name}`} />)
                }
            </div>
            <div className="data-container2 flex-inline">
                <PokemonData valText={`${pHeight}dm`} subText={`Height`} />
                <PokemonData valText={`${pWeight}hg`} subText={`Weight`} />
            </div>
        </div>
    )
}
