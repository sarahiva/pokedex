import { PokemonImage } from '../atoms/PokemonImage';
import { PokemonText } from '../atoms/PokemonText';
import { PokemonType } from './PokemonType';
import './molecules.css';

export const CardHeader = ({pImage, pName, pTypes }) => {
    return (
        <div className="uk-card-header header-container2">
            <PokemonImage image={pImage} pType={pTypes[0].type.name} />
            <div className="uk-width-expand pt-15">
                <PokemonText style={`title`} text={pName} />
                <div className="flex-inline">
                    {
                        pTypes.map((value,index) => <PokemonType key={index} pType={value.type.name} /> )
                    }
                </div>
            </div>
        </div>
    )
}
