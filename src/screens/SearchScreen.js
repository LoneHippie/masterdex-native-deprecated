import React, { useState } from 'react';
import { View, Text } from 'react-native';

import store from '../store/store';

import Layout from '../Layouts/Layout';
import PokemonGrid from '../components/PokemonGrid';

const SearchScreen = () => {

    const [ pokemon, setPokemon ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    store.subscribe(() => {
        setPokemon(
            store.getState().results.results.data
        )
        setIsLoading(
            store.getState().results.results.loading
        )
    });

    return (
        <Layout>
            <View>
                <Text>Search</Text>
                {
                    isLoading ? (
                        <Text>Loading...</Text>
                    ) : (
                        <PokemonGrid 
                            pokemon={pokemon}
                        />
                    )
                }
            </View>
        </Layout>
    )
};

export default SearchScreen;