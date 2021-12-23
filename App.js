import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen';
import TeamScreen from './src/screens/TeamScreen';
import PokemonScreen from './src/screens/PokemonScreen';

import HeaderBar from './src/components/HeaderBar';

const App = () => {

	const Stack = createNativeStackNavigator();

  	return (
    	<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Search"
					component={ SearchScreen }
					options={{ 
						headerTitle: (props) => <HeaderBar {...props} /> 
					}}
				/>
				<Stack.Screen 
					name="Team"
					component={ TeamScreen }
					options={{ title: 'My Teams' }}
				/>
				<Stack.Screen 
					name="Pokemon"
					component={ PokemonScreen }
					options={({ route }) => ({ title: `${route.params.pokemon.name}` })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
  	)
};

export default App;
