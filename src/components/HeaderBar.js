import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { updateResults } from '../store/slices';

import { singlePokemonQuery } from '../api/queries';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../styles/theme';

const HeaderBar = (props) => {

    const [ search, setSearch ] = useState('');

    const dispatch = useDispatch();

    const formHandlers = {
        handleUpdateSearch: () => {
            if (!search.length) { return }
            singlePokemonQuery(search)
                .then(data => {
                    dispatch(updateResults(data))
                })
        }
    }

    return (
        <View style={styles.header}>
            <View style={styles.searchbar}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Search for Pokemon...'}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.searchBtn} onPress={() => formHandlers.handleUpdateSearch()}>
                    <Icon name={"search"} size={20} color={"#FFFFFF"} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default HeaderBar;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%'
    },
    searchbar: {
        display: 'flex',
        flexDirection: 'row',
        width: '75%',
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 8,
        overflow: 'hidden'
    },
    input: {
        width: '85%',
        fontSize: 16,
        padding: 4,
        color: colors.text
    },
    searchBtn: {
        width: '15%',
        backgroundColor: colors.text,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})