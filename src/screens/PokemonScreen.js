import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PokemonScreenTabInfo from './PokemonScreenTabInfo';
import PokemonScreenTabMoves from './PokemonScreenTabMoves';

import HeaderBar from '../components/HeaderBar';

const PokemonScreen = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Info"
        >
            <Tab.Screen 
                name="Info"
                component={ PokemonScreenTabInfo }
            />
            <Tab.Screen 
                name="Moves"
                component={ PokemonScreenTabMoves }
            />
        </Tab.Navigator>
    )
};

PokemonScreen.navigationOptions = ({ navigation }) => {
    header: <HeaderBar />
}

export default PokemonScreen;