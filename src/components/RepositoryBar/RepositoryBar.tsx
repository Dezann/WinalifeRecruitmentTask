import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {IGithubRepository} from '../SearchInput/SearchInput';

export default function RepositoryBar({
    repository,
}: {
    repository: IGithubRepository;
}) {
    const navigation = useNavigation();
    console.log(repository);
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('RepositoryDetails', {repository})}>
            <Card style={{marginVertical: 8}}>
                <Card.Content>
                    <Title>{repository.name}</Title>
                </Card.Content>
            </Card>
        </TouchableWithoutFeedback>
    );
}
