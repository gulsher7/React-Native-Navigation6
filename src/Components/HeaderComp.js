import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HeaderComp = ({
    goBack,
    text,

}) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-between', height: 42 }} >
            {!!goBack ? <TouchableOpacity
                onPress={!!goBack ? goBack : () => navigation.goBack()}
            >
                <Text>GoBack</Text>
            </TouchableOpacity> : <Text />}
            <Text>{text}</Text>
            <Text />
        </View>
    );
};


export default HeaderComp;
