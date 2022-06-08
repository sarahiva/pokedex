import './atoms.css';

export const PokemonText = ({style = 'text-default', text = 'text default'}) => {
    return (
        <p className={style}>
            { text }
        </p>
    )
}
