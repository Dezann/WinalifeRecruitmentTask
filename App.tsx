/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Search from './src/Views/Search/Search';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import RepositoryDetails from './src/Views/RepositoryDetails/RepositoryDetails';
import {IGithubRepository} from './src/components/SearchInput/SearchInput';

type RootStackParamList = {
    RepositoryDetails: {repository: IGithubRepository};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Search} />
                    <Stack.Screen
                        name="RepositoryDetails"
                        options={{title: 'Repository details'}}
                        component={RepositoryDetails}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
