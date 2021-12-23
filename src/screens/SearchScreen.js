import React, { useState } from 'react';
import { View, Text } from 'react-native';

import store from '../store/store';

import Layout from '../Layouts/Layout';

const SearchScreen = () => {

    const [ pokemon, setPokemon ] = useState([]);

    store.subscribe(() => {
        setPokemon(
            store.getState().results.data.pokemon
        )
    });

    console.log(pokemon);

    return (
        <Layout>
            <View>
                <Text>Search</Text>
            </View>
        </Layout>
    )
};

export default SearchScreen;