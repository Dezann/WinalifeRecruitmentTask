import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {TextInput, Text, Button, ActivityIndicator} from 'react-native-paper';
import RepositoryBar from '../RepositoryBar/RepositoryBar';

export interface IGithubRepository {
    name: string;
    url: string;
    id: string;
    updatedAt: string;
    forks: number;
    stars: number;
    watchers: number;
}

export default function SearchInput() {
    const [username, setUsername] = useState<string>('');
    const [repositories, setRepositories] = useState<IGithubRepository[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getGithubRepositories = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/repos`,
            );
            const data = await response.json();
            const parsedData = data.map((repo: any) => {
                return {
                    id: repo.id,
                    name: repo.name.split('-').join(' '),
                    url: repo.html_url,
                    updatedAt: repo.updated_at,
                    forks: repo.forks,
                    stars: repo.stargazers_count,
                    watchers: repo.watchers
                };
            });
            setLoading(false)
            setRepositories(parsedData);
        } catch (error) {
            setLoading(false)
            console.error(error);
        }
    };

    return (
        <View>
            <Text variant="titleMedium">Check github user repositories</Text>
            <TextInput
                label="Username"
                value={username}
                mode="outlined"
                onChangeText={value => setUsername(value)}
            />
            <Button
                style={{width: 160, marginTop: 8, alignSelf: 'center', marginBottom: 32}}
                mode="outlined"
                disabled={!username}
                onPress={getGithubRepositories}>
                Search
            </Button>
            <ScrollView>
            {loading ? <ActivityIndicator animating={true} color={'blue'} /> :
            repositories.map(repo => 
                <RepositoryBar key={repo.id} repository={repo} />)
            }
            </ScrollView>
        </View>
    );
}
