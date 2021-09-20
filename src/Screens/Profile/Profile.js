//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const Profile = ({navigation}) => {

    const goToScreen = () => {
        navigation.navigate(navigationStrings.EDIT_PROFILE)
    }

    return (
        <View style={styles.container}>
             <SafeAreaView style={{ marginHorizontal: 24 }}>
                 <HeaderComp text="Profile" />
                <ButtonComp
                    btnText="Edit Profile"
                    onPress={goToScreen}
                />

            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default Profile;
