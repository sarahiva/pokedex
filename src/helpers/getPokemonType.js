
export const getPokemonType = (pType = 'normal') => {
    switch (pType) {
        case 'normal':
            return "fa-circle-dot";
        case 'fighting':
            return "fa-hand-back-fist";
        case 'flying':
            return "fa-dove";
        case 'poison':
            return "fa-flask";
        case 'ground':
            return "fa-mountain";
        case 'rock':
            return "fa-mound";
        case 'bug':
            return "fa-bug";
        case 'ghost':
            return "fa-ghost";
        case 'steel':
            return "fa-gear";
        case 'fire':
            return "fa-fire";
        case 'water':
            return "fa-droplet";
        case 'grass':
            return "fa-seedling";
        case 'electric':
            return "fa-bolt-lightning"
        case 'psychic':
            return "fa-record-vinyl";
        case 'ice':
            return "fa-snowflake";
        case 'dragon':
            return "fa-dragon";
        case 'dark':
            return "fa-circle-half-stroke";
        case 'fairy':
            return "fa-wand-magic-sparkles";
        case 'unknown':
            return "fa-circle-question";
        case 'shadow':
            return "fa-smoke";
    
        default: 
            return "fa-circle-o";
    }
}
