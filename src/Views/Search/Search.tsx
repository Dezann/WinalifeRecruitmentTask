import React from 'react';
import {View, Image} from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';

function Search() {
    return (
        <View
            style={{
                flex: 1,
                padding: 16,
            }}>
            <Image
                style={{width: 'auto', height: 120}}
                source={require('../../../assets/images/githubLogo.png')}
            />
            <SearchInput />
        </View>
    );
}

export default Search;
