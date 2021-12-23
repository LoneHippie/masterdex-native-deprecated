import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderBar = (props) => {

    const [ search, setSearch ] = useState('');

    return (
        <View style={styles.header}>
            <View style={styles.searchbar}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Search for Pokemon...'}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
                <TouchableOpacity style={styles.searchBtn} onPress={() => console.log(search)}>
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
        width: '70%',
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: 'orange'
    },
    input: {
        width: '90%',
        fontSize: 16
    },
    searchBtn: {
        width: '10%'
    }
})