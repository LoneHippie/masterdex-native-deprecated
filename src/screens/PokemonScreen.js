import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PokemonScreenTabInfo from './PokemonScreenTabInfo';
import PokemonScreenTabMoves from './PokemonScreenTabMoves';

const PokemonScreen = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
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

export default PokemonScreen;