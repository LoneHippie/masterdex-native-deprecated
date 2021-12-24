import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const PokemonGrid = ({ pokemon }) => {

    return (
        pokemon ? (
            <FlatList 
                data={pokemon.data.pokemon}
                keyExtractor={() => pokemon.id}
                renderItem={({ item}) => {
                    return (
                        <Text>{item.name}</Text>
                    )
                }}
            />
        ) : null
    )
};

export default PokemonGrid;