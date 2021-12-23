import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/store/store';
import { Provider } from 'react-redux';

import SearchScreen from './src/screens/SearchScreen';
import TeamScreen from './src/screens/TeamScreen';
import PokemonScreen from './src/screens/PokemonScreen';

import HeaderBar from './src/components/HeaderBar';

import { colors } from './src/styles/theme';

const App = () => {

	const Stack = createNativeStackNavigator();

  	return (
    	<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: colors.pokedex_2
						},
						headerTintColor: colors.white
					}}
					initialRouteName="Search"
				>
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
						// options={({ route }) => ({ title: `${route.params.pokemon.name}` })}
						options={{title: 'Pokemon'}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
  	)
};

export default App;
