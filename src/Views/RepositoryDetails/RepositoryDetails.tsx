import React from 'react';
import {Linking, View} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';
import {IGithubRepository} from '../../components/SearchInput/SearchInput';

interface IProps {
    route: {
        params: {
            repository: IGithubRepository;
        };
    };
}

export default function RepositoryDetails({
    route: {
        params: {repository},
    },
}: IProps) {
    function padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date: Date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }

    return (
        <View style={{padding: 16}}>
            <Text style={{marginBottom: 16}} variant="headlineMedium">
                {repository.name}
            </Text>
            <Text variant="bodyMedium">
                Updated at: {formatDate(new Date(repository.updatedAt))}
            </Text>
            <Text variant="bodyMedium">
                Forks: {repository.forks}
            </Text>
            <Text variant="bodyMedium">
                Stars: {repository.stars}
            </Text>
            <Text variant="bodyMedium">
                Watchers: {repository.watchers}
            </Text>
            <Button
                style={{
                    width: 'auto',
                    marginTop: 8,
                    alignSelf: 'center',
                    marginBottom: 32,
                }}
                mode="outlined"
                onPress={() => Linking.openURL(repository.url)}>
                Open in browser
            </Button>
        </View>
    );
}
