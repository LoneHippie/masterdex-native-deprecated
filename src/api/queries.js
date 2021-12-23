import { queryOptions, handleQuery } from "./queryHandlers";

const url = 'https://beta.pokeapi.co/graphql/v1beta';

//data query for standard pokemon info such as stats, name, sprite id, abilities, types, etc
const pokemonBody = `
    base_experience
    height
    id
    name
    pokemon_species_id
    pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
            name
            pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                effect
            }
        }
    }
    pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
            name
        }
    }
    weight
    pokemon_v2_pokemontypes {
        pokemon_v2_type {
            name
        }
    }
    pokemon_v2_pokemonsprites {
        id
    }
`;

export function singlePokemonQuery(name) {
    const searchQuery = `query {
        pokemon: pokemon_v2_pokemon(where: {name: {_iregex: ${name}}, pokemon_v2_pokemonforms: {form_name: {_eq: ""}}}) {
            ${pokemonBody}
        }
    }`;

    return handleQuery(
        url,
        queryOptions(searchQuery)
    )
};

export function pokemonGenQuery(gen) {
    const searchQuery = `query {
        pokemon: pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {generation_id: {_eq: ${gen}}}, pokemon_v2_pokemonforms: {form_name: {_eq: ""}}}}) {
            ${pokemonBody}
        }
    }`;

    return handleQuery(
        url,
        queryOptions(searchQuery)
    )
};

export function pokemonTypeQuery(type) {
    const searchQuery = `query {
        pokemon: pokemon_v2_pokemon(where: {pokemon_v2_pokemonforms: {form_name: {_eq: ""}}, pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: ${type}}}}}) {
            ${pokemonBody}
        }
    }`;
    
    return handleQuery(
        url,
        queryOptions(searchQuery)
    )
};