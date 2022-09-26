import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';

export default function SearchInput() {
    const [username, setUsername] = useState<string>('');
    const [repositories, setRepositories] = useState([])

    const getGithubRepositories = async () => {
        try {
         const response = await fetch(`https://api.sampleapis.com/beers/ale`);
         const json = await response.json();
         console.log(json);
         setRepositories(json);
       } catch (error) {
         console.error(error);
       }
     }

    useEffect(() => {
        console.log(repositories);
    }, [repositories]);

    return (
        <View>
            <Text variant="titleMedium">Search for a github repository</Text>
            <TextInput
                label="Username"
                value={username}
                mode="outlined"
                onChangeText={value => setUsername(value)}
            />
            <Button
                style={{width: 160, marginTop: 8}}
                mode="outlined"
                disabled={!username}
                onPress={getGithubRepositories}>
                Search
            </Button>
        </View>
    );
}
