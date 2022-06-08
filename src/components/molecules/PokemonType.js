import { PokemonText } from '../atoms/PokemonText';
import { TypeIcon } from '../atoms/TypeIcon';

import './molecules.css';

export const PokemonType = ({pType}) => {
    return (
        <div className="flex-container p-5">
            <TypeIcon pType={pType} />
            <PokemonText style={`small-text mt-5`} text={pType} />
        </div>
    )
}
