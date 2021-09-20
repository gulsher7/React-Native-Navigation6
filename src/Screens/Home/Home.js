//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const Home = ({ navigation }) => {

    const goToScreen = () => {
        navigation.navigate(navigationStrings.PROFILE, {
            screen: navigationStrings.EDIT_PROFILE,
             params: { user: 'jane' },
        })
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginHorizontal: 24 }}>
                <HeaderComp text="Home" />
                <ButtonComp
                    btnText="Product Details"
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

export default Home;
